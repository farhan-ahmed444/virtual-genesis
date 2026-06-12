'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { useUIStore } from '@/stores/ui'
import { useCartStore } from '@/stores/cart'
import { products } from '@/lib/data'
import { Button } from '@/components/ui/button'
import { formatPrice } from '@/lib/utils'
import { X, ShoppingBag, Heart, Star } from 'lucide-react'
import gsap from 'gsap'

export function ProductQuickView() {
  const { isQuickViewOpen, quickViewProduct, closeQuickView } = useUIStore()
  const addItem = useCartStore((s) => s.addItem)
  const overlayRef = useRef<HTMLDivElement>(null!)
  const modalRef = useRef<HTMLDivElement>(null!)

  const product = products.find((p) => p.id === quickViewProduct)

  useEffect(() => {
    if (isQuickViewOpen) {
      gsap.to(overlayRef.current, { opacity: 1, duration: 0.3, display: 'flex' })
      gsap.fromTo(modalRef.current, { opacity: 0, scale: 0.95, y: 20 }, { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: 'power3.out' })
      document.body.style.overflow = 'hidden'
    } else {
      gsap.to(overlayRef.current, { opacity: 0, duration: 0.3, display: 'none' })
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isQuickViewOpen])

  if (!product) return null

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 bg-black/50 z-[90] hidden items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && closeQuickView()}
    >
      <div
        ref={modalRef}
        className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto grid md:grid-cols-2"
      >
        {/* Image */}
        <div className="relative aspect-square md:aspect-auto md:h-full min-h-[300px] bg-neutral">
          <Image src={product.images[0]} alt={product.name} fill className="object-cover rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none" />
        </div>

        {/* Content */}
        <div className="p-8 flex flex-col">
          <button onClick={closeQuickView} className="self-end p-2 hover:text-[#2DBEFF] transition-colors">
            <X size={20} />
          </button>

          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              {product.isNew && <span className="text-xs font-semibold text-[#2DBEFF] uppercase tracking-widest">New</span>}
              {product.isBestSeller && <span className="text-xs font-semibold text-accent uppercase tracking-widest">Best Seller</span>}
            </div>
            <h2 className="text-2xl font-heading font-bold">{product.name}</h2>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex items-center gap-1">
                <Star size={14} className="fill-[#FFD54A] text-[#FFD54A]" />
                <span className="text-sm font-medium">{product.rating}</span>
              </div>
              <span className="text-sm text-muted">({product.reviewCount} reviews)</span>
            </div>
            <p className="text-2xl font-bold mt-4">{formatPrice(product.price)}</p>
            {product.compareAtPrice && (
              <p className="text-sm text-muted line-through">{formatPrice(product.compareAtPrice)}</p>
            )}
            <p className="text-sm text-muted mt-4 leading-relaxed">{product.description}</p>

            {product.colors && (
              <div className="mt-6">
                <h4 className="text-xs font-semibold text-muted uppercase tracking-widest mb-2">Colors</h4>
                <div className="flex gap-2">
                  {product.colors.map((c) => (
                    <span key={c.hex} className="w-8 h-8 rounded-full border-2 border-border hover:border-[#2DBEFF] cursor-pointer transition-colors" style={{ backgroundColor: c.hex }} />
                  ))}
                </div>
              </div>
            )}

            {product.sizes && (
              <div className="mt-4">
                <h4 className="text-xs font-semibold text-muted uppercase tracking-widest mb-2">Sizes</h4>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((s) => (
                    <span key={s} className="px-4 py-2 text-sm border border-border rounded-full hover:border-foreground cursor-pointer transition-colors">{s}</span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="mt-6 space-y-2">
            <Button
              variant="primary"
              className="w-full"
              onClick={() => {
                addItem({ productId: product.id, name: product.name, price: product.price, quantity: 1, image: product.images[0] })
                closeQuickView()
              }}
            >
              <ShoppingBag size={16} /> Add to Cart
            </Button>
            <Button variant="secondary" className="w-full">
              <Heart size={16} /> Add to Wishlist
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
