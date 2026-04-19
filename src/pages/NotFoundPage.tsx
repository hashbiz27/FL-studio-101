import { Link } from 'react-router-dom'
import { Music2 } from 'lucide-react'
import { usePageTitle } from '@/hooks/usePageTitle'

export default function NotFoundPage() {
  usePageTitle('Page Not Found')

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-6 text-center">
      <Music2 className="w-12 h-12 text-studio-500 mb-6" />
      <p className="text-8xl font-black text-studio-500 leading-none mb-4">404</p>
      <h1 className="text-2xl font-bold text-gray-100 mb-2">Page not found</h1>
      <p className="text-sm text-gray-400 max-w-xs leading-relaxed mb-8">
        This URL doesn't exist. Maybe the link is broken, or you typed something wrong.
      </p>
      <Link
        to="/dashboard"
        className="inline-flex items-center gap-2 rounded-lg bg-studio-500 hover:bg-studio-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors"
      >
        Go to dashboard
      </Link>
    </div>
  )
}
