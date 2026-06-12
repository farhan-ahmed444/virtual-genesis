'use client'
import { useRef } from 'react'
import { ProductCard } from '@/components/product/ProductCard'
import { AnimatedSection } from '@/components/animation/AnimatedSection'
import { products } from '@/lib/data'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const tabs = ['Best Sellers', 'New Arrivals', 'Featured'] as const

export function FeaturedProducts() {
  const scrollRef = useRef<HTMLDivElement>(null!)

  const filteredProducts = products.filter((p) => p.isBestSeller)

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-sm font-semibold text-[#2DBEFF] uppercase tracking-widest mb-2">Products</p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold">Featured Collection</h2>
          </div>
          <Button variant="ghost" size="sm" className="group">
            View All <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </AnimatedSection>

        {/* Product Grid */}
        <AnimatedSection stagger={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.slice(0, 8).map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
