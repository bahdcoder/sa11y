import { Head } from "@/components/head"
import { Composer } from "@/pages/a11y-checks/new/components/composer"

export default function CreateA11yCheckPage() {
  return (
    <>
      <Head title="Create new A11y check" canonical="/a11y-checks/new" />
      <div className="h-full w-full flex items-center justify-center">
        <div className="w-full max-w-xl mx-auto flex flex-col">
          <header className="flex flex-col items-center mb-8">
            <h1 className="text-center text-2xl font-semibold mb-2">
              Hi, I'm Sa11y.
            </h1>
            <p className="text-sm">
              What accessibility check would you like to run today?
            </p>
          </header>

          <Composer />
        </div>
      </div>
    </>
  )
}
