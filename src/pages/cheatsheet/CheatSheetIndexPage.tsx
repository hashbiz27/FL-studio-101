import { Link } from 'react-router-dom'
import { BookKey, BookOpen, CheckSquare, Layers } from 'lucide-react'

const tools = [
  {
    to: '/cheatsheet/shortcuts',
    icon: BookKey,
    title: 'Keyboard Shortcuts',
    description: 'Every FL Studio shortcut, searchable and filterable by window.',
    cta: 'Browse shortcuts',
    accent: 'text-studio-500',
    bg: 'bg-studio-500/5 hover:bg-studio-500/10',
    border: 'border-studio-500/20 hover:border-studio-500/40',
  },
  {
    to: '/cheatsheet/checklist',
    icon: CheckSquare,
    title: 'Pre-Bounce Checklist',
    description: 'An interactive checklist to run through before you bounce every mix.',
    cta: 'Open checklist',
    accent: 'text-emerald-500',
    bg: 'bg-emerald-500/5 hover:bg-emerald-500/10',
    border: 'border-emerald-500/20 hover:border-emerald-500/40',
  },
  {
    to: '/cheatsheet/plugins',
    icon: Layers,
    title: 'Plugin Reference',
    description: 'Map any production task to the right FL Studio stock plugin — with tips.',
    cta: 'Find a plugin',
    accent: 'text-amber-500',
    bg: 'bg-amber-500/5 hover:bg-amber-500/10',
    border: 'border-amber-500/20 hover:border-amber-500/40',
  },
  {
    to: '/cheatsheet/glossary',
    icon: BookOpen,
    title: 'Glossary',
    description: '64 music production terms — plain English definitions with FL Studio context and links to the relevant lesson.',
    cta: 'Browse glossary',
    accent: 'text-violet-500',
    bg: 'bg-violet-500/5 hover:bg-violet-500/10',
    border: 'border-violet-500/20 hover:border-violet-500/40',
  },
]

export default function CheatSheetIndexPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-50">Cheat Sheets</h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Quick references to keep open while you work.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {tools.map(({ to, icon: Icon, title, description, cta, accent, bg, border }) => (
          <Link
            key={to}
            to={to}
            className={`group flex flex-col rounded-xl border p-6 transition-colors ${bg} ${border}`}
          >
            <Icon className={`w-7 h-7 mb-4 ${accent}`} />
            <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-1.5">
              {title}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1">
              {description}
            </p>
            <span className={`mt-4 text-sm font-semibold ${accent} group-hover:underline`}>
              {cta} →
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
