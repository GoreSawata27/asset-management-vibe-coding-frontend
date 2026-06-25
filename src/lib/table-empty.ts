/** Plain hyphen for empty table cells. Never use em dash (—) in tables. */
export const TABLE_EMPTY_CELL = "-"

export function tableCellOrEmpty(value: string | null | undefined) {
  const trimmed = value?.trim()
  return trimmed ? trimmed : TABLE_EMPTY_CELL
}
