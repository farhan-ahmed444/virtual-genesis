'use client'
import { SplitText } from '@/components/animation/SplitText'
import { AnimatedSection } from '@/components/animation/AnimatedSection'
import { Button } from '@/components/ui/button'
import { useCartStore } from '@/stores/cart'
import { formatPrice } from '@/lib/utils'
import { CreditCard, Lock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function CheckoutPage() {
  const { items, subtotal } = useCartStore()

  return (
    <>
      <section className="pt-32 pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <Link href="/cart" className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors mb-8">
            <ArrowLeft size={16} /> Back
          </Link>

          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-12">
            <SplitText as="span">CHECKOUT</SplitText>
          </h1>

          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-3">
              <AnimatedSection>
                <h2 className="text-xl font-heading font-bold mb-6">Contact</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input type="email" className="w-full h-12 px-4 rounded-xl border border-border bg-neutral/50 focus:border-[#5bd37c] outline-none transition-colors" placeholder="your@email.com" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name</label>
                      <input type="text" className="w-full h-12 px-4 rounded-xl border border-border bg-neutral/50 focus:border-[#5bd37c] outline-none transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name</label>
                      <input type="text" className="w-full h-12 px-4 rounded-xl border border-border bg-neutral/50 focus:border-[#5bd37c] outline-none transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Address</label>
                    <input type="text" className="w-full h-12 px-4 rounded-xl border border-border bg-neutral/50 focus:border-[#5bd37c] outline-none transition-colors" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">City</label>
                      <input type="text" className="w-full h-12 px-4 rounded-xl border border-border bg-neutral/50 focus:border-[#5bd37c] outline-none transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">ZIP Code</label>
                      <input type="text" className="w-full h-12 px-4 rounded-xl border border-border bg-neutral/50 focus:border-[#5bd37c] outline-none transition-colors" />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            <div className="md:col-span-2">
              <AnimatedSection delay={0.2}>
                <div className="bg-neutral rounded-2xl p-6 sticky top-28">
                  <h2 className="text-xl font-heading font-bold mb-4">Order Summary</h2>
                  <div className="space-y-3 mb-6">
                    {items.map((item) => (
                      <div key={item.productId} className="flex items-center justify-between text-sm">
                        <span className="text-muted">{item.name} × {item.quantity}</span>
                        <span>{formatPrice(item.price * item.quantity)}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-border pt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted">Subtotal</span>
                      <span>{formatPrice(subtotal)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted">Shipping</span>
                      <span>Calculated at next step</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg pt-2 border-t border-border">
                      <span>Total</span>
                      <span>{formatPrice(subtotal)}</span>
                    </div>
                  </div>
                  <Button variant="primary" size="lg" className="w-full mt-6 group">
                    <Lock size={16} className="group-hover:scale-110 transition-transform" />
                    Pay {formatPrice(subtotal)}
                  </Button>
                  <div className="flex items-center justify-center gap-2 mt-4 text-xs text-muted">
                    <CreditCard size={14} />
                    <span>Secure checkout powered by Stripe</span>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
