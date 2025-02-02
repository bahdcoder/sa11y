import { A11yReportContract } from '#services/a11y/contracts/a11y_report_contract'

export interface A11yReporterOutput {
  content: string
  extension: 'html' | 'csv' | 'tsv'
}

export interface A11yReporter {
  format(report: A11yReportContract): A11yReporterOutput
}
