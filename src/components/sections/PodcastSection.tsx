'use client'
import { useRef } from 'react'
import { podcastEpisodes } from '@/lib/data'
import { AnimatedSection } from '@/components/animation/AnimatedSection'
import { Play, Pause, Headphones, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function PodcastSection() {
  const featured = podcastEpisodes[0]
  const scrollRef = useRef<HTMLDivElement>(null!)

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-sm font-semibold text-[#2DBEFF] uppercase tracking-widest mb-2">Podcast</p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold">Listen & Learn</h2>
          </div>
          <Link
            href="/podcast"
            className="text-sm font-medium text-muted hover:text-[#2DBEFF] transition-colors flex items-center gap-1 group"
          >
            All Episodes <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </AnimatedSection>

        {/* Featured Episode */}
        <AnimatedSection>
          <div className="relative bg-foreground text-white rounded-3xl overflow-hidden mb-10">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-[#2DBEFF] text-xs font-semibold uppercase tracking-widest mb-4">
                  <Headphones size={14} />
                  <span>Featured Episode</span>
                </div>
                <p className="text-sm text-white/50 mb-2">Episode {featured.episodeNumber}</p>
                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-3">{featured.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6">{featured.description}</p>
                <div className="flex items-center gap-6">
                  <button className="flex items-center gap-3 bg-[#2DBEFF] text-white px-6 py-3 rounded-full font-medium hover:bg-[#1a8fd4] transition-colors group">
                    <Play size={18} className="fill-white group-hover:scale-110 transition-transform" />
                    Play Episode
                  </button>
                  <span className="text-sm text-white/40">{featured.duration}</span>
                </div>
              </div>
              <div
                className="min-h-[300px] md:min-h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${featured.image})` }}
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Episode Carousel */}
        <AnimatedSection stagger={0.1}>
          <div ref={scrollRef} className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-6 px-6">
            {podcastEpisodes.slice(1).map((ep) => (
              <div
                key={ep.id}
                className="flex-shrink-0 w-[280px] md:w-[320px] bg-neutral rounded-2xl overflow-hidden group cursor-pointer"
              >
                <div className="relative h-40 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${ep.image})` }}
                  />
                  <button className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition-colors">
                    <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-75">
                      <Play size={20} className="text-foreground ml-0.5" />
                    </div>
                  </button>
                </div>
                <div className="p-5">
                  <p className="text-xs text-muted mb-1">Episode {ep.episodeNumber} · {ep.duration}</p>
                  <h4 className="font-semibold text-sm mb-1 group-hover:text-[#2DBEFF] transition-colors">{ep.title}</h4>
                  <p className="text-xs text-muted line-clamp-2">{ep.description}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
