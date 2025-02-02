import Axios from "axios"

export const apiClient = Axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})
