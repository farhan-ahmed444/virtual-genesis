'use client'
import { collections } from '@/lib/data'
import { AnimatedSection } from '@/components/animation/AnimatedSection'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function CollectionShowcase() {
  return (
    <section className="py-24 md:py-32 bg-neutral">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="mb-12">
          <p className="text-sm font-semibold text-[#5bd37c] uppercase tracking-widest mb-2">Collections</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold">Explore</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-3">
          {collections.map((collection, i) => (
            <AnimatedSection key={collection.id} delay={i * 0.1}>
              <Link
                href={`/${collection.slug}`}
                className="group relative block aspect-[3/4] md:aspect-auto md:h-[500px] rounded-2xl overflow-hidden"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${collection.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-500" />
                <div className="absolute inset-0 bg-[#5bd37c]/0 group-hover:bg-[#5bd37c]/20 transition-all duration-500" />

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2 group-hover:translate-x-2 transition-transform duration-300">
                    {collection.name}
                  </h3>
                  <p className="text-sm text-white/70 mb-3 max-w-[200px]">
                    {collection.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-[#5bd37c] transition-colors">
                    Explore <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>

                {/* Product count badge */}
                {collection.productCount > 0 && (
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-white font-medium">
                    {collection.productCount} items
                  </div>
                )}
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
