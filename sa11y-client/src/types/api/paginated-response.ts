export interface PaginatedResponse<T> {
  meta: {
    total: number
    perPage: number
    lastPage: number
    firstPage: number
  }
  data: T[]
}
