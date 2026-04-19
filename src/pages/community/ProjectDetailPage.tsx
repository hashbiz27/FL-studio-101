import { Link } from 'react-router-dom'
import { ArrowLeft, Music2 } from 'lucide-react'
import { usePageTitle } from '@/hooks/usePageTitle'

export default function ProjectDetailPage() {
  usePageTitle('Project')

  return (
    <div className="max-w-2xl mx-auto py-16 px-6 text-center">
      <Music2 className="w-10 h-10 text-studio-500 mx-auto mb-4" />
      <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
        Project detail coming soon
      </h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-xs mx-auto mb-8">
        Full project pages — audio playback, comments, and .flp downloads — are in the works.
      </p>
      <Link
        to="/community"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-studio-500 hover:underline"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        Back to community
      </Link>
    </div>
  )
}
