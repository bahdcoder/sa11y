import { screen } from "@testing-library/react"
import { test, expect } from "vitest"
import NewA11yCheckPage from "./new"
import userEvent from "@testing-library/user-event"
import { renderInApp } from "@/tests/helpers"

test("the new a11y check page renders a composer to upload files", () => {
  renderInApp(<NewA11yCheckPage />)

  expect(screen.getByLabelText("Create A11y check")).toBeInTheDocument()
})

test("the user can upload a valid file, and see the uploaded file rendered in the document", async () => {
  renderInApp(<NewA11yCheckPage />)

  const TEST_FILE_NAME = "/path/to/test-uploaded-file.html"

  const input = screen.getByLabelText("Upload an HTML file")

  await userEvent.upload(input, new File([], TEST_FILE_NAME, {}))

  expect(screen.getByText(TEST_FILE_NAME)).toBeInTheDocument()
})
