import { A11yReportContract } from '#services/a11y/contracts/a11y_report_contract'
import { A11yRunnerContract } from '#services/a11y/contracts/a11y_runner_contract'
import app from '@adonisjs/core/services/app'
import { readFile } from 'node:fs/promises'
import { Page } from 'puppeteer'

interface HTMLCodeSnifferReport {
  type: 1 | 2 | 3
  message: string
  code: string
  element: string
}

export class HTMLCodeSnifferRunner implements A11yRunnerContract {
  async setup(page: Page) {
    await page.evaluate(await this.codeSnifferScript())
  }

  async analyze(page: Page) {
    const results = (await page.evaluate(
      await this.codeSnifferEvaluatorScript()
    )) as HTMLCodeSnifferReport[]

    return results.map((result) => ({
      ...result,
      type: this.codeSnifferTypeToA11yType(result.type),
    }))
  }

  protected codeSnifferScript() {
    return readFile(app.publicPath('runners/html-code-sniffer.js'), 'utf-8')
  }

  protected codeSnifferEvaluatorScript() {
    return readFile(app.publicPath('runners/html-code-sniffer-evaluator.js'), 'utf-8')
  }

  protected codeSnifferTypeToA11yType(
    type: HTMLCodeSnifferReport['type']
  ): A11yReportContract['type'] {
    switch (type) {
      case 1:
        return 'error'
      case 2:
        return 'warning'
      case 3:
        return 'notice'

      default:
        return 'unknown'
    }
  }
}
