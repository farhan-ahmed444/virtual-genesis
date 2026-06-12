'use client'
import { SplitText } from '@/components/animation/SplitText'
import { AnimatedSection } from '@/components/animation/AnimatedSection'
import { ProductCard } from '@/components/product/ProductCard'
import { products } from '@/lib/data'

export default function ArtworkPage() {
  const artwork = products.filter((p) => p.category === 'artwork')

  return (
    <>
      <section className="relative min-h-[40vh] flex items-center pt-24">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <AnimatedSection>
            <p className="text-sm font-semibold text-[#5bd37c] uppercase tracking-widest mb-2">Artwork</p>
          </AnimatedSection>
          <h1 className="text-6xl md:text-8xl font-heading font-bold leading-none mb-6">
            <SplitText as="span" className="block">
              SACRED
            </SplitText>
            <SplitText as="span" className="block text-[#5bd37c]" delay={0.3}>
              ART
            </SplitText>
          </h1>
          <AnimatedSection delay={0.6}>
            <p className="text-lg text-muted max-w-md">Gallery-grade prints designed to inspire contemplation and conversation.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection stagger={0.05}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {artwork.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
