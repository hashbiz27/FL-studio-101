import { Outlet } from 'react-router-dom'
import Header from '@/components/shared/Header'
import Sidebar from '@/components/shared/Sidebar'
import { useUIStore } from '@/store/uiStore'

export default function PlatformLayout() {
  const { sidebarOpen, setSidebarOpen } = useUIStore()

  return (
    <div className="flex h-full overflow-hidden bg-gray-50 dark:bg-gray-950">
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
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-5xl mx-auto p-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}
