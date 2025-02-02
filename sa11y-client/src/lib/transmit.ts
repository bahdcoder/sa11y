import { Transmit } from "@adonisjs/transmit-client"

export const transmit = new Transmit({
  baseUrl: new URL(import.meta.env.VITE_API_URL).origin,
})
