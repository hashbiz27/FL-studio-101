import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Search, BookOpen, ArrowRight } from 'lucide-react'
import { GLOSSARY_TERMS } from '@/data/glossary'
import { cn } from '@/lib/utils'

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

function firstLetter(term: string) {
  return term[0].toUpperCase()
}

export default function GlossaryPage() {
  const [query, setQuery] = useState('')
  const [activeLetter, setActiveLetter] = useState<string | null>(null)

  const sorted = useMemo(
    () => [...GLOSSARY_TERMS].sort((a, b) => a.term.localeCompare(b.term)),
    [],
  )

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim()
    return sorted.filter((t) => {
      const letterMatch = !activeLetter || firstLetter(t.term) === activeLetter
      const textMatch =
        !q ||
        t.term.toLowerCase().includes(q) ||
        t.definition.toLowerCase().includes(q) ||
        t.flNote.toLowerCase().includes(q)
      return letterMatch && textMatch
    })
  }, [sorted, query, activeLetter])

  // Which letters actually have terms
  const activeLetters = useMemo(
    () => new Set(sorted.map((t) => firstLetter(t.term))),
    [sorted],
  )

  // Group filtered results by letter for display
  const grouped = useMemo(() => {
    const map = new Map<string, typeof filtered>()
    for (const term of filtered) {
      const letter = firstLetter(term.term)
      if (!map.has(letter)) map.set(letter, [])
      map.get(letter)!.push(term)
    }
    return map
  }, [filtered])

  const isFiltering = query.trim() !== '' || activeLetter !== null

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-50">Glossary</h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          {GLOSSARY_TERMS.length} music production terms — plain English, with FL Studio context.
        </p>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        <input
          type="search"
          placeholder="Search terms, definitions, or FL Studio notes…"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setActiveLetter(null)
          }}
          className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 pl-9 pr-4 py-2.5 text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-studio-500/40 focus:border-studio-500"
        />
      </div>

      {/* A–Z index */}
      <div className="flex flex-wrap gap-1">
        {ALPHABET.map((letter) => {
          const hasTerms = activeLetters.has(letter)
          const isActive = activeLetter === letter
          return (
            <button
              key={letter}
              disabled={!hasTerms}
              onClick={() => {
                setActiveLetter(isActive ? null : letter)
                setQuery('')
              }}
              className={cn(
                'w-7 h-7 flex items-center justify-center rounded text-xs font-semibold transition-colors',
                isActive
                  ? 'bg-studio-500 text-white'
                  : hasTerms
                  ? 'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-studio-500/50 hover:text-studio-500'
                  : 'text-gray-300 dark:text-gray-700 cursor-default',
              )}
            >
              {letter}
            </button>
          )
        })}
        {isFiltering && (
          <button
            onClick={() => { setQuery(''); setActiveLetter(null) }}
            className="px-2 h-7 rounded text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 border border-gray-200 dark:border-gray-700 hover:border-gray-300 transition-colors ml-1"
          >
            Clear
          </button>
        )}
      </div>

      {/* Result count */}
      {isFiltering && (
        <p className="text-xs text-gray-400 dark:text-gray-600">
          {filtered.length} result{filtered.length !== 1 ? 's' : ''}
        </p>
      )}

      {/* Terms */}
      {filtered.length === 0 ? (
        <div className="py-16 text-center text-sm text-gray-400 dark:text-gray-600">
          No terms match your search.
        </div>
      ) : (
        <div className="space-y-8">
          {Array.from(grouped.entries()).map(([letter, terms]) => (
            <section key={letter}>
              {/* Letter heading */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold text-studio-500 w-5">{letter}</span>
                <div className="flex-1 h-px bg-gray-100 dark:bg-gray-800" />
              </div>

              {/* Term cards */}
              <div className="space-y-3">
                {terms.map((t) => (
                  <div
                    key={t.term}
                    className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 space-y-3"
                  >
                    {/* Term title */}
                    <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">
                      {t.term}
                    </h3>

                    {/* Definition */}
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      {t.definition}
                    </p>

                    {/* FL Studio note */}
                    <div className="rounded-lg bg-studio-500/5 border border-studio-500/15 px-3 py-2.5 space-y-1">
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-studio-500 dark:text-studio-400">
                        In FL Studio
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                        {t.flNote}
                      </p>
                    </div>

                    {/* Lesson link */}
                    {t.lessonLink && (
                      <Link
                        to={`/learn/${t.lessonLink.moduleSlug}/${t.lessonLink.lessonSlug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-studio-500 hover:text-studio-600 dark:hover:text-studio-400 transition-colors group"
                      >
                        <BookOpen className="w-3.5 h-3.5 shrink-0" />
                        <span className="group-hover:underline">{t.lessonLink.label}</span>
                        <ArrowRight className="w-3 h-3 opacity-60 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  )
}
