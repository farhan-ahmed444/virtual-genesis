'use client'
import { SplitText } from '@/components/animation/SplitText'
import { AnimatedSection } from '@/components/animation/AnimatedSection'
import { programs } from '@/lib/data'
import { formatPrice } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Clock, Sparkles, ArrowRight } from 'lucide-react'

export default function CoursesPage() {
  const courses = programs.filter((p) => p.type === 'course')

  return (
    <>
      <section className="relative min-h-[40vh] flex items-center pt-24">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <AnimatedSection>
            <p className="text-sm font-semibold text-[#2DBEFF] uppercase tracking-widest mb-2">Courses</p>
          </AnimatedSection>
          <h1 className="text-6xl md:text-8xl font-heading font-bold leading-none mb-6">
            <SplitText as="span" className="block">
              DEEP
            </SplitText>
            <SplitText as="span" className="block text-[#2DBEFF]" delay={0.3}>
              LEARNING
            </SplitText>
          </h1>
          <AnimatedSection delay={0.6}>
            <p className="text-lg text-muted max-w-md">Self-paced courses designed to help you grow in faith, creativity, and leadership.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection stagger={0.1}>
            <div className="grid md:grid-cols-2 gap-8">
              {courses.map((program) => (
                <div key={program.id} className="group bg-neutral rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="relative h-48">
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${program.image})` }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white">Course</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-[#2DBEFF] transition-colors">{program.title}</h3>
                    <p className="text-muted text-sm mb-4">{program.description}</p>
                    <div className="flex items-center gap-4 text-sm text-muted mb-4">
                      {program.sessions && <span className="flex items-center gap-1"><Sparkles size={14} />{program.sessions} lessons</span>}
                      {program.duration && <span className="flex items-center gap-1"><Clock size={14} />{program.duration}</span>}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold">{formatPrice(program.price)}</span>
                      <Button variant="primary" size="sm" className="group">
                        Enroll Now <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
