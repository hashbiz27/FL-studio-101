import { Link } from 'react-router-dom'
import { Music2, ArrowRight, CheckCircle2, BookOpen, Layers, Zap, Headphones, Target, Users } from 'lucide-react'
import { MODULES } from '@/data/modules'

const VALUE_PROPS = [
  {
    icon: Target,
    title: 'Music first, software second',
    body: 'Most FL Studio courses teach button locations. We teach you to hear what sounds good and why — then show you which button does it.',
  },
  {
    icon: Headphones,
    title: '18 modules, zero fluff',
    body: 'From your first kick pattern to mastering for Spotify. Every lesson is purpose-built, with a "Try This" exercise to lock in the concept.',
  },
  {
    icon: Zap,
    title: 'Genre-specific deep dives',
    body: 'Trap, lo-fi, and house modules go beyond theory — you build a complete track in each genre from scratch.',
  },
]

const STATS = [
  { value: '18', label: 'Modules' },
  { value: '100+', label: 'Lessons' },
  { value: '20h+', label: 'Content' },
  { value: '64', label: 'Glossary terms' },
]

export default function LandingPage() {
  const previewModules = MODULES.slice(0, 9)

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-gray-950/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <Music2 className="w-5 h-5 text-studio-500" />
            <span className="font-semibold text-sm text-white">FL Studio 101</span>
          </Link>
          <nav className="flex items-center gap-3">
            <Link
              to="/pricing"
              className="text-sm text-gray-400 hover:text-white transition-colors hidden sm:block"
            >
              Pricing
            </Link>
            <Link
              to="/sign-in"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Sign in
            </Link>
            <Link
              to="/sign-up"
              className="text-sm font-semibold bg-studio-500 hover:bg-studio-600 text-white px-4 py-1.5 rounded-lg transition-colors"
            >
              Start free
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden pt-24 pb-20 px-6">
          {/* Gradient blob */}
          <div
            aria-hidden="true"
            className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-studio-500/10 blur-3xl pointer-events-none"
          />
          <div className="relative max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-studio-400 bg-studio-500/10 border border-studio-500/20 px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-studio-400 animate-pulse" />
              18 modules · all stock FL Studio plugins
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
              Learn to make{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-studio-400 to-violet-400">
                music that sounds good
              </span>{' '}
              in FL Studio
            </h1>

            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Not a button-clicking tutorial. A complete curriculum that teaches you music theory, ear training, sound design, mixing, and genre craft — with FL Studio as the instrument.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Link
                to="/sign-up"
                className="inline-flex items-center gap-2 bg-studio-500 hover:bg-studio-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
              >
                Start learning free
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white border border-white/10 hover:border-white/20 px-6 py-3 rounded-xl transition-colors"
              >
                View pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-y border-white/5 bg-white/[0.02] py-10 px-6">
          <div className="max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8">
            {STATS.map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-3xl font-extrabold text-white tabular-nums">{value}</p>
                <p className="text-xs text-gray-500 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Value props */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-white mb-12">
              Why FL Studio 101 is different
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {VALUE_PROPS.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/8 bg-white/[0.03] p-6 space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-studio-500/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-studio-400" />
                  </div>
                  <h3 className="font-semibold text-white">{title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Curriculum preview */}
        <section className="py-20 px-6 bg-white/[0.02] border-y border-white/5">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-end justify-between mb-8 gap-4">
              <div>
                <h2 className="text-2xl font-bold text-white">The curriculum</h2>
                <p className="text-sm text-gray-400 mt-1">Music literacy first — software second.</p>
              </div>
              <Link
                to="/sign-up"
                className="shrink-0 text-sm font-medium text-studio-400 hover:text-studio-300 transition-colors flex items-center gap-1"
              >
                All {MODULES.length} modules <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="space-y-2">
              {previewModules.map((module) => (
                <div
                  key={module.slug}
                  className="flex items-center gap-4 rounded-xl border border-white/8 bg-white/[0.02] hover:bg-white/[0.04] transition-colors p-4"
                >
                  <span className="shrink-0 w-7 h-7 flex items-center justify-center text-[11px] font-mono font-bold rounded-lg bg-gray-800 text-gray-400">
                    {String(module.order).padStart(2, '0')}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-100 truncate">{module.title}</p>
                    <p className="text-xs text-gray-500">{module.lessonCount} lessons · ~{module.estimatedHours}h</p>
                  </div>
                  {module.isFree && (
                    <span className="shrink-0 text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                      FREE
                    </span>
                  )}
                </div>
              ))}
              {MODULES.length > previewModules.length && (
                <div className="rounded-xl border border-white/5 bg-white/[0.01] p-4 text-center">
                  <p className="text-sm text-gray-500">
                    + {MODULES.length - previewModules.length} more modules — EQ, compression, mastering, trap, lo-fi, house, and workflow
                  </p>
                  <Link
                    to="/sign-up"
                    className="mt-2 inline-flex items-center gap-1 text-sm text-studio-400 hover:text-studio-300 transition-colors"
                  >
                    Unlock the full curriculum <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* What's included */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">
              Everything you need, built in
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { icon: BookOpen, text: '100+ structured lessons with "Try This" exercises' },
                { icon: Layers, text: 'Genre modules: Trap, Lo-Fi, and House from scratch' },
                { icon: CheckCircle2, text: 'Interactive pre-bounce mixing checklist' },
                { icon: Music2, text: '64-term music production glossary with FL Studio notes' },
                { icon: Zap, text: '50+ keyboard shortcut reference, searchable by window' },
                { icon: Users, text: 'Community project showcase (coming soon)' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3 rounded-xl border border-white/8 bg-white/[0.02] p-4">
                  <Icon className="w-4 h-4 text-studio-400 shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-300 leading-snug">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 border-t border-white/5">
          <div className="max-w-xl mx-auto text-center space-y-5">
            <h2 className="text-3xl font-bold text-white">
              Ready to stop watching tutorials and start making music?
            </h2>
            <p className="text-gray-400 text-sm">
              Module 1 is completely free. No credit card required.
            </p>
            <Link
              to="/sign-up"
              className="inline-flex items-center gap-2 bg-studio-500 hover:bg-studio-600 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors"
            >
              Start free today
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <div className="flex items-center gap-2">
            <Music2 className="w-3.5 h-3.5 text-studio-500/60" />
            <span>FL Studio 101</span>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/pricing" className="hover:text-gray-400 transition-colors">Pricing</Link>
            <Link to="/sign-in" className="hover:text-gray-400 transition-colors">Sign in</Link>
            <Link to="/sign-up" className="hover:text-gray-400 transition-colors">Sign up</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
