'use client'
import { useEffect, useRef } from 'react'
import { SplitText } from '@/components/animation/SplitText'
import { AnimatedSection } from '@/components/animation/AnimatedSection'
import { MagneticButton } from '@/components/animation/MagneticButton'
import { Button } from '@/components/ui/button'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Heart, Sparkles, Globe, Sun } from 'lucide-react'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

const values = [
  { icon: Heart, title: 'Faith First', desc: 'Every decision rooted in spiritual purpose.' },
  { icon: Sparkles, title: 'Creative Excellence', desc: 'Premium quality in everything we create.' },
  { icon: Globe, title: 'Community', desc: 'Building bridges between faith and culture.' },
  { icon: Sun, title: 'Authenticity', desc: 'Real faith for real life. No pretense.' },
]

export default function AboutPage() {
  const parallaxRef = useRef<HTMLDivElement>(null!)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.parallax-bg',
        { y: 0 },
        { y: -200, scrollTrigger: { trigger: '.parallax-section', start: 'top bottom', end: 'bottom top', scrub: 1.5 } }
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-24">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <AnimatedSection>
              <p className="text-sm font-semibold text-[#2DBEFF] uppercase tracking-widest mb-4">About Us</p>
            </AnimatedSection>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold leading-none mb-8">
              <SplitText as="span" className="block">
                OUR
              </SplitText>
              <SplitText as="span" className="block text-[#2DBEFF]" delay={0.3}>
                MISSION
              </SplitText>
            </h1>
            <AnimatedSection delay={0.6}>
              <p className="text-xl text-muted max-w-xl leading-relaxed mb-10">
                To bridge faith and modern life through premium design, thoughtful storytelling, and resources that inspire authentic spiritual growth.
              </p>
              <MagneticButton>
                <Button variant="primary" size="lg" className="group">
                  Join The Movement <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </MagneticButton>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Story - Cinematic parallax */}
      <section className="parallax-section relative h-[80vh] overflow-hidden">
        <div
          ref={parallaxRef}
          className="parallax-bg absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=1920)' }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <AnimatedSection className="max-w-2xl">
            <p className="text-sm font-semibold text-[#2DBEFF] uppercase tracking-widest mb-4">Our Story</p>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
              Born from a conviction that faith deserves beauty.
            </h2>
            <p className="text-lg text-white/70 leading-relaxed">
              Virtual Genesis started as a simple idea: what if faith-based products looked as good as they felt? We&apos;re building a new kind of faith-inspired brand — one that speaks the language of a new generation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-semibold text-[#2DBEFF] uppercase tracking-widest mb-2">Values</p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold">What We Stand For</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <div className="text-center group">
                  <div className="w-16 h-16 rounded-2xl bg-[#2DBEFF]/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-[#2DBEFF] group-hover:text-white transition-all duration-300">
                    <v.icon size={28} />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-2">{v.title}</h3>
                  <p className="text-sm text-muted">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-24 bg-neutral">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { number: '10K+', label: 'Products Shipped' },
              { number: '5K+', label: 'Community Members' },
              { number: '50+', label: 'Podcast Episodes' },
            ].map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1} className="text-center">
                <div className="text-5xl md:text-6xl font-heading font-bold text-[#2DBEFF] mb-2">{stat.number}</div>
                <p className="text-muted">{stat.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#2DBEFF]/40 via-transparent to-[#FFD54A]/20" />
        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">
              Ready to begin?
            </h2>
            <p className="text-white/70 text-lg mb-10">Explore the collection, listen to the podcast, or book a coaching session.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/shop"><Button variant="accent" size="lg">Shop Collection</Button></Link>
              <Link href="/contact"><Button variant="secondary" size="lg">Get In Touch</Button></Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
