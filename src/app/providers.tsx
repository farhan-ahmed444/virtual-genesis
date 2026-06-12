'use client'
import { type ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { LenisProvider } from './lenis-provider'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { CartDrawer } from '@/components/layout/CartDrawer'
import { SearchOverlay } from '@/components/layout/SearchOverlay'
import { ProductQuickView } from '@/components/product/ProductQuickView'
import { CursorFollower } from '@/components/layout/CursorFollower'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      refetchOnWindowFocus: false,
    },
  },
})

export function Providers({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <LenisProvider>
        <CursorFollower />
        <Header />
        <CartDrawer />
        <SearchOverlay />
        <ProductQuickView />
        <main className="flex-1">{children}</main>
        <Footer />
      </LenisProvider>
    </QueryClientProvider>
  )
}
