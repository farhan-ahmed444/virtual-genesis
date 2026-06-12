'use client'
import { AnimatedSection } from '@/components/animation/AnimatedSection'
import { MagneticButton } from '@/components/animation/MagneticButton'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function BrandStory() {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=1920)' }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <AnimatedSection>
          <p className="text-sm font-semibold text-[#5bd37c] uppercase tracking-widest mb-4">
            Our Story
          </p>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white leading-none mb-8">
            Faith Meets
            <br />
            <span className="text-[#5bd37c]">Modern Life</span>
          </h2>
          <p className="text-lg text-white/70 max-w-xl mx-auto mb-10 leading-relaxed">
            We believe your faith shouldn&apos;t live in a separate world. It should be woven into everything you wear, create, and pursue.
          </p>
          <MagneticButton>
            <Button variant="primary" size="lg" className="group">
              Learn More <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </MagneticButton>
        </AnimatedSection>
      </div>
    </section>
  )
}
