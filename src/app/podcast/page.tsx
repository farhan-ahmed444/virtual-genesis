'use client'
import { SplitText } from '@/components/animation/SplitText'
import { AnimatedSection } from '@/components/animation/AnimatedSection'
import { podcastEpisodes } from '@/lib/data'
import { Play, Headphones, Clock } from 'lucide-react'

export default function PodcastPage() {
  return (
    <>
      <section className="relative min-h-[40vh] flex items-center pt-24">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <AnimatedSection>
            <p className="text-sm font-semibold text-[#5bd37c] uppercase tracking-widest mb-2">Podcast</p>
          </AnimatedSection>
          <h1 className="text-6xl md:text-8xl font-heading font-bold leading-none mb-6">
            <SplitText as="span" className="block">
              LISTEN
            </SplitText>
            <SplitText as="span" className="block text-[#5bd37c]" delay={0.3}>
              & LEARN
            </SplitText>
          </h1>
          <AnimatedSection delay={0.6}>
            <p className="text-lg text-muted max-w-md">Conversations on faith, culture, and creativity.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection stagger={0.1}>
            <div className="space-y-4">
              {podcastEpisodes.map((ep) => (
                <div key={ep.id} className="group flex items-center gap-6 p-5 rounded-2xl bg-neutral hover:bg-[#5bd37c]/5 transition-colors cursor-pointer">
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${ep.image})` }} />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                        <Play size={18} className="text-foreground ml-0.5" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 text-xs text-muted mb-1">
                      <Headphones size={12} />
                      <span>Episode {ep.episodeNumber}</span>
                      <span>·</span>
                      <Clock size={12} />
                      <span>{ep.duration}</span>
                      <span>·</span>
                      <span>{ep.date}</span>
                    </div>
                    <h3 className="font-semibold group-hover:text-[#5bd37c] transition-colors">{ep.title}</h3>
                    <p className="text-sm text-muted line-clamp-1">{ep.description}</p>
                  </div>
                  <Play size={20} className="text-muted group-hover:text-[#5bd37c] transition-colors flex-shrink-0" />
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
