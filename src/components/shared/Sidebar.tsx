import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { BookKey, ChevronLeft, Gauge, Lock, Music2, Settings, Users, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useUIStore } from '@/store/uiStore'
import { MODULES } from '@/data/modules'
import { useAllModuleProgress } from '@/hooks/useProgress'

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== 'undefined' ? window.innerWidth >= 768 : true,
  )
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches)
    mq.addEventListener('change', handler)
    setIsDesktop(mq.matches)
    return () => mq.removeEventListener('change', handler)
  }, [])
  return isDesktop
}

const navItemClass = (isActive: boolean) =>
  cn(
    'flex rounded-lg transition-colors text-sm',
    isActive
      ? 'bg-studio-500/10 text-studio-500 dark:text-studio-400'
      : [
          'text-gray-600 hover:bg-gray-100 hover:text-gray-900',
          'dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200',
        ],
  )

export default function Sidebar() {
  const sidebarOpen = useUIStore((s) => s.sidebarOpen)
  const setSidebarOpen = useUIStore((s) => s.setSidebarOpen)
  const sidebarCollapsed = useUIStore((s) => s.sidebarCollapsed)
  const toggleSidebarCollapse = useUIStore((s) => s.toggleSidebarCollapse)

  const isDesktop = useIsDesktop()
  const collapsed = sidebarCollapsed && isDesktop
  const moduleProgress = useAllModuleProgress()

  return (
    <aside
      className={cn(
        'flex flex-col overflow-hidden shrink-0',
        'bg-white dark:bg-gray-900',
        'border-r border-gray-200 dark:border-gray-800',
        'fixed inset-y-0 left-0 z-50 w-64',
        'transition-transform duration-300 ease-in-out',
        sidebarOpen ? 'translate-x-0' : '-translate-x-full',
        'md:relative md:inset-auto md:z-auto',
        'md:translate-x-0',
        'md:transition-[width] md:duration-300 md:ease-in-out',
        collapsed ? 'md:w-16' : 'md:w-64',
      )}
    >
      {/* Sidebar header */}
      <div
        className={cn(
          'flex items-center h-14 shrink-0 px-4 gap-2.5',
          'border-b border-gray-200 dark:border-gray-800',
          collapsed && 'md:justify-center md:px-0',
        )}
      >
        <Music2 className="shrink-0 w-5 h-5 text-studio-500" />
        {!collapsed && (
          <>
            <span className="font-semibold text-sm text-gray-900 dark:text-gray-100 truncate">
              FL Studio 101
            </span>
            <button
              onClick={() => setSidebarOpen(false)}
              className={cn(
                'ml-auto md:hidden flex items-center justify-center w-7 h-7 rounded-lg',
                'text-gray-500 hover:text-gray-700 hover:bg-gray-100',
                'dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-800',
                'transition-colors',
              )}
              aria-label="Close navigation"
            >
              <X className="w-4 h-4" />
            </button>
          </>
        )}
      </div>

      {/* Scrollable nav */}
      <nav className="flex-1 overflow-y-auto py-3 px-2 space-y-0.5">
        {/* Dashboard */}
        <NavLink
          to="/dashboard"
          end
          title={collapsed ? 'Dashboard' : undefined}
          className={({ isActive }) =>
            cn(navItemClass(isActive), collapsed ? 'justify-center p-2' : 'items-center gap-2.5 px-2.5 py-2')
          }
        >
          <Gauge className="shrink-0 w-4 h-4" />
          {!collapsed && <span className="truncate">Dashboard</span>}
        </NavLink>

        {/* Curriculum section label */}
        <div className="pt-4 pb-1.5">
          {collapsed ? (
            <div className="h-px bg-gray-200 dark:bg-gray-800 mx-2" />
          ) : (
            <p className="px-2.5 text-[10px] font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-600">
              Curriculum
            </p>
          )}
        </div>

        {/* Module list */}
        {MODULES.map((module) => {
          const progress = moduleProgress[module.slug]
          return (
            <div key={module.slug}>
              <NavLink
                to={`/learn/${module.slug}`}
                end={false}
                title={collapsed ? `${String(module.order).padStart(2, '0')}. ${module.title}` : undefined}
                className={({ isActive }) =>
                  cn(
                    navItemClass(isActive),
                    'relative overflow-hidden',
                    collapsed ? 'justify-center p-2' : 'items-center gap-2.5 px-2.5 py-2',
                  )
                }
              >
                {/* Module number badge */}
                <span
                  className={cn(
                    'shrink-0 w-5 h-5 flex items-center justify-center',
                    'text-[10px] font-mono font-semibold rounded',
                    'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-500',
                  )}
                >
                  {String(module.order).padStart(2, '0')}
                </span>

                {!collapsed && (
                  <>
                    <span className="flex-1 truncate">{module.title}</span>
                    <span className="shrink-0">
                      {module.isFree ? (
                        <span className="text-[9px] font-semibold text-emerald-600 dark:text-emerald-500 bg-emerald-50 dark:bg-emerald-500/10 px-1 py-0.5 rounded">
                          FREE
                        </span>
                      ) : (
                        <Lock className="w-3 h-3 text-gray-300 dark:text-gray-700" />
                      )}
                    </span>
                    {/* Progress underline — only shown when started */}
                    {progress && progress.percent > 0 && (
                      <span
                        className="absolute bottom-0 left-0 h-0.5 bg-studio-500/50 transition-[width] duration-500"
                        style={{ width: `${progress.percent}%` }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            </div>
          )
        })}

        {/* Other section label */}
        <div className="pt-4 pb-1.5">
          {collapsed ? (
            <div className="h-px bg-gray-200 dark:bg-gray-800 mx-2" />
          ) : (
            <p className="px-2.5 text-[10px] font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-600">
              Other
            </p>
          )}
        </div>

        <NavLink
          to="/cheatsheet"
          title={collapsed ? 'Cheat Sheets' : undefined}
          className={({ isActive }) =>
            cn(navItemClass(isActive), collapsed ? 'justify-center p-2' : 'items-center gap-2.5 px-2.5 py-2')
          }
        >
          <BookKey className="shrink-0 w-4 h-4" />
          {!collapsed && <span className="truncate">Cheat Sheets</span>}
        </NavLink>

        <NavLink
          to="/community"
          end
          title={collapsed ? 'Community' : undefined}
          className={({ isActive }) =>
            cn(navItemClass(isActive), collapsed ? 'justify-center p-2' : 'items-center gap-2.5 px-2.5 py-2')
          }
        >
          <Users className="shrink-0 w-4 h-4" />
          {!collapsed && <span className="truncate">Community</span>}
        </NavLink>

        <NavLink
          to="/settings"
          end
          title={collapsed ? 'Settings' : undefined}
          className={({ isActive }) =>
            cn(navItemClass(isActive), collapsed ? 'justify-center p-2' : 'items-center gap-2.5 px-2.5 py-2')
          }
        >
          <Settings className="shrink-0 w-4 h-4" />
          {!collapsed && <span className="truncate">Settings</span>}
        </NavLink>
      </nav>

      {/* Desktop collapse toggle */}
      <div className="hidden md:block shrink-0 border-t border-gray-200 dark:border-gray-800 p-2">
        <button
          onClick={toggleSidebarCollapse}
          title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          className={cn(
            'flex items-center rounded-lg transition-colors w-full',
            'text-gray-500 hover:bg-gray-100 hover:text-gray-700',
            'dark:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-gray-300',
            collapsed ? 'justify-center p-2' : 'gap-2.5 px-2.5 py-2',
          )}
        >
          <ChevronLeft
            className={cn('shrink-0 w-4 h-4 transition-transform duration-300', collapsed && 'rotate-180')}
          />
          {!collapsed && <span className="text-sm truncate">Collapse</span>}
        </button>
      </div>
    </aside>
  )
}
