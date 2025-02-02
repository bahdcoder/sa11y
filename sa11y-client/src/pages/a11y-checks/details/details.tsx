import { Spinner } from "@/components/spinner"
import { useA11yCheckQuery } from "@/hooks/use-a11y-check-query"
import { useA11yCheckSse } from "@/hooks/use-a11y-check-sse"
import { useCallback } from "react"
import { useParams } from "react-router"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import { ChartLegend } from "@/pages/a11y-checks/details/legend"
import { RadialScoreChart } from "@/pages/a11y-checks/details/radial-score-chart"
import { Head } from "@/components/head"
import { CheckCheckIcon } from "lucide-react"

const resultTypes = ["error", "warning", "notice"] as const

export default function A11yCheckDetailsPage() {
  const { a11yCheckId } = useParams()

  const { data, refetch, isLoading, isError } = useA11yCheckQuery(a11yCheckId)

  const onSubscriptionMessage = useCallback(() => {
    refetch()
  }, [refetch])

  useA11yCheckSse(a11yCheckId, onSubscriptionMessage)

  const checkIsOngoing =
    !isLoading && !isError && !data?.completedAt && !data?.failedAt

  const completed = !isLoading && !isError && data?.completedAt

  return (
    <>
      <Head
        title={
          isLoading ? "Loading a11y check..." : `A11y check - ${data?.name}`
        }
        canonical={`/a11y-checks/${a11yCheckId}`}
      />
      <div className="py-2 lg:px-5 flex flex-col w-full">
        {isLoading ? (
          <div className="flex justify-center my-12">
            <Spinner className="w-16 h-16" />
          </div>
        ) : null}
        {isError ? (
          <p className="text-center text-red-500">
            Failed to load this a11y check. Please make sure the check exists.
          </p>
        ) : null}
        {checkIsOngoing ? (
          <h1
            data-testid="a11y-checks-pending-page-title"
            className="w-full text-xl flex justify-center mt-12 items-center gap-3 text-center"
          >
            We're currently running the analysis on your file <Spinner />
          </h1>
        ) : null}

        {completed ? (
          <Card className="flex flex-col mx-auto w-full max-w-2xl">
            <CardHeader className="items-center pb-0">
              <CardTitle>Your Accessibility report is ready</CardTitle>
              <CardDescription>
                {data?.results?.length} total issues found.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
              <RadialScoreChart score={data?.score} />

              <ChartLegend />

              <div className="mt-12 flex justify-center mx-auto">
                <Tabs defaultValue="error" className="w-full">
                  <div className="flex justify-center w-full">
                    <TabsList>
                      {resultTypes.map((type) => (
                        <TabsTrigger
                          key={type}
                          className="capitalize"
                          value={type}
                        >
                          {type}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </div>
                  <div className="pt-4">
                    {resultTypes.map((type) => (
                      <TabsContent value={type} key={type}>
                        <Accordion type="multiple">
                          {data?.results
                            ?.filter((result) => result.type === type)
                            ?.map((result) => (
                              <AccordionItem key={result.id} value={result.id}>
                                <AccordionTrigger>
                                  <div className="flex gap-3 items-start">
                                    <div
                                      className={cn(
                                        "rounded-full mt-1 w-4 h-4 flex-shrink-0",
                                        {
                                          "bg-blue-500":
                                            result.type == "notice",
                                          "bg-red-500": result.type == "error",
                                          "bg-orange-500":
                                            result.type == "warning",
                                          "bg-gray-500":
                                            result.type === "unknown",
                                        }
                                      )}
                                    ></div>
                                    {result?.message}
                                  </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                  {result?.element ? (
                                    <>
                                      <pre className="p-4 overflow-x-auto bg-gray-100 rounded-lg font-mono">
                                        <code>{result?.element}</code>
                                      </pre>

                                      <hr className="my-4" />
                                    </>
                                  ) : null}
                                  {result?.code ? (
                                    <div className="bg-blue-100 text-blue-500 p-4 rounded-lg">
                                      {result?.code}
                                    </div>
                                  ) : null}
                                </AccordionContent>
                              </AccordionItem>
                            ))}
                          {data?.results?.length === 0 ? (
                            <p className="flex items-center gap-4 py-4 justify-center">
                              <CheckCheckIcon className="text-green-500" />

                              <span>No {type}s found</span>
                            </p>
                          ) : null}
                        </Accordion>
                      </TabsContent>
                    ))}
                  </div>
                </Tabs>
              </div>
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm"></CardFooter>
          </Card>
        ) : null}
      </div>
    </>
  )
}
