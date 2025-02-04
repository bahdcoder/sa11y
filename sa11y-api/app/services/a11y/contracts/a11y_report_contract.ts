export interface A11yReportContract {
  type: 'error' | 'warning' | 'notice'
  message: string
  code: string
  element: string
  recommendation?: string
}
