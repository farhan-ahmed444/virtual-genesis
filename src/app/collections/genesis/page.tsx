'use client'
import { SplitText } from '@/components/animation/SplitText'
import { AnimatedSection } from '@/components/animation/AnimatedSection'
import { ProductCard } from '@/components/product/ProductCard'
import { products } from '@/lib/data'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function GenesisCollectionPage() {
  const collection = products.filter((p) => p.isNew || p.isFeatured)

  return (
    <>
      <section className="relative min-h-[50vh] flex items-center pt-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#5bd37c]/20 via-[#0fa8ed]/40 to-white" />
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#5bd37c]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-[#f8c602]/10 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <AnimatedSection>
            <p className="text-sm font-semibold text-[#5bd37c] uppercase tracking-widest mb-2">Collection</p>
          </AnimatedSection>
          <h1 className="text-7xl md:text-9xl font-heading font-bold leading-none mb-6">
            <SplitText as="span" className="block">
              GENESIS
            </SplitText>
          </h1>
          <AnimatedSection delay={0.6}>
            <p className="text-lg text-muted max-w-md mb-8">Our flagship collection. Where faith meets design.</p>
            <Link href="/shop" className="inline-flex items-center gap-2 text-sm font-medium text-[#5bd37c] hover:underline">
              View All Products <ArrowRight size={14} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection stagger={0.05}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {collection.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
