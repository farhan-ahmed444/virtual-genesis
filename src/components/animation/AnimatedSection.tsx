'use client'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right'
  distance?: number
  delay?: number
  duration?: number
  stagger?: number
  once?: boolean
}

export function AnimatedSection({
  children,
  className,
  direction = 'up',
  distance = 60,
  delay = 0,
  duration = 0.8,
  stagger = 0,
  once = true,
}: AnimatedSectionProps) {
  const ref = useScrollReveal<HTMLDivElement>({
    direction,
    distance,
    delay,
    duration,
    stagger,
    once,
  })

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  )
}
