import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
        <Route path="/" element={<LandingPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/learn" element={<CurriculumPage />} />
        <Route path="/learn/:moduleSlug" element={<ModulePage />} />
        <Route path="/learn/:moduleSlug/:lessonSlug" element={<LessonPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/community/:projectId" element={<ProjectDetailPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </BrowserRouter>
  )
}
