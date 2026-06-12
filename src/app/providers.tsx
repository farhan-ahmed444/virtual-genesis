'use client'
import { type ReactNode, useEffect, useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { LenisProvider } from './lenis-provider'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { CartDrawer } from '@/components/layout/CartDrawer'
import { SearchOverlay } from '@/components/layout/SearchOverlay'
import { ProductQuickView } from '@/components/product/ProductQuickView'
import { LoadingScreen } from '@/components/layout/LoadingScreen'
import { CursorFollower } from '@/components/layout/CursorFollower'

const queryClient = new QueryClient()

export function Providers({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <LenisProvider>
        {loading && <LoadingScreen />}
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
