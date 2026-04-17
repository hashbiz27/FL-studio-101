import { useEffect, useRef, useState } from 'react'

interface Heading {
  id: string
  text: string
  level: 2 | 3
}

function stripMarkdown(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '$1')
    .replace(/\*(.+?)\*/g, '$1')
    .replace(/`(.+?)`/g, '$1')
    .replace(/\[(.+?)\]\(.+?\)/g, '$1')
}

function slugify(text: string): string {
  return stripMarkdown(text)
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
}

function extractHeadings(markdown: string): Heading[] {
  const headings: Heading[] = []
  for (const line of markdown.split('\n')) {
    const match = line.match(/^(#{2,3})\s+(.+)$/)
    if (match) {
      const level = match[1].length as 2 | 3
      const text = stripMarkdown(match[2].trim())
      headings.push({ id: slugify(match[2].trim()), text, level })
    }
  }
  return headings
}

interface Props {
  markdown: string
}

export default function TableOfContents({ markdown }: Props) {
  const [activeId, setActiveId] = useState<string>('')
  const headings = extractHeadings(markdown)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    if (headings.length === 0) return

    observerRef.current?.disconnect()

    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Find the topmost intersecting heading
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length > 0) {
          setActiveId(visible[0].target.id)
        }
      },
      { rootMargin: '-10% 0% -75% 0%', threshold: 0 }
    )

    headings.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observerRef.current?.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [markdown])

  if (headings.length === 0) return null

  return (
    <nav aria-label="On this page">
      <p className="text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-3">
        On this page
      </p>
      <ul className="space-y-1.5">
        {headings.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById(h.id)?.scrollIntoView({ behavior: 'smooth' })
                setActiveId(h.id)
              }}
              className={[
                'block text-[13px] leading-snug transition-colors py-0.5',
                h.level === 3 ? 'pl-3' : '',
                activeId === h.id
                  ? 'text-studio-500 dark:text-studio-400 font-medium'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100',
              ].join(' ')}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
