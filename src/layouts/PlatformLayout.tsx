import { Outlet, useLocation } from 'react-router-dom'
import Header from '@/components/shared/Header'
import Sidebar from '@/components/shared/Sidebar'
import { useUIStore } from '@/store/uiStore'

export default function PlatformLayout() {
  const { sidebarOpen, setSidebarOpen } = useUIStore()
  const location = useLocation()

  return (
    <div className="flex h-full overflow-hidden bg-gray-50 dark:bg-gray-950">
      {/* Skip navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-studio-500 focus:text-white focus:rounded-lg focus:text-sm focus:font-medium"
      >
        Skip to content
      </a>

      {/* Mobile backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar handles both mobile overlay and desktop static */}
      <Sidebar />

      {/* Right panel: header + scrollable content */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <Header />
        <main id="main-content" className="flex-1 overflow-y-auto">
          <div key={location.pathname} className="max-w-5xl mx-auto p-6 animate-page-fade">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}
