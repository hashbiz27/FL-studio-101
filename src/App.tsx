import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import PlatformLayout from '@/layouts/PlatformLayout'
import LandingPage from '@/pages/LandingPage'
import PricingPage from '@/pages/PricingPage'
import SignInPage from '@/pages/auth/SignInPage'
import SignUpPage from '@/pages/auth/SignUpPage'
import DashboardPage from '@/pages/dashboard/DashboardPage'
import CurriculumPage from '@/pages/learn/CurriculumPage'
import ModulePage from '@/pages/learn/ModulePage'
import LessonPage from '@/pages/learn/LessonPage'
import CommunityPage from '@/pages/community/CommunityPage'
import ProjectDetailPage from '@/pages/community/ProjectDetailPage'
import SettingsPage from '@/pages/settings/SettingsPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Marketing */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/pricing" element={<PricingPage />} />

        {/* Auth */}
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />

        {/* Platform — sidebar + header layout */}
        <Route element={<PlatformLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/learn" element={<CurriculumPage />} />
          <Route path="/learn/:moduleSlug" element={<ModulePage />} />
          <Route path="/learn/:moduleSlug/:lessonSlug" element={<LessonPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/community/:projectId" element={<ProjectDetailPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
