import * as React from "react"

import { cn } from "@/lib/utils"

export function FilterToolbar({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-2 border-b border-border bg-primary/[0.03] p-3",
        className
      )}
    >
      {children}
    </div>
  )
}
