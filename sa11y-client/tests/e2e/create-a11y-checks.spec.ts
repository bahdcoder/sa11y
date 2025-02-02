import { test, expect } from "@playwright/test"
import path from "path"

test("can create an a11y check, and see the report of the a11y check", async ({
  page,
}) => {
  await page.goto("/")

  const now = Date.now()

  const a11yCheckName = `Adonis - ${now}`

  const waitForFileChooser = page.waitForEvent("filechooser")

  await page.getByLabel("Select HTML file from your computer").click()

  const fileChooser = await waitForFileChooser
  await fileChooser.setFiles(
    path.join(import.meta.dirname, "mocks/adonis-js-framework-home-page.html")
  )

  const a11yNameField = page.getByPlaceholder(
    "Give a name to this accessibility test"
  )

  expect
    .soft(
      a11yNameField,
      "The a11y name field input is not visible on the page. It should be."
    )
    .toBeVisible()

  await a11yNameField.fill(a11yCheckName)

  const createA11yCheckButton = page.getByLabel("Create A11y check")

  expect
    .soft(
      createA11yCheckButton,
      "The create a11y check button should be enabled when all valid input has been provided. It is not. Perhaps something changed."
    )
    .toBeEnabled()

  await createA11yCheckButton.click()

  await page.waitForURL("a11y-checks/**")

  await page.waitForSelector('[data-testid="a11y-checks-pending-page-title"]')

  expect(
    page.url(),
    "After submitting the create form, the user was not navigated to the a11y-checks details page."
  ).toContain("a11y-checks")
})
