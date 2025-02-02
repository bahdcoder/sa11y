import { apiClient } from "@/lib/axios"
import { A11yCheck } from "@/types/api/a11y-checks"
import { useQuery } from "react-query"

export function useA11yCheckQuery(a11yCheckId: string | undefined) {
  return useQuery<A11yCheck>({
    queryKey: ["a11y-checks", a11yCheckId],
    async queryFn() {
      const response = await apiClient.get(`/a11y-checks/${a11yCheckId}`)

      return response.data
    },
    enabled: a11yCheckId !== undefined,
    retry: 1,
  })
}
