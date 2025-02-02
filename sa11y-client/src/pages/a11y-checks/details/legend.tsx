export function ChartLegend() {
  return (
    <div className="max-w-lg mx-auto flex items-center justify-center gap-4">
      <div className="flex items-center gap-2">
        <div className="rounded-full w-4 h-4 bg-red-500"></div>
        <p className="text-xs text-muted-foreground">0 - 49</p>
      </div>
      <div className="flex items-center gap-2">
        <div className="rounded-full w-4 h-4 bg-orange-500"></div>
        <p className="text-xs text-muted-foreground">50 - 80</p>
      </div>
      <div className="flex items-center gap-2">
        <div className="rounded-full w-4 h-4 bg-green-500"></div>
        <p className="text-xs text-muted-foreground">80 - 100</p>
      </div>
    </div>
  )
}
