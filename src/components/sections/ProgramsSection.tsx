'use client'
import { programs } from '@/lib/data'
import { AnimatedSection } from '@/components/animation/AnimatedSection'
import { MagneticButton } from '@/components/animation/MagneticButton'
import { Button } from '@/components/ui/button'
import { formatPrice } from '@/lib/utils'
import { Clock, Users, ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'

export function ProgramsSection() {
  return (
    <section className="py-24 md:py-32 bg-neutral">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-sm font-semibold text-[#5bd37c] uppercase tracking-widest mb-2">Programs</p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold">Coaching & Courses</h2>
          </div>
          <Link
            href="/programs"
            className="text-sm font-medium text-muted hover:text-[#5bd37c] transition-colors flex items-center gap-1 group"
          >
            View All <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, i) => (
            <AnimatedSection key={program.id} delay={i * 0.1}>
              <div className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-[#5bd37c]/5 transition-all duration-500 hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${program.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white">
                      {program.type === 'coaching' ? 'Coaching' : 'Course'}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-bold text-lg mb-2 group-hover:text-[#5bd37c] transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-sm text-muted line-clamp-2 mb-4">{program.description}</p>
                  <div className="flex items-center gap-4 text-xs text-muted mb-4">
                    {program.sessions && (
                      <span className="flex items-center gap-1">
                        <Sparkles size={12} />
                        {program.sessions} sessions
                      </span>
                    )}
                    {program.duration && (
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {program.duration}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold">{formatPrice(program.price)}</span>
                    <MagneticButton>
                      <Button variant="primary" size="sm">
                        Learn More
                      </Button>
                    </MagneticButton>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
