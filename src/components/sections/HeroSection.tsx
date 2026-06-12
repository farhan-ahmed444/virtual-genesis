'use client'
import { useEffect, useRef } from 'react'
import { SplitText } from '@/components/animation/SplitText'
import { MagneticButton } from '@/components/animation/MagneticButton'
import { Button } from '@/components/ui/button'
import { useMousePosition } from '@/hooks/useMousePosition'
import gsap from 'gsap'
import { ArrowRight, Sparkles } from 'lucide-react'

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null!)
  const particlesRef = useRef<HTMLDivElement>(null!)
  const cardsRef = useRef<HTMLDivElement>(null!)
  const glowRef = useRef<HTMLDivElement>(null!)
  const { normalizedX, normalizedY } = useMousePosition()

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })

    // Subtitle
    tl.fromTo(
      '.hero-subtitle',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 }
    )
    // Buttons
    tl.fromTo(
      '.hero-buttons > *',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.15 },
      '-=0.4'
    )
    // Floating cards
    tl.fromTo(
      '.floating-card',
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.8, stagger: 0.2 },
      '-=0.3'
    )
  }, [])

  useEffect(() => {
    if (!cardsRef.current) return
    const cards = cardsRef.current.querySelectorAll('.floating-card')
    cards.forEach((card, i) => {
      const speed = 0.02 + i * 0.01
      gsap.to(card, {
        x: normalizedX * 40 * (i + 1) * speed,
        y: normalizedY * 30 * (i + 1) * speed,
        duration: 1.5,
        ease: 'power2.out',
      })
    })
  }, [normalizedX, normalizedY])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-mesh"
    >
      {/* Animated light rays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-[#5bd37c]/10 via-transparent to-transparent rotate-12 animate-float" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-[#0fa8ed]/30 via-transparent to-transparent -rotate-6 animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 bg-[#5bd37c]/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Cursor glow */}
      <div
        ref={glowRef}
        className="absolute w-[500px] h-[500px] rounded-full bg-[#5bd37c]/5 blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{ left: `${normalizedX * 50 + 50}%`, top: `${normalizedY * 50 + 50}%` }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[70vh]">
          {/* Left Content */}
          <div className="pt-24 lg:pt-0">
            <div className="hero-subtitle flex items-center gap-2 text-sm font-medium text-[#5bd37c] mb-6">
              <Sparkles size={16} />
              <span>Faith-Inspired Lifestyle</span>
            </div>

            <h1 className="font-heading font-bold leading-none">
              <div className="text-[clamp(4rem,8vw,8rem)]">
                <SplitText as="span" className="block" stagger={0.03} delay={0.2}>
                  WHERE
                </SplitText>
              </div>
              <div className="text-[clamp(4rem,8vw,8rem)] text-[#5bd37c] ml-[0.5em]">
                <SplitText as="span" className="block" stagger={0.03} delay={0.5}>
                  NEW
                </SplitText>
              </div>
              <div className="text-[clamp(4rem,8vw,8rem)]">
                <SplitText as="span" className="block" stagger={0.03} delay={0.8}>
                  BEGINS
                </SplitText>
              </div>
            </h1>

            <p className="mt-8 text-lg text-muted max-w-md leading-relaxed">
              Faith-inspired apparel, artwork, coaching and resources designed to inspire your journey.
            </p>

            <div className="hero-buttons flex flex-wrap gap-4 mt-10">
              <MagneticButton>
                <Button variant="primary" size="lg" className="group">
                  Shop Collection
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button variant="secondary" size="lg">
                  Explore Art
                </Button>
              </MagneticButton>
            </div>
          </div>

          {/* Right: Floating Cards */}
          <div ref={cardsRef} className="relative hidden lg:block h-[70vh]">
            <div className="floating-card absolute top-[5%] right-[10%] w-64 h-80 rounded-2xl overflow-hidden shadow-2xl shadow-[#5bd37c]/10 rotate-6">
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(https://bravo.yourwebsitedemos.com/web/Virtual-Genesis-v3/wp-content/uploads/2026/05/Outlook-bum35e3b.png?w=600)' }} />
            </div>
            <div className="floating-card absolute top-[20%] right-[35%] w-56 h-72 rounded-2xl overflow-hidden shadow-2xl shadow-[#5bd37c]/10 -rotate-3">
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(https://bravo.yourwebsitedemos.com/web/Virtual-Genesis-v3/wp-content/uploads/2026/05/Outlook-bum35e3b.png?w=600)' }} />
            </div>
            <div className="floating-card absolute bottom-[10%] right-[5%] w-52 h-64 rounded-2xl overflow-hidden shadow-2xl shadow-[#f8c602]/10 rotate-12">
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(https://bravo.yourwebsitedemos.com/web/Virtual-Genesis-v3/wp-content/uploads/2026/05/Outlook-bum35e3b.png?w=600)' }} />
            </div>
            <div className="floating-card absolute bottom-[15%] right-[40%] w-48 h-60 rounded-2xl overflow-hidden shadow-2xl shadow-[#5bd37c]/10 -rotate-8">
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(https://bravo.yourwebsitedemos.com/web/Virtual-Genesis-v3/wp-content/uploads/2026/05/Outlook-bum35e3b.png?w=600)' }} />
            </div>

            {/* Glass badge */}
            <div className="floating-card absolute top-[45%] -right-[5%] glass rounded-xl px-4 py-3 shadow-xl">
              <p className="text-sm font-semibold">New Collection</p>
              <p className="text-xs text-muted">Shop the drop →</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
