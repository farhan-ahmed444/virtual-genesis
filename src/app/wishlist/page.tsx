'use client'
import { SplitText } from '@/components/animation/SplitText'
import { AnimatedSection } from '@/components/animation/AnimatedSection'
import { ProductCard } from '@/components/product/ProductCard'
import { useWishlistStore } from '@/stores/wishlist'
import { products } from '@/lib/data'
import { Heart } from 'lucide-react'

export default function WishlistPage() {
  const wishlistedIds = useWishlistStore((s) => s.items)
  const wishlistedProducts = products.filter((p) => wishlistedIds.includes(p.id))

  return (
    <>
      <section className="relative min-h-[30vh] flex items-center pt-24">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <AnimatedSection>
            <p className="text-sm font-semibold text-[#5bd37c] uppercase tracking-widest mb-2">Wishlist</p>
          </AnimatedSection>
          <h1 className="text-6xl md:text-8xl font-heading font-bold leading-none">
            <SplitText as="span" className="block">
              SAVED
            </SplitText>
            <SplitText as="span" className="block text-[#5bd37c]" delay={0.3}>
              ITEMS
            </SplitText>
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          {wishlistedProducts.length === 0 ? (
            <div className="text-center py-20">
              <Heart size={48} className="mx-auto text-muted mb-4" />
              <h2 className="text-2xl font-heading font-bold mb-2">Your wishlist is empty</h2>
              <p className="text-muted">Save items you love by tapping the heart icon.</p>
            </div>
          ) : (
            <AnimatedSection stagger={0.05}>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {wishlistedProducts.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i} />
                ))}
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>
    </>
  )
}
