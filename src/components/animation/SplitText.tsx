'use client'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { cn } from '@/lib/utils'

interface SplitTextProps {
  children: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div'
  className?: string
  delay?: number
  stagger?: number
  duration?: number
  blur?: boolean
}

export function SplitText({
  children,
  as: Tag = 'h1',
  className,
  delay = 0,
  stagger = 0.04,
  duration = 0.8,
  blur = true,
}: SplitTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const chars = containerRef.current?.querySelectorAll('.split-char')
    if (!chars || !chars.length) return

    gsap.fromTo(
      chars,
      {
        opacity: 0,
        y: 80,
        rotateX: -90,
        filter: blur ? 'blur(8px)' : 'none',
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        filter: 'blur(0px)',
        duration,
        stagger,
        delay,
        ease: 'power4.out',
      }
    )
  }, [children, delay, stagger, duration, blur])

  const chars = children.split('').map((char, i) => {
    if (char === ' ') {
      return <span key={i} className="inline-block">&nbsp;</span>
    }
    return (
      <span
        key={i}
        className="split-char inline-block"
        style={{ perspective: '1000px' }}
      >
        {char}
      </span>
    )
  })

  return (
    <div ref={containerRef} className={cn('inline', className)}>
      <Tag className="inline">{chars}</Tag>
    </div>
  )
}
