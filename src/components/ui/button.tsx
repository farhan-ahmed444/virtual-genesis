'use client'
import { forwardRef, type ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

const variants = {
  primary:
    'bg-[#5bd37c] text-white hover:bg-[#3da85c] shadow-lg shadow-[#5bd37c]/20 hover:shadow-[#5bd37c]/30',
  secondary:
    'bg-white text-foreground border border-border hover:border-[#5bd37c] hover:text-[#5bd37c]',
  outline:
    'bg-transparent text-foreground border-2 border-foreground hover:bg-foreground hover:text-white',
  ghost: 'bg-transparent text-foreground hover:bg-neutral',
  accent:
    'bg-gradient-accent text-foreground font-semibold hover:opacity-90 shadow-lg shadow-[#f8c602]/20',
  link: 'bg-transparent text-[#5bd37c] underline-offset-4 hover:underline p-0',
}

const sizes = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-12 px-6 text-base',
  lg: 'h-14 px-8 text-lg',
  xl: 'h-16 px-10 text-xl',
  icon: 'h-10 w-10',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variants
  size?: keyof typeof sizes
  loading?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', loading, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          'relative inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 cursor-pointer',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5bd37c] focus-visible:ring-offset-2',
          'disabled:opacity-50 disabled:pointer-events-none',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {loading && (
          <svg className="animate-spin -ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        )}
        {children}
      </button>
    )
  }
)
Button.displayName = 'Button'

export { Button, type ButtonProps }
