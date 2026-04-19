import { Link } from 'react-router-dom'
import { Music2, CheckCircle2 } from 'lucide-react'
import { usePageTitle } from '@/hooks/usePageTitle'

const FREE_FEATURES = [
  'First 2 modules (Getting Started + Your First Beat)',
  'All cheat sheets & keyboard shortcuts',
  'Glossary of 64+ music production terms',
  'Pre-bounce checklist',
  'Community project showcase (view)',
]

const PRO_FEATURES = [
  'All 18 modules — 100+ lessons',
  'Genre deep-dives: Trap, Lo-Fi, House',
  'Advanced sound design & mastering',
  'Downloadable FL project files (.flp)',
  'Sample packs & preset bundles',
  'Community showcase — upload & share',
  'Early access to new modules',
]

export default function PricingPage() {
  usePageTitle('Pricing')

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-gray-950/80 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <Music2 className="w-5 h-5 text-studio-500" />
            <span className="text-sm font-semibold text-white">FL Studio 101</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/sign-in" className="text-sm text-gray-400 hover:text-white transition-colors">
              Sign in
            </Link>
            <Link
              to="/sign-up"
              className="text-sm font-semibold bg-studio-500 hover:bg-studio-600 text-white px-4 py-1.5 rounded-lg transition-colors"
            >
              Get started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="flex-1 px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-black text-white mb-4">Simple pricing</h1>
            <p className="text-gray-400 text-lg max-w-md mx-auto">
              Start free. Go pro when you're ready to unlock everything.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Free */}
            <div className="rounded-2xl border border-gray-800 bg-gray-900 p-8 flex flex-col">
              <h2 className="text-lg font-bold text-white mb-1">Free</h2>
              <p className="text-sm text-gray-400 mb-6">The essentials, no card required.</p>
              <div className="mb-8">
                <span className="text-5xl font-black text-white">$0</span>
                <span className="text-gray-400 ml-1">/ forever</span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {FREE_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                to="/sign-up"
                className="block text-center rounded-lg border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white py-2.5 text-sm font-semibold transition-colors"
              >
                Create free account
              </Link>
            </div>

            {/* Pro */}
            <div className="rounded-2xl border-2 border-studio-500 bg-gray-900 p-8 flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-studio-500 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-bl-lg">
                Most popular
              </div>
              <h2 className="text-lg font-bold text-white mb-1">Pro</h2>
              <p className="text-sm text-gray-400 mb-6">Everything, including new modules as they ship.</p>
              <div className="mb-8">
                <span className="text-5xl font-black text-white">$9</span>
                <span className="text-gray-400 ml-1">/ month</span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {PRO_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-studio-400 shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                to="/sign-up"
                className="block text-center rounded-lg bg-studio-500 hover:bg-studio-600 text-white py-2.5 text-sm font-semibold transition-colors"
              >
                Start Pro — $9/mo
              </Link>
            </div>
          </div>

          <p className="text-center text-xs text-gray-600 mt-10">
            Cancel anytime. No hidden fees.
          </p>
        </div>
      </section>
    </div>
  )
}
