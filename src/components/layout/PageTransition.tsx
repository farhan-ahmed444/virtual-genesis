'use client'
import { useEffect, useRef, type ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import gsap from 'gsap'

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const containerRef = useRef<HTMLDivElement>(null!)
  const overlayRef = useRef<HTMLDivElement>(null!)

  useEffect(() => {
    if (!overlayRef.current) return

    const tl = gsap.timeline()
    tl.set(overlayRef.current, { scaleY: 0, transformOrigin: 'top' })
    tl.to(overlayRef.current, {
      scaleY: 1,
      duration: 0.5,
      ease: 'power4.inOut',
    })
    tl.to(overlayRef.current, {
      scaleY: 0,
      duration: 0.5,
      ease: 'power4.inOut',
      delay: 0.1,
      transformOrigin: 'bottom',
    })
  }, [pathname])

  return (
    <div ref={containerRef}>
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[99] bg-foreground pointer-events-none"
      />
      {children}
    </div>
  )
}
