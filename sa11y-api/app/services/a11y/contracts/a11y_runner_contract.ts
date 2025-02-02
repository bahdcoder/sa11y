import { A11yReportContract } from '#services/a11y/contracts/a11y_report_contract'
import { Page } from 'puppeteer'

export interface A11yRunnerContract {
  setup(page: Page): Promise<void>
  analyze(page: Page): Promise<A11yReportContract[]>
}
