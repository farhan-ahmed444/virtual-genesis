'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useMousePosition } from '@/hooks/useMousePosition'

export function CursorFollower() {
  const cursorRef = useRef<HTMLDivElement>(null!)
  const { x, y } = useMousePosition()

  useEffect(() => {
    if (!cursorRef.current) return
    gsap.to(cursorRef.current, {
      x: x - 15,
      y: y - 15,
      duration: 0.6,
      ease: 'power2.out',
    })
  }, [x, y])

  return (
    <div
      ref={cursorRef}
      className="fixed w-8 h-8 rounded-full bg-[#5bd37c]/20 border border-[#5bd37c]/30 pointer-events-none z-[9999] mix-blend-difference hidden lg:block"
      style={{ transform: 'translate(-50%, -50%)' }}
    />
  )
}
