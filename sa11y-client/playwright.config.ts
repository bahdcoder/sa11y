import { defineConfig, devices } from "@playwright/test"

import path from "path"
import dotenv from "dotenv"
dotenv.config({ path: path.resolve(".env.e2e") })

export default defineConfig({
  testDir: "./tests/e2e",

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,

  reporter: "html",

  use: {
    baseURL: process.env.VITE_CLIENT_URL,

    trace: "on-first-retry",
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
})
