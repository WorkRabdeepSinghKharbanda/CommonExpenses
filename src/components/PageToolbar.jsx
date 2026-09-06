export default function PageToolbar({ title, onExport, onClear }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
      <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">{title}</h1>
      <div className="flex gap-2">
        {onExport && (
          <button onClick={onExport} className="btn-secondary text-xs">
            Export CSV
          </button>
        )}
        {onClear && (
          <button
            onClick={() => {
              if (confirm('Clear all data for this calculator?')) onClear()
            }}
            className="btn-secondary text-xs"
          >
            Clear all
          </button>
        )}
      </div>
    </div>
  )
}
