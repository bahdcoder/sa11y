import { useQuery } from "react-query"
import { apiClient } from "@/lib/axios"
import { A11yCheck } from "@/types/api/a11y-checks"
import { isToday, isYesterday, isWithinInterval, subDays } from "date-fns"
import { PaginatedResponse } from "@/types/api/paginated-response"

export type GroupedA11yChecks = {
  today: { name: "Today"; items: A11yCheck[] }
  yesterday: { name: "Yesterday"; items: A11yCheck[] }
  sevenDays: { name: "7 days"; items: A11yCheck[] }
  thirtyDays: { name: "30 days"; items: A11yCheck[] }
  older: { name: "Older"; items: A11yCheck[] }
}

export function useA11yChecksListQuery() {
  return useQuery<PaginatedResponse<A11yCheck>>({
    queryKey: ["a11y-checks"],
    async queryFn() {
      const response = await apiClient.get("/a11y-checks")

      return response.data
    },
  })
}

export function groupA11yChecks(checks: A11yCheck[]): GroupedA11yChecks {
  const now = new Date()

  const sortedChecks = [...checks].sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  })

  return sortedChecks.reduce(
    (groups, check) => {
      const createdAt = new Date(check.createdAt)

      if (isToday(createdAt)) {
        return {
          ...groups,
          today: {
            ...groups.today,
            items: [...groups.today.items, check],
          },
        }
      }

      if (isYesterday(createdAt)) {
        return {
          ...groups,
          yesterday: {
            ...groups.yesterday,
            items: [...groups.yesterday.items, check],
          },
        }
      }

      if (
        isWithinInterval(createdAt, {
          start: subDays(now, 7),
          end: subDays(now, 2),
        })
      ) {
        return {
          ...groups,
          sevenDays: {
            ...groups.sevenDays,
            items: [...groups.sevenDays.items, check],
          },
        }
      }

      if (
        isWithinInterval(createdAt, {
          start: subDays(now, 30),
          end: subDays(now, 8),
        })
      ) {
        return {
          ...groups,
          thirtyDays: {
            ...groups.thirtyDays,
            items: [...groups.thirtyDays.items, check],
          },
        }
      }

      return {
        ...groups,
        older: {
          ...groups.older,
          items: [...groups.older.items, check],
        },
      }
    },
    {
      today: {
        name: "Today",
        items: [],
      },
      yesterday: {
        name: "Yesterday",
        items: [],
      },
      sevenDays: {
        name: "7 days",
        items: [],
      },
      thirtyDays: {
        name: "30 days",
        items: [],
      },
      older: {
        name: "Older",
        items: [],
      },
    } as GroupedA11yChecks
  )
}
