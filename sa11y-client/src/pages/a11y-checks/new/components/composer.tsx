import { useDropzone } from "react-dropzone"
import { Button } from "@/components/ui/button"

import { FileCheckIcon, PlusIcon, Send } from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { useCallback, useState } from "react"
import { cn } from "@/lib/utils"
import { formatBytes } from "@/pages/a11y-checks/new/utils/format-bytes"
import { useCreateA11yCheckMutation } from "@/pages/a11y-checks/new/hooks/use-create-a11y-check-mutation"
import { Spinner } from "@/components/spinner"
import { Checkbox } from "@/components/ui/checkbox"

export function Composer() {
  const [name, setName] = useState("")
  const [enhanceWithAi, setEnhanceWithAi] = useState(false)

  const { mutate, error, isLoading } = useCreateA11yCheckMutation()

  const fileTypeValidator = useCallback((file: File) => {
    if (file.type !== "text/html") {
      return {
        code: "invalid_file_type",
        message:
          "We can only perform accessibility checks on HTML files. Please upload an HTML file.",
      }
    }

    const maxBytesSize = 1024 * 1024 * 6

    if (file.size > maxBytesSize) {
      return {
        code: "max_file_size_exceeded",
        message:
          "Your file is too large. We can only process HTML files that are less than 6 MB.",
      }
    }

    return null
  }, [])

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    fileRejections,
    acceptedFiles,
  } = useDropzone({
    maxFiles: 1,
    validator: fileTypeValidator,
  })

  const createA11yCheckMutation = useCallback(() => {
    mutate({
      file: acceptedFiles?.[0],
      name,
      enhanceRecommendationsWithAI: enhanceWithAi,
    })
  }, [name, acceptedFiles, mutate, enhanceWithAi])

  const { onClick: rootPropsOnClick, ...rootProps } = getRootProps()

  const createButtonIsDisabled =
    acceptedFiles.length === 0 ||
    !name ||
    name.length < 3 ||
    name.length > 24 ||
    isLoading

  function getNameErrors() {
    if (name.length > 24) {
      return ["Please pick a name with less than 24 characters"]
    }

    return []
  }

  const errorMessages = [
    ...(error?.response?.data?.errors?.map((error) => error?.message) || []),
    ...fileRejections.map((rejection) => rejection?.errors?.[0]?.message),
    ...getNameErrors(),
  ]

  return (
    <>
      {acceptedFiles.length > 0 ? (
        <div className="w-full rounded-t-xl border p-4 pb-8 -mb-4">
          {acceptedFiles.map((file) => (
            <div
              className="w-full p-2 flex flex-col border border-muted rounded-xl"
              key={file.name}
            >
              <div className="flex items-start gap-3">
                <FileCheckIcon className="text-muted-foreground w-8 h-8" />
                <div className="flex flex-col gap-2">
                  <span className="w-full overflow-hidden text-ellipsis text-xs">
                    {file.name}
                  </span>
                  <span className="text-xs">{formatBytes(file.size)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : null}
      <div
        className={cn(
          "w-full rounded-xl bg-background z-1 shadow-sm border p-4",
          {
            "bg-slate-100": isDragActive,
          }
        )}
        {...rootProps}
      >
        <input {...getInputProps()} aria-label="Upload an HTML file" />
        <input
          placeholder="Give a name to this accessibility test"
          className={cn(
            "border-transparent shadow-none focus:border-transparent focus:outline-none w-full",
            {
              "bg-slate-100": isDragActive,
            }
          )}
          onChange={(event) => setName(event.target.value)}
          value={name}
        />

        <div className="w-full mt-6 flex justify-between items-center gap-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="ai-runner"
              checked={enhanceWithAi}
              onCheckedChange={(checked) => setEnhanceWithAi(checked === true)}
            />
            <label
              htmlFor="ai-runner"
              className="text-sm mt-0.5 font-medium leading-none peer-disabled:cursor-not-allowed text-muted-foreground peer-disabled:opacity-70"
            >
              Enhance a11y recommendations with ai
            </label>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-xs text-muted-foreground">Click to upload</p>
            <div className="flex items-center gap-1">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      aria-label="Select HTML file from your computer"
                      className="[&_svg]:size-6 w-8 h-8 rounded-full text-muted-foreground"
                      onClick={rootPropsOnClick}
                    >
                      <PlusIcon />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Upload an HTML file</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      aria-label="Create A11y check"
                      disabled={createButtonIsDisabled}
                      onClick={createA11yCheckMutation}
                      className="[&_svg]:size-4 w-8 h-8 rounded-full"
                    >
                      {isLoading ? <Spinner /> : <Send />}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Create your a11y check</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        {errorMessages.map((error, idx) => (
          <p className="text-red-500 text-xs" key={idx}>
            {error}
          </p>
        ))}
      </div>
    </>
  )
}
