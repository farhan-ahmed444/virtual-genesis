'use client'
import { use } from 'react'
import { SplitText } from '@/components/animation/SplitText'
import { AnimatedSection } from '@/components/animation/AnimatedSection'
import { Button } from '@/components/ui/button'
import { products } from '@/lib/data'
import { formatPrice } from '@/lib/utils'
import { useCartStore } from '@/stores/cart'
import { ShoppingBag, Heart, Star, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const product = products.find((p) => p.slug === slug)
  const addItem = useCartStore((s) => s.addItem)

  if (!product) {
    return (
      <section className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold mb-4">Product Not Found</h1>
          <Link href="/shop" className="text-[#5bd37c] hover:underline">Back to Shop</Link>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <Link href="/shop" className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors mb-8">
            <ArrowLeft size={16} /> Back to Shop
          </Link>
          <div className="grid md:grid-cols-2 gap-12">
            <AnimatedSection>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-neutral">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${product.images[0]})` }} />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="sticky top-28">
                {product.isNew && <span className="text-xs font-semibold text-[#5bd37c] uppercase tracking-widest">New Arrival</span>}
                <h1 className="text-4xl md:text-5xl font-heading font-bold mt-2 mb-4">{product.name}</h1>
                <div className="flex items-center gap-2 mb-4">
                  <Star size={16} className="fill-[#f8c602] text-[#f8c602]" />
                  <span className="text-sm font-medium">{product.rating}</span>
                  <span className="text-sm text-muted">({product.reviewCount} reviews)</span>
                </div>
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-3xl font-bold">{formatPrice(product.price)}</span>
                  {product.compareAtPrice && (
                    <span className="text-lg text-muted line-through">{formatPrice(product.compareAtPrice)}</span>
                  )}
                </div>
                <p className="text-muted leading-relaxed mb-8">{product.description}</p>

                {product.colors && (
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold mb-3">Color</h3>
                    <div className="flex gap-3">
                      {product.colors.map((c) => (
                        <span key={c.hex} className="w-10 h-10 rounded-full border-2 border-border hover:border-[#5bd37c] cursor-pointer transition-all" style={{ backgroundColor: c.hex }} />
                      ))}
                    </div>
                  </div>
                )}

                {product.sizes && (
                  <div className="mb-8">
                    <h3 className="text-sm font-semibold mb-3">Size</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map((s) => (
                        <span key={s} className="px-5 py-2.5 text-sm border border-border rounded-full hover:border-foreground cursor-pointer transition-colors">{s}</span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex gap-3">
                  <Button
                    variant="primary"
                    size="lg"
                    className="flex-1 group"
                    onClick={() => addItem({ productId: product.id, name: product.name, price: product.price, quantity: 1, image: product.images[0] })}
                  >
                    <ShoppingBag size={18} className="group-hover:scale-110 transition-transform" />
                    Add to Cart
                  </Button>
                  <Button variant="secondary" size="lg" className="px-4">
                    <Heart size={20} />
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
