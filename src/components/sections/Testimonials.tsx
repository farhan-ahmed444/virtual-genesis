'use client'
import { useEffect, useRef } from 'react'
import { testimonials } from '@/lib/data'
import { AnimatedSection } from '@/components/animation/AnimatedSection'
import { Star } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null!)
  const sectionRef = useRef<HTMLDivElement>(null!)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const width = track.scrollWidth - window.innerWidth
    if (width <= 0) return

    gsap.to(track, {
      x: -width,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.5,
      },
    })
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <AnimatedSection>
          <p className="text-sm font-semibold text-[#2DBEFF] uppercase tracking-widest mb-2">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold">What People Say</h2>
        </AnimatedSection>
      </div>

      <div ref={trackRef} className="flex gap-6 px-6 w-max">
        {[...testimonials, ...testimonials].map((t, i) => (
          <div
            key={`${t.id}-${i}`}
            className="glass-dark rounded-2xl p-6 w-[350px] flex-shrink-0 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-1 mb-3">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} size={14} className="fill-[#FFD54A] text-[#FFD54A]" />
              ))}
            </div>
            <p className="text-sm text-muted leading-relaxed mb-4">&ldquo;{t.content}&rdquo;</p>
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full bg-cover bg-center"
                style={{ backgroundImage: `url(${t.avatar})` }}
              />
              <div>
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-muted">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
