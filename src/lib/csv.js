// Spreadsheet apps (Excel, Google Sheets) treat a leading =, +, -, or @ as
// the start of a formula — a cell value starting with one of these gets
// evaluated instead of shown as text. Prefixing with a single quote forces
// it to render as plain text instead. Matters here because cell values can
// come from a shared link (src/lib/shareLink.js), not just self-typed data.
function neutralizeFormula(s) {
  return /^[=+\-@]/.test(s) ? `'${s}` : s
}

export function downloadCSV(filename, rows) {
  if (!rows.length) return
  const headers = Object.keys(rows[0])
  const escape = (v) => `"${neutralizeFormula(String(v ?? '')).replace(/"/g, '""')}"`
  const csv = [headers.join(','), ...rows.map((r) => headers.map((h) => escape(r[h])).join(','))].join('\n')

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.click()
  URL.revokeObjectURL(url)
}
