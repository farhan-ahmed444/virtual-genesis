'use client'
import { useRef, type ReactNode } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

interface ParallaxLayerProps {
  children: ReactNode
  speed?: number
  className?: string
}

export function ParallaxLayer({ children, speed = 0.5, className }: ParallaxLayerProps) {
  const ref = useScrollReveal<HTMLDivElement>({
    direction: 'up',
    distance: speed * 100,
    duration: 1.2,
    scrub: true,
  })

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
