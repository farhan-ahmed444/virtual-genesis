'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useCartStore } from '@/stores/cart'
import { Button } from '@/components/ui/button'
import { cn, formatPrice } from '@/lib/utils'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import gsap from 'gsap'

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal } = useCartStore()
  const overlayRef = useRef<HTMLDivElement>(null!)
  const drawerRef = useRef<HTMLDivElement>(null!)

  useEffect(() => {
    if (!overlayRef.current || !drawerRef.current) return

    if (isOpen) {
      gsap.to(overlayRef.current, { opacity: 1, duration: 0.3, display: 'block' })
      gsap.to(drawerRef.current, { x: 0, duration: 0.5, ease: 'power4.out' })
      document.body.style.overflow = 'hidden'
    } else {
      gsap.to(overlayRef.current, { opacity: 0, duration: 0.3, display: 'none' })
      gsap.to(drawerRef.current, { x: '100%', duration: 0.5, ease: 'power4.in' })
      document.body.style.overflow = ''
    }

    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black/50 z-[60] hidden"
        onClick={closeCart}
      />
      <div
        ref={drawerRef}
        className={cn(
          'fixed top-0 right-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl',
          'flex flex-col transform translate-x-full'
        )}
      >
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <ShoppingBag size={20} />
            <span className="font-semibold text-lg">Cart</span>
            <span className="text-sm text-muted">({items.length})</span>
          </div>
          <button onClick={closeCart} className="p-2 hover:text-[#2DBEFF] transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} className="text-muted mb-4" />
              <p className="text-lg font-semibold mb-1">Your cart is empty</p>
              <p className="text-sm text-muted mb-6">Add some products to get started.</p>
              <Button variant="primary" onClick={closeCart}>
                Shop Now
              </Button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.productId} className="flex gap-4 p-4 bg-neutral rounded-xl">
                <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-sm truncate">{item.name}</h4>
                  <p className="text-sm text-muted mt-1">{formatPrice(item.price)}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                      className="w-7 h-7 rounded-full border border-border flex items-center justify-center hover:bg-[#2DBEFF] hover:text-white hover:border-[#2DBEFF] transition-colors"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                      className="w-7 h-7 rounded-full border border-border flex items-center justify-center hover:bg-[#2DBEFF] hover:text-white hover:border-[#2DBEFF] transition-colors"
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeItem(item.productId)}
                  className="p-1 hover:text-red-500 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-border">
            <div className="flex items-center justify-between mb-4">
              <span className="font-semibold">Subtotal</span>
              <span className="font-semibold text-lg">{formatPrice(subtotal)}</span>
            </div>
            <p className="text-xs text-muted mb-4">Shipping & taxes calculated at checkout</p>
            <Link href="/checkout" onClick={closeCart}>
              <Button variant="primary" className="w-full">
                Checkout
              </Button>
            </Link>
          </div>
        )}
      </div>
    </>
  )
}
