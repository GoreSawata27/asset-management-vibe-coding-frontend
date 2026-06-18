"use client"

import * as React from "react"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils"

export type ColumnDef<T> = {
  key: string
  header: React.ReactNode
  cell: (row: T) => React.ReactNode
  className?: string
}

export function DataTable<T>({
  columns,
  rows,
  embedded = false,
  className,
}: {
  columns: ColumnDef<T>[]
  rows: T[]
  embedded?: boolean
  className?: string
}) {
  return (
    <div
      className={cn(
        "overflow-hidden",
        embedded
          ? "border-t border-border [&_th]:h-9 [&_th]:px-3 [&_td]:px-3 [&_td]:py-2.5"
          : "rounded-xl ring-1 ring-border/60 [&_th]:px-4 [&_td]:px-4 [&_td]:py-3",
        className
      )}
    >
      <Table>
        <TableHeader>
          <TableRow className="border-border bg-primary/5 hover:bg-primary/5">
            {columns.map((col) => (
              <TableHead key={col.key} className={col.className}>
                {col.header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row, idx) => (
            <TableRow key={idx} className="border-border hover:bg-accent/50">
              {columns.map((col) => (
                <TableCell key={col.key} className={col.className}>
                  {col.cell(row)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

