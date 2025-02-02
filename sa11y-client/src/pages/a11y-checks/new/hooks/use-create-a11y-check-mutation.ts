import { apiClient } from "@/lib/axios"
import { A11yCheck } from "@/types/api/a11y-checks"
import { PaginatedResponse } from "@/types/api/paginated-response"
import { AxiosError } from "axios"
import { useMutation, useQueryClient } from "react-query"
import { useNavigate } from "react-router"

interface CreateA11yResponse {
  message?: string
  description?: string
  data: {
    name: string
    a11yCheckId: string
    transmitKey: string
  }
}

export function useCreateA11yCheckMutation() {
  const navigate = useNavigate()

  const queryClient = useQueryClient()

  return useMutation<
    CreateA11yResponse,
    AxiosError<{ errors: { field: string; message: string }[] }>,
    { file: File; name: string }
  >({
    async mutationFn({ file, name }) {
      const form = new FormData()

      form.append("html", file)
      form.append("name", name)

      const response = await apiClient.post("/a11y-checks", form)

      return response.data
    },
    onSuccess(response) {
      queryClient.setQueryData<PaginatedResponse<A11yCheck> | undefined>(
        ["a11y-checks"],
        (oldData) => {
          if (!oldData) return oldData

          return {
            ...oldData,
            data: [
              {
                id: response.data.a11yCheckId,
                name: response.data.name,
                createdAt: new Date().toISOString(),
                completedAt: null,
                failedAt: null,
              },
              ...(oldData.data || []),
            ],
          } as PaginatedResponse<A11yCheck>
        }
      )

      navigate(`/a11y-checks/${response?.data?.a11yCheckId}`)
    },
    onError() {
      // return error?.response?.data?.errors?.map((error) => error?.message)
    },
  })
}
