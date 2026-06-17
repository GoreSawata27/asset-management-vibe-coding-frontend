import * as React from "react"

import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export type AssetStatus = "In Stock" | "Assigned" | "Repair" | "Retired"

const styles: Record<AssetStatus, string> = {
  "In Stock": "bg-muted text-foreground border-border/60",
  Assigned: "bg-primary/10 text-primary border-primary/20",
  Repair: "bg-amber-500/10 text-amber-700 border-amber-500/20",
  Retired: "bg-slate-500/10 text-slate-700 border-slate-500/20",
}

export function StatusBadge({
  status,
  className,
}: {
  status: AssetStatus
  className?: string
}) {
  return (
    <Badge
      variant="outline"
      className={cn(
        "h-6 rounded-full border px-2 text-xs font-medium",
        styles[status],
        className
      )}
    >
      {status}
    </Badge>
  )
}

