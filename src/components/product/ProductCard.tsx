'use client'
import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useCartStore } from '@/stores/cart'
import { useWishlistStore } from '@/stores/wishlist'
import { useUIStore } from '@/stores/ui'
import { Badge } from '@/components/ui/badge'
import { formatPrice } from '@/lib/utils'
import type { Product } from '@/types'
import { Heart, ShoppingBag, Eye, Star } from 'lucide-react'
import gsap from 'gsap'

interface ProductCardProps {
  product: Product
  index?: number
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [imgIndex, setImgIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null!)
  const addItem = useCartStore((s) => s.addItem)
  const { toggleItem, isWishlisted } = useWishlistStore()
  const { openQuickView } = useUIStore()
  const wishlisted = isWishlisted(product.id)

  const handleMouseEnter = () => {
    setIsHovered(true)
    if (product.images.length > 1) {
      setImgIndex(1)
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setImgIndex(0)
  }

  const handleTilt = (e: React.MouseEvent) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    gsap.to(cardRef.current, {
      rotateX: y * -8,
      rotateY: x * 8,
      duration: 0.5,
      ease: 'power2.out',
    })
  }

  const handleTiltReset = () => {
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: 'power2.out',
    })
  }

  return (
    <div
      ref={cardRef}
      className="group relative"
      style={{ perspective: '1000px' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleTilt}
      onMouseOut={handleTiltReset}
    >
      {/* Image Container */}
      <Link href={`/shop/${product.slug}`} className="block relative aspect-[3/4] rounded-2xl overflow-hidden bg-neutral">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition-all duration-700 ease-out"
          style={{ opacity: imgIndex === 0 ? 1 : 0 }}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          priority={index < 4}
        />
        {product.images.length > 1 && (
          <Image
            src={product.images[1]}
            alt={`${product.name} alternate view`}
            fill
            className="object-cover transition-all duration-700 ease-out"
            style={{ opacity: imgIndex === 1 ? 1 : 0 }}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        )}

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && <Badge variant="new">New</Badge>}
          {product.compareAtPrice && (
            <Badge variant="sale">{Math.round((1 - product.price / product.compareAtPrice) * 100)}% OFF</Badge>
          )}
          {product.isBestSeller && <Badge>Best Seller</Badge>}
        </div>

        {/* Quick Actions */}
        <div className="absolute right-3 top-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300">
          <button
            onClick={(e) => { e.preventDefault(); toggleItem(product.id) }}
            className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-[#2DBEFF] hover:text-white transition-all"
            aria-label="Toggle wishlist"
          >
            <Heart size={16} className={wishlisted ? 'fill-red-500 text-red-500' : ''} />
          </button>
          <button
            onClick={(e) => { e.preventDefault(); openQuickView(product.id) }}
            className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-[#2DBEFF] hover:text-white transition-all"
            aria-label="Quick view"
          >
            <Eye size={16} />
          </button>
        </div>
      </Link>

      {/* Info */}
      <div className="mt-4 px-1">
        <Link href={`/shop/${product.slug}`}>
          <h3 className="font-medium text-sm hover:text-[#2DBEFF] transition-colors truncate">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-muted mt-1">
          {formatPrice(product.price)}
          {product.compareAtPrice && (
            <span className="line-through text-muted ml-2">{formatPrice(product.compareAtPrice)}</span>
          )}
        </p>
        <div className="flex items-center gap-1 mt-1">
          <Star size={12} className="fill-[#FFD54A] text-[#FFD54A]" />
          <span className="text-xs text-muted">{product.rating} ({product.reviewCount})</span>
        </div>

        {/* Color options */}
        {product.colors && (
          <div className="flex items-center gap-1.5 mt-2">
            {product.colors.map((c) => (
              <span
                key={c.hex}
                className="w-3.5 h-3.5 rounded-full border border-border"
                style={{ backgroundColor: c.hex }}
              />
            ))}
          </div>
        )}

        {/* Add to cart button */}
        <button
          onClick={() =>
            addItem({
              productId: product.id,
              name: product.name,
              price: product.price,
              quantity: 1,
              image: product.images[0],
            })
          }
          className="mt-3 w-full h-10 rounded-full bg-foreground text-white text-sm font-medium hover:bg-[#2DBEFF] transition-all duration-300 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
        >
          <ShoppingBag size={14} />
          Add to Cart
        </button>
      </div>
    </div>
  )
}
