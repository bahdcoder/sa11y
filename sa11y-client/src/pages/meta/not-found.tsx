import { Button } from "@/components/ui/button"
import { Link } from "react-router"

export function NotFound() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl mb-4 text-center font-semibold">
          You seem to be lost
        </h1>
        <Link to="/">
          <Button>Take me back home</Button>
        </Link>
      </div>
    </div>
  )
}
