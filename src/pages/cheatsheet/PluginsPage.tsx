import { useState, useMemo } from 'react'
import { Search } from 'lucide-react'
import { PLUGIN_ENTRIES, type PluginCategory } from '@/data/cheatsheet'
import { cn } from '@/lib/utils'
import { usePageTitle } from '@/hooks/usePageTitle'

const CATEGORIES: PluginCategory[] = ['Synthesis', 'Sampling', 'Drums', 'Effects', 'Utility']

const CATEGORY_COLORS: Record<PluginCategory, string> = {
  Synthesis: 'bg-violet-100 dark:bg-violet-500/10 text-violet-700 dark:text-violet-400',
  Sampling: 'bg-amber-100 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400',
  Drums: 'bg-orange-100 dark:bg-orange-500/10 text-orange-700 dark:text-orange-400',
  Effects: 'bg-sky-100 dark:bg-sky-500/10 text-sky-700 dark:text-sky-400',
  Utility: 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-400',
}

export default function PluginsPage() {
  usePageTitle('Plugin Reference')
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<PluginCategory | 'All'>('All')

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim()
    return PLUGIN_ENTRIES.filter((entry) => {
      const categoryMatch = activeCategory === 'All' || entry.category === activeCategory
      const textMatch =
        !q ||
        entry.task.toLowerCase().includes(q) ||
        entry.plugins.some((p) => p.toLowerCase().includes(q)) ||
        entry.tip.toLowerCase().includes(q)
      return categoryMatch && textMatch
    })
  }, [query, activeCategory])

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-50">Plugin Reference</h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          What FL Studio stock plugin to reach for — and how to use it.
        </p>
      </div>

      {/* Search */}
      <div role="search" className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        <input
          type="search"
          aria-label="Search plugins"
          placeholder="Search by task, plugin, or keyword…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 pl-9 pr-4 py-2.5 text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-studio-500/40 focus:border-studio-500"
        />
      </div>

      {/* Category chips */}
      <div className="flex flex-wrap gap-2">
        {(['All', ...CATEGORIES] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            aria-pressed={activeCategory === cat}
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

      {/* Result count */}
      {(query || activeCategory !== 'All') && (
        <p className="text-xs text-gray-400 dark:text-gray-600">
          {filtered.length} result{filtered.length !== 1 ? 's' : ''}
        </p>
      )}

      {/* Cards */}
      {filtered.length === 0 ? (
        <div className="py-16 text-center text-sm text-gray-400 dark:text-gray-600">
          No plugins match your search.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filtered.map((entry, i) => (
            <div
              key={i}
              className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 space-y-3"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 leading-snug">
                  {entry.task}
                </h3>
                <span className={cn('shrink-0 text-[10px] font-semibold px-1.5 py-0.5 rounded', CATEGORY_COLORS[entry.category])}>
                  {entry.category}
                </span>
              </div>

              {/* Plugin badges */}
              <div className="flex flex-wrap gap-1.5">
                {entry.plugins.map((plugin) => (
                  <span
                    key={plugin}
                    className="text-xs font-medium px-2 py-0.5 rounded-md bg-studio-500/10 text-studio-600 dark:text-studio-400 border border-studio-500/20"
                  >
                    {plugin}
                  </span>
                ))}
              </div>

              {/* Tip */}
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed border-t border-gray-100 dark:border-gray-800 pt-3">
                {entry.tip}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
