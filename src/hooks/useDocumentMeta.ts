import { useEffect } from 'react'

const SITE_NAME = 'FL Studio 101'
const DEFAULT_DESCRIPTION =
  'Learn FL Studio music production — from complete beginner to advanced. Music-first approach.'

interface MetaOptions {
  title?: string | null
  description?: string | null
  ogType?: string
}

function upsertMeta(nameOrProp: string, content: string) {
  const isProp = nameOrProp.startsWith('og:') || nameOrProp.startsWith('twitter:')
  const attr = isProp ? 'property' : 'name'
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${nameOrProp}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, nameOrProp)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export function useDocumentMeta({ title, description, ogType = 'website' }: MetaOptions) {
  useEffect(() => {
    const fullTitle = title ? `${title} — ${SITE_NAME}` : SITE_NAME
    const desc = description ?? DEFAULT_DESCRIPTION

    document.title = fullTitle
    upsertMeta('description', desc)
    upsertMeta('og:title', fullTitle)
    upsertMeta('og:description', desc)
    upsertMeta('og:type', ogType)
    upsertMeta('og:site_name', SITE_NAME)
  }, [title, description, ogType])
}
