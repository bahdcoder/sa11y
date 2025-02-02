import React from "react"
import { Route, BrowserRouter as Router, Routes } from "react-router"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { QueryClient, QueryClientProvider } from "react-query"
import { HelmetProvider } from "react-helmet-async"
import { NotFound } from "@/pages/meta/not-found"

const CreateA11yCheckPage = React.lazy(
  () => import("@/pages/a11y-checks/new/new")
)
const A11yCheckDetailsPage = React.lazy(
  () => import("@/pages/a11y-checks/details/details")
)

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <Router>
          <SidebarProvider>
            <AppSidebar />
            <main className="h-screen flex flex-col w-full px-6 lg:px-0">
              <div className="py-2 lg:px-4">
                <SidebarTrigger />
              </div>
              <Routes>
                <Route
                  path="/a11y-checks/new"
                  element={<CreateA11yCheckPage />}
                />
                <Route path="/" element={<CreateA11yCheckPage />} />
                <Route path="*" element={<NotFound />} />
                <Route
                  path="/a11y-checks/:a11yCheckId"
                  element={<A11yCheckDetailsPage />}
                />
              </Routes>
            </main>
          </SidebarProvider>
        </Router>
      </HelmetProvider>
    </QueryClientProvider>
  )
}

export default App
