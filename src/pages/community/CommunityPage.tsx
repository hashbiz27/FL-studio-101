import { Music2, Upload, MessageSquare, ThumbsUp, Lock } from 'lucide-react'
import { cn } from '@/lib/utils'
import { usePageTitle } from '@/hooks/usePageTitle'

const PLACEHOLDER_PROJECTS = [
  {
    title: 'Late Night Trap Beat',
    author: 'kwame_beats',
    genre: 'Trap',
    bpm: 140,
    likes: 24,
    comments: 7,
    module: 'Genre: Trap',
    gradient: 'from-violet-500/20 to-blue-500/20',
  },
  {
    title: 'Sunday Morning Lo-Fi',
    author: 'raisin_sound',
    genre: 'Lo-Fi',
    bpm: 80,
    likes: 41,
    comments: 12,
    module: 'Genre: Lo-Fi',
    gradient: 'from-amber-500/20 to-orange-500/20',
  },
  {
    title: 'Deep House Sketch #3',
    author: 'marina_flp',
    genre: 'House',
    bpm: 124,
    likes: 18,
    comments: 5,
    module: 'Genre: House',
    gradient: 'from-teal-500/20 to-emerald-500/20',
  },
  {
    title: 'Boom Bap Attempt',
    author: 'nate_ctrl',
    genre: 'Hip-Hop',
    bpm: 90,
    likes: 9,
    comments: 3,
    module: 'Your First Beat',
    gradient: 'from-rose-500/20 to-pink-500/20',
  },
]

const GENRE_COLORS: Record<string, string> = {
  Trap: 'bg-violet-100 dark:bg-violet-500/10 text-violet-700 dark:text-violet-400',
  'Lo-Fi': 'bg-amber-100 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400',
  House: 'bg-teal-100 dark:bg-teal-500/10 text-teal-700 dark:text-teal-400',
  'Hip-Hop': 'bg-rose-100 dark:bg-rose-500/10 text-rose-700 dark:text-rose-400',
}

export default function CommunityPage() {
  usePageTitle('Community')
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-50">Community</h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Share your projects. Get feedback. Hear what others are making.
          </p>
        </div>
        <button
          disabled
          title="Coming soon"
          className="shrink-0 flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-400 dark:text-gray-600 cursor-not-allowed"
        >
          <Upload className="w-4 h-4" />
          <span className="hidden sm:inline">Upload project</span>
          <Lock className="w-3 h-3" />
        </button>
      </div>

      {/* Coming soon banner */}
      <div className="rounded-xl border border-studio-500/20 bg-studio-500/5 p-4 flex items-start gap-3">
        <Music2 className="w-4 h-4 text-studio-500 shrink-0 mt-0.5" />
        <div className="space-y-0.5">
          <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
            Community features are coming soon
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
            Project uploads, audio playback, and peer feedback are in development. Below is a preview of what the community section will look like.
          </p>
        </div>
      </div>

      {/* Project grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {PLACEHOLDER_PROJECTS.map((project) => (
          <div
            key={project.title}
            className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden opacity-80"
          >
            {/* Waveform placeholder */}
            <div className={cn('h-24 bg-gradient-to-br flex items-center justify-center', project.gradient)}>
              <WaveformIllustration />
            </div>

            <div className="p-4 space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 truncate">
                    {project.title}
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                    by {project.author}
                  </p>
                </div>
                <span className={cn('shrink-0 text-[10px] font-semibold px-1.5 py-0.5 rounded', GENRE_COLORS[project.genre])}>
                  {project.genre}
                </span>
              </div>

              <div className="flex items-center gap-3 text-xs text-gray-400 dark:text-gray-600">
                <span className="font-mono">{project.bpm} BPM</span>
                <span>·</span>
                <span>{project.module}</span>
              </div>

              <div className="flex items-center justify-between pt-1 border-t border-gray-100 dark:border-gray-800">
                <div className="flex items-center gap-4">
                  <button
                    disabled
                    className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-600 cursor-not-allowed"
                  >
                    <ThumbsUp className="w-3.5 h-3.5" />
                    {project.likes}
                  </button>
                  <button
                    disabled
                    className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-600 cursor-not-allowed"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    {project.comments}
                  </button>
                </div>
                <span className="text-[10px] text-gray-300 dark:text-gray-700 font-medium">Preview only</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom note */}
      <p className="text-center text-xs text-gray-400 dark:text-gray-600 pb-4">
        Finish a module to unlock community uploads once the feature launches.
      </p>
    </div>
  )
}

function WaveformIllustration() {
  const bars = [3, 6, 9, 14, 10, 7, 12, 16, 11, 8, 13, 6, 10, 15, 9, 5, 11, 8, 14, 7]
  return (
    <div className="flex items-center gap-0.5 h-12">
      {bars.map((h, i) => (
        <div
          key={i}
          className="w-1 rounded-full bg-white/30"
          style={{ height: `${(h / 16) * 100}%` }}
        />
      ))}
    </div>
  )
}
