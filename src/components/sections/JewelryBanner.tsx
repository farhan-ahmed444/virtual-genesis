'use client'
import { ProductCard } from '@/components/product/ProductCard'
import { AnimatedSection } from '@/components/animation/AnimatedSection'
import { products } from '@/lib/data'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'

const jewelryProducts = products.filter(
  (p) => p.id === '9' || p.id === '10' || p.id === '11'
)

export function JewelryBanner() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#5bd37c]/5 via-white to-[#0fa8ed]/5" />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#5bd37c]/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#f8c602]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0fa8ed]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#5bd37c]/10 text-[#5bd37c] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            <Sparkles size={14} />
            New Arrivals
          </div>
          <h2 className="text-5xl md:text-7xl font-heading font-bold leading-tight">
            Faith in
            <br />
            <span className="text-[#5bd37c]">Motion</span>
          </h2>
          <p className="text-muted text-lg mt-4 max-w-xl mx-auto">
            Wear your testimony. Each piece is designed to spark conversation and
            remind you of the journey.
          </p>
        </AnimatedSection>

        <AnimatedSection stagger={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {jewelryProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection className="text-center mt-14">
          <Link href="/shop">
            <Button variant="primary" size="lg" className="group text-base">
              Shop All Jewelry
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
