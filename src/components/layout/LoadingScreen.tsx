'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export function LoadingScreen() {
  const containerRef = useRef<HTMLDivElement>(null!)
  const textRef = useRef<HTMLHeadingElement>(null!)

  useEffect(() => {
    const tl = gsap.timeline()

    tl.fromTo(
      textRef.current,
      { opacity: 0, scale: 0.8, filter: 'blur(10px)' },
      { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 0.8, ease: 'power3.out' }
    )
    tl.to(textRef.current, {
      opacity: 0,
      scale: 0.8,
      filter: 'blur(10px)',
      duration: 0.5,
      delay: 0.5,
    })
    tl.to(containerRef.current, {
      y: '-100%',
      duration: 0.8,
      ease: 'power4.inOut',
    })
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] bg-foreground flex items-center justify-center"
    >
      <h1
        ref={textRef}
        className="text-4xl md:text-6xl font-heading font-bold text-white tracking-tight"
      >
        VIRTUAL<span className="text-[#5bd37c]">.</span>GENESIS
      </h1>
    </div>
  )
}
