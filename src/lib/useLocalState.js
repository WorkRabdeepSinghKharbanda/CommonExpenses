import { useEffect, useState } from 'react'
import { loadState, saveState } from './storage.js'

export function useLocalState(key, fallback) {
  const [value, setValue] = useState(() => loadState(key, fallback))

  useEffect(() => {
    saveState(key, value)
  }, [key, value])

  return [value, setValue]
}
