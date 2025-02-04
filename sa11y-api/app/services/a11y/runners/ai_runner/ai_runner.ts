import { A11yRunnerContract } from '#services/a11y/contracts/a11y_runner_contract'
import { Page } from 'puppeteer'
import { ChatOpenAI } from '@langchain/openai'
import { HumanMessage, SystemMessage } from '@langchain/core/messages'
import accessibilityCheckerPrompt from '#services/a11y/runners/ai_runner/prompt'
import logger from '@adonisjs/core/services/logger'

export class AiRunner implements A11yRunnerContract {
  protected model = new ChatOpenAI({ model: 'gpt-4o-mini' })

  async setup(_page: Page, _url: string) {}

  async analyze(_page: Page, url: string) {
    const content = await this.fetchHTMLContent(url)

    const results = await this.model.invoke([
      new SystemMessage(accessibilityCheckerPrompt),
      new HumanMessage(`Current HTML Content: \n ${content}\n`),
    ])

    return []
  }

  protected async fetchHTMLContent(url: string) {
    try {
      const response = await fetch(url)

      return response.text()
    } catch (error) {
      logger.error(error)
      throw new Error('Failed to fetch HTML content', error)
    }
  }
}
