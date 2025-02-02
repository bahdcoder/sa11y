export interface A11yCheck {
  id: string
  name: string
  failedAt: string
  completedAt: string
  createdAt: string
  score: number
  results: A11yResult[]
}

export interface A11yResult {
  id: string
  type: "warning" | "error" | "notice" | "unknown"
  message: string
  code: string
  element: string
}
