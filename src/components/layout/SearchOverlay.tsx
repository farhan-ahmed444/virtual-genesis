'use client'
import { useEffect, useRef, useState } from 'react'
import { useUIStore } from '@/stores/ui'
import { Search, X } from 'lucide-react'
import gsap from 'gsap'
import { products } from '@/lib/data'
import Link from 'next/link'

export function SearchOverlay() {
  const { isSearchOpen, closeSearch } = useUIStore()
  const [query, setQuery] = useState('')
  const overlayRef = useRef<HTMLDivElement>(null!)
  const inputRef = useRef<HTMLInputElement>(null!)

  useEffect(() => {
    if (isSearchOpen) {
      gsap.to(overlayRef.current, { opacity: 1, duration: 0.3, display: 'flex' })
      setTimeout(() => inputRef.current?.focus(), 300)
      document.body.style.overflow = 'hidden'
    } else {
      gsap.to(overlayRef.current, { opacity: 0, duration: 0.3, display: 'none' })
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isSearchOpen])

  const results = query
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase())
      )
    : []

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 bg-white/95 backdrop-blur-xl z-[80] hidden flex-col items-center pt-32"
      onClick={(e) => e.target === e.currentTarget && closeSearch()}
    >
      <button
        onClick={closeSearch}
        className="absolute top-8 right-8 p-3 hover:text-[#5bd37c] transition-colors"
      >
        <X size={28} />
      </button>

      <div className="w-full max-w-2xl px-6">
        <div className="relative">
          <Search size={24} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products, collections, articles..."
            className="w-full h-16 pl-14 pr-6 text-2xl font-heading bg-transparent border-b-2 border-border focus:border-[#5bd37c] outline-none transition-colors"
          />
        </div>

        {query && (
          <div className="mt-8 space-y-2">
            {results.length === 0 ? (
              <p className="text-muted text-center py-8">No results found for &ldquo;{query}&rdquo;</p>
            ) : (
              results.map((product) => (
                <Link
                  key={product.id}
                  href={`/shop/${product.slug}`}
                  onClick={closeSearch}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-neutral transition-colors group"
                >
                  <div className="w-14 h-14 rounded-lg bg-neutral overflow-hidden flex-shrink-0">
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${product.images[0]})` }}
                    />
                  </div>
                  <div>
                    <p className="font-medium group-hover:text-[#5bd37c] transition-colors">{product.name}</p>
                    <p className="text-sm text-muted">${product.price}</p>
                  </div>
                </Link>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  )
}
