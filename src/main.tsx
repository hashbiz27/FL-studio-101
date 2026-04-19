import { StrictMode, type ReactNode } from 'react'
import { createRoot } from 'react-dom/client'
import { ClerkProvider } from '@clerk/clerk-react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import App from './App'
import './index.css'
import 'highlight.js/styles/github-dark-dimmed.css'

const queryClient = new QueryClient()
const clerkKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY as string | undefined

function Providers({ children }: { children: ReactNode }) {
  if (clerkKey) {
    return (
      <ClerkProvider publishableKey={clerkKey}>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </ClerkProvider>
    )
  }
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
      <App />
    </Providers>
  </StrictMode>,
)
