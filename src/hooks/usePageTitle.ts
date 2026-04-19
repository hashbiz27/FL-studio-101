import { useEffect } from 'react'

const SITE_NAME = 'FL Studio 101'

export function usePageTitle(title: string | null | undefined) {
  useEffect(() => {
    const prev = document.title
    document.title = title ? `${title} — ${SITE_NAME}` : SITE_NAME
    return () => { document.title = prev }
  }, [title])
}
