'use client'
import { AnimatedSection } from '@/components/animation/AnimatedSection'
import { MagneticButton } from '@/components/animation/MagneticButton'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function NewsletterSection() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0 gradient-primary opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#5bd37c]/40 via-transparent to-[#f8c602]/20" />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <AnimatedSection>
          <p className="text-sm font-semibold text-white/70 uppercase tracking-widest mb-4">Newsletter</p>
          <h2 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">
            Stay
            <br />
            <span className="text-white">Inspired</span>
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-md mx-auto">
            Get early access to drops, podcast episodes, and curated content.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
          >
            <div className="flex-1">
              <input
                type="text"
                placeholder="Your name"
                className="w-full h-14 px-6 rounded-full bg-white/15 backdrop-blur-sm text-white placeholder:text-white/40 border border-white/20 focus:border-white/40 outline-none transition-colors"
              />
            </div>
            <div className="flex-1">
              <input
                type="email"
                placeholder="Your email"
                className="w-full h-14 px-6 rounded-full bg-white/15 backdrop-blur-sm text-white placeholder:text-white/40 border border-white/20 focus:border-white/40 outline-none transition-colors"
              />
            </div>
            <MagneticButton>
              <Button variant="accent" size="lg" className="group whitespace-nowrap">
                Join The Journey
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </MagneticButton>
          </form>
        </AnimatedSection>
      </div>
    </section>
  )
}
