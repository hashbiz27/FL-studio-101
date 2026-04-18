import { useState, useMemo } from 'react'
import { Search } from 'lucide-react'
import { SHORTCUTS, type ShortcutCategory } from '@/data/cheatsheet'
import { cn } from '@/lib/utils'

const CATEGORIES: ShortcutCategory[] = [
  'Global',
  'Playback',
  'Piano Roll',
  'Playlist',
  'Channel Rack',
  'Mixer',
  'Browser',
]

function KeyBadge({ k }: { k: string }) {
  return (
    <kbd className="inline-flex items-center justify-center px-1.5 py-0.5 text-[11px] font-mono font-semibold rounded border bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 leading-none">
      {k}
    </kbd>
  )
}

export default function ShortcutsPage() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<ShortcutCategory | 'All'>('All')

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim()
    return SHORTCUTS.filter((s) => {
      const categoryMatch = activeCategory === 'All' || s.category === activeCategory
      const textMatch = !q || s.action.toLowerCase().includes(q) || s.keys.join(' ').toLowerCase().includes(q)
      return categoryMatch && textMatch
    })
  }, [query, activeCategory])

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-50">Keyboard Shortcuts</h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          {SHORTCUTS.length} shortcuts across {CATEGORIES.length} windows.
        </p>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        <input
          type="search"
          placeholder="Search shortcuts…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 pl-9 pr-4 py-2.5 text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-studio-500/40 focus:border-studio-500"
        />
      </div>

      {/* Category filter chips */}
      <div className="flex flex-wrap gap-2">
        {(['All', ...CATEGORIES] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              'px-3 py-1 rounded-full text-xs font-medium transition-colors border',
              activeCategory === cat
                ? 'bg-studio-500 text-white border-studio-500'
                : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:border-studio-500/50 hover:text-studio-500',
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Results count */}
      {query || activeCategory !== 'All' ? (
        <p className="text-xs text-gray-400 dark:text-gray-600">
          {filtered.length} result{filtered.length !== 1 ? 's' : ''}
        </p>
      ) : null}

      {/* Table */}
      {filtered.length === 0 ? (
        <div className="py-16 text-center text-sm text-gray-400 dark:text-gray-600">
          No shortcuts match your search.
        </div>
      ) : (
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/60">
                <th className="px-4 py-2.5 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  Action
                </th>
                <th className="px-4 py-2.5 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 w-48">
                  Shortcut
                </th>
                <th className="hidden sm:table-cell px-4 py-2.5 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 w-32">
                  Window
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {filtered.map((s, i) => (
                <tr
                  key={i}
                  className="bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors"
                >
                  <td className="px-4 py-3 text-gray-800 dark:text-gray-200">{s.action}</td>
                  <td className="px-4 py-3">
                    <span className="flex flex-wrap items-center gap-1">
                      {s.keys.map((k, ki) => (
                        <span key={ki} className="flex items-center gap-1">
                          <KeyBadge k={k} />
                          {ki < s.keys.length - 1 && (
                            <span className="text-[10px] text-gray-400">+</span>
                          )}
                        </span>
                      ))}
                    </span>
                  </td>
                  <td className="hidden sm:table-cell px-4 py-3">
                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">
                      {s.category}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
