'use client'
import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral">
      <div className="text-center max-w-md px-6">
        <h1 className="text-[8rem] font-heading font-bold text-[#2DBEFF] leading-none mb-4">!</h1>
        <h2 className="text-2xl font-heading font-bold mb-2">Something went wrong</h2>
        <p className="text-muted mb-8">An unexpected error occurred. Please try again.</p>
        <Button variant="primary" size="lg" onClick={reset}>
          Try Again
        </Button>
      </div>
    </div>
  )
}
