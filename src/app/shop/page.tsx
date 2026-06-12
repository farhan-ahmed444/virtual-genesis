'use client'
import { useState } from 'react'
import { SplitText } from '@/components/animation/SplitText'
import { AnimatedSection } from '@/components/animation/AnimatedSection'
import { ProductCard } from '@/components/product/ProductCard'
import { products } from '@/lib/data'
import { Search, SlidersHorizontal } from 'lucide-react'

const categories = ['All', 'Apparel', 'Artwork', 'Accessories']
const sorts = ['Newest', 'Price: Low to High', 'Price: High to Low', 'Best Selling']

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeSort, setActiveSort] = useState('Newest')

  const filtered = activeCategory === 'All'
    ? products
    : products.filter((p) => p.category.toLowerCase() === activeCategory.toLowerCase())

  return (
    <>
      <section className="relative min-h-[40vh] flex items-center pt-24">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <AnimatedSection>
            <p className="text-sm font-semibold text-[#5bd37c] uppercase tracking-widest mb-2">Shop</p>
          </AnimatedSection>
          <h1 className="text-6xl md:text-8xl font-heading font-bold leading-none mb-6">
            <SplitText as="span" className="block">
              THE
            </SplitText>
            <SplitText as="span" className="block text-[#5bd37c]" delay={0.3}>
              COLLECTION
            </SplitText>
          </h1>
        </div>
      </section>

      <section className="py-12 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat
                      ? 'bg-foreground text-white'
                      : 'bg-neutral text-muted hover:bg-foreground/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
                <input type="text" placeholder="Search..." className="pl-9 pr-4 h-10 rounded-full bg-neutral text-sm outline-none focus:ring-1 focus:ring-[#5bd37c] w-40" />
              </div>
              <select
                value={activeSort}
                onChange={(e) => setActiveSort(e.target.value)}
                className="h-10 px-4 rounded-full bg-neutral text-sm outline-none focus:ring-1 focus:ring-[#5bd37c]"
              >
                {sorts.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection stagger={0.05}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {filtered.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
