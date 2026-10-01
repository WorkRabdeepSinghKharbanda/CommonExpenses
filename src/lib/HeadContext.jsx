import { createContext, useContext } from 'react'

// Only provided during server rendering (see entry-server.jsx). In the
// browser this is always null, so useSeo/useJsonLd fall back to their
// existing document-mutation effects — client behavior is unchanged.
const HeadContext = createContext(null)

export function useHeadCollector() {
  return useContext(HeadContext)
}

export { HeadContext }
