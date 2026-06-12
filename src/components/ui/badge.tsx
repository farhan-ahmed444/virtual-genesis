'use client'
import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'new' | 'sale' | 'sold'
  className?: string
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 text-xs font-medium rounded-full',
        variant === 'default' && 'bg-neutral text-muted',
        variant === 'new' && 'bg-[#5bd37c] text-white',
        variant === 'sale' && 'bg-accent text-foreground',
        variant === 'sold' && 'bg-foreground text-white',
        className
      )}
    >
      {children}
    </span>
  )
}
