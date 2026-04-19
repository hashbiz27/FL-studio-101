import type { LucideIcon } from 'lucide-react'

export interface EmptyStateProps {
  icon?: LucideIcon
  title: string
  description?: string
  action?: React.ReactNode
}

export default function EmptyState({ icon: Icon, title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-6 text-center gap-3">
      {Icon && <Icon className="w-10 h-10 text-gray-300 dark:text-gray-700 mb-1" />}
      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">{title}</p>
      {description && (
        <p className="text-sm text-gray-400 dark:text-gray-500 max-w-xs leading-relaxed">
          {description}
        </p>
      )}
      {action && <div className="mt-2">{action}</div>}
    </div>
  )
}
