import A11YCheck from '#models/a11y_check'
import A11yResult from '#models/a11y_result'
import z from 'zod'
import { A11yReportContract } from '#services/a11y/contracts/a11y_report_contract'
import app from '@adonisjs/core/services/app'
import logger from '@adonisjs/core/services/logger'
import drive from '@adonisjs/drive/services/main'
import { ChatOpenAI } from '@langchain/openai'
import { HumanMessage, SystemMessage } from '@langchain/core/messages'
import Puppeteer from 'puppeteer'

import { fixRecommendationsPrompt } from '#services/a11y/enhancers/ai/fix_recommendations_prompt'
export class A11yService {
  protected model = new ChatOpenAI({ model: 'gpt-4o-mini' })

  /**
   * Executes an accessibility check on an HTML file
   *
   * @param a11yCheck - The A11YCheck instance containing check configuration and file information
   *
   * @description
   * This method performs the following operations:
   * 1. Retrieves a temporary URL for the HTML file from storage
   * 2. Launches a Puppeteer browser instance
   * 3. Loads the HTML file in the browser
   * 4. Runs accessibility analysis using the specified runner
   * 5. Saves the results in chunks to the database
   *
   * @throws Error if file access fails, browser operations fail, or analysis fails
   *
   * @returns Promise<A11yReportContract[]> Array of accessibility check results
   */
  async run(a11yCheck: A11YCheck) {
    logger.debug('Obtaining temporarily publicly accessible HTML file from storage disk')
    const uploadedFileUrl = await drive.use().getSignedUrl(a11yCheck.fileKey, {
      expiresIn: 120 * 1000, // 120 seconds
      contentType: 'text/html',
    })

    logger.debug('Launching headless browser.')
    const browser = await Puppeteer.launch()
    const page = await browser.newPage()

    await page.setViewport({
      width: 1280,
      height: 720,
    })

    logger.debug('Opening uploaded html file in headless browser.')
    await page.goto(uploadedFileUrl, { waitUntil: 'networkidle2', timeout: 30000 })

    const resolver = await app.container.make('a11y.runner-resolver')

    const runner = resolver.resolve(a11yCheck.runner)

    await runner.setup(page, uploadedFileUrl)
    let results = await runner.analyze(page, uploadedFileUrl)

    if (a11yCheck.enhanceWithAi) {
      results = await this.enhanceResultsWithAi(results)
    }

    await a11yCheck.complete()

    await page.close()
    await browser.close()

    const chunkedResults = this.chunkResults(results)

    for (const chunk of chunkedResults) {
      const insert = chunk.map(({ type, code, message, recommendation }) => ({
        type,
        code,
        message,
        a11yCheckId: a11yCheck.id,
        aiRecommendation: recommendation,
      }))

      await A11yResult.createMany(insert)
    }

    return results
  }

  protected chunkResults(results: A11yReportContract[]) {
    return this.chunkArray<A11yReportContract>(results, 50)
  }

  protected chunkArray<T>(list: T[], size = 3): T[][] {
    const chunkedArray: T[][] = []

    for (let i = 0; i < list.length; i += size) {
      chunkedArray.push(list.slice(i, i + size))
    }

    return chunkedArray
  }

  protected async enhanceResultsWithAi(results: A11yReportContract[]) {
    const llm = this.model.withStructuredOutput(
      z.object({
        recommendations: z.array(
          z.object({
            'issue-id': z.string().describe('The unique Id of this accessibility issue'),
            'recommendation': z
              .string()
              .describe('A detailed recommendation on how to fix the specified issue'),
          })
        ),
      })
    )

    const issues = results.filter((result) => result.type === 'error')
    const nonCriticalIssues = results.filter((result) => result.type !== 'error')

    logger.debug(`Calling the LLM with ${issues.length} issues for fix recommendations`)

    const formattedLlmInput = issues.map((issue, idx) => ({
      'issue-id': idx,
      'issue': issue.message,
      ...(issue.element.length < 200 ? { element: issue.element } : {}),
    }))

    const output = await llm.invoke([
      new SystemMessage(fixRecommendationsPrompt),
      new HumanMessage(JSON.stringify(formattedLlmInput, null, 2)),
    ])

    logger.debug(`LLM call successful, with ${output?.recommendations?.length} fix recommendations`)

    return [
      ...issues.map((issue, idx) => ({
        ...issue,
        recommendation: output.recommendations[idx]?.recommendation,
      })),
      ...nonCriticalIssues,
    ]
  }
}
