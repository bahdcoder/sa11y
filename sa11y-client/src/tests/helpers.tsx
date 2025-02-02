import { HelmetProvider } from "react-helmet-async"
import { BrowserRouter } from "react-router"
import { QueryClientProvider, QueryClient } from "react-query"
import React from "react"
import { render } from "@testing-library/react"

export function renderInApp(node: React.ReactNode) {
  return render(
    <QueryClientProvider client={new QueryClient()}>
      <BrowserRouter>
        <HelmetProvider>{node}</HelmetProvider>
      </BrowserRouter>
    </QueryClientProvider>
  )
}
