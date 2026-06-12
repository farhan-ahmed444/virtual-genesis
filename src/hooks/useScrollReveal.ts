'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ScrollRevealOptions {
  trigger?: gsap.DOMTarget
  direction?: 'up' | 'down' | 'left' | 'right'
  distance?: number
  delay?: number
  duration?: number
  stagger?: number
  start?: string
  end?: string
  scrub?: boolean | number
  markers?: boolean
  once?: boolean
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: ScrollRevealOptions = {}
) {
  const ref = useRef<T>(null!)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const {
      direction = 'up',
      distance = 60,
      delay = 0,
      duration = 0.8,
      stagger = 0,
      start = 'top 85%',
      scrub = false,
      once = true,
    } = options

    const fromVars: gsap.TweenVars = {
      opacity: 0,
      duration,
      delay,
      ease: 'power3.out',
    }

    if (direction === 'up') fromVars.y = distance
    else if (direction === 'down') fromVars.y = -distance
    else if (direction === 'left') fromVars.x = distance
    else if (direction === 'right') fromVars.x = -distance

    if (stagger > 0) {
      fromVars.stagger = stagger
    }

    const children = el.children.length > 0
      ? [...el.children].filter(
          (c) => !['SCRIPT', 'STYLE'].includes(c.tagName)
        )
      : el

    if (scrub) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: start as string,
          end: 'bottom top',
          scrub: typeof scrub === 'number' ? scrub : 1,
        },
      })
      tl.fromTo(children, fromVars, { opacity: 1, y: 0, x: 0, duration: 1 })
    } else {
      gsap.fromTo(
        children,
        fromVars,
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration,
          stagger,
          scrollTrigger: {
            trigger: el,
            start: start as string,
            once,
          },
        }
      )
    }

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el || el.contains(st.trigger as Node)) {
          st.kill()
        }
      })
    }
  }, [options.direction, options.distance, options.delay, options.duration, options.stagger, options.start, options.scrub])

  return ref
}
