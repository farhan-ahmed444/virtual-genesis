'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useCartStore } from '@/stores/cart'
import { useWishlistStore } from '@/stores/wishlist'
import { useUIStore } from '@/stores/ui'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ShoppingBag, Heart, Search, Menu, X } from 'lucide-react'

const navLinks: { label: string; href: string; hasDropdown?: boolean }[] = [
  { label: 'Shop', href: '/shop', hasDropdown: true },
  { label: 'Artwork', href: '/artwork' },
  { label: 'Podcast', href: '/podcast' },
  { label: 'Coaching', href: '/coaching' },
  { label: 'Courses', href: '/courses' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [hoveredMega, setHoveredMega] = useState(false)
  const cartItemCount = useCartStore((s) => s.items.reduce((a, i) => a + i.quantity, 0))
  const toggleCart = useCartStore((s) => s.toggleCart)
  const wishlistCount = useWishlistStore((s) => s.items.length)
  const { openSearch, toggleMenu, isMenuOpen } = useUIStore()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-white/80 backdrop-blur-xl border-b border-border'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Left: Hamburger (mobile) */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 -ml-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Center: Logo */}
          <Link
            href="/"
            className="text-2xl font-heading font-semibold tracking-tight"
          >
            VIRTUAL<span className="text-[#2DBEFF]">.</span>GENESIS
          </Link>

          {/* Center: Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setHoveredMega(true)}
                onMouseLeave={() => link.hasDropdown && setHoveredMega(false)}
              >
                <Link
                  href={link.href}
                  className="text-sm font-medium text-muted hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={openSearch}
              className="p-2 hover:text-[#2DBEFF] transition-colors"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <Link
              href="/wishlist"
              className="hidden sm:flex p-2 hover:text-[#2DBEFF] transition-colors relative"
              aria-label="Wishlist"
            >
              <Heart size={20} />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#2DBEFF] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>
            <button
              onClick={toggleCart}
              className="p-2 hover:text-[#2DBEFF] transition-colors relative"
              aria-label="Cart"
            >
              <ShoppingBag size={20} />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#2DBEFF] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mega Menu Dropdown */}
        {hoveredMega && (
          <div
            className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-border shadow-2xl"
            onMouseEnter={() => setHoveredMega(true)}
            onMouseLeave={() => setHoveredMega(false)}
          >
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-4 gap-8">
              {[
                { title: 'New Arrivals', items: ['Premium Tees', 'Hoodies', 'Accessories', 'Limited Edition'] },
                { title: 'Collections', items: ['Genesis Collection', 'Light Collection', 'Sacred Series', 'Artist Collab'] },
                { title: 'Categories', items: ['Apparel', 'Artwork', 'Accessories', 'Sale'] },
                { title: 'Featured', items: ['Best Sellers', 'Staff Picks', 'Gift Guide', 'New In'] },
              ].map((col) => (
                <div key={col.title}>
                  <h4 className="text-xs font-semibold text-muted uppercase tracking-widest mb-4">{col.title}</h4>
                  <ul className="space-y-3">
                    {col.items.map((item) => (
                      <li key={item}>
                        <Link
                          href={`/shop?category=${item.toLowerCase().replace(/\s+/g, '-')}`}
                          className="text-sm hover:text-[#2DBEFF] transition-colors"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="col-span-1 bg-gradient-soft rounded-2xl p-6 flex flex-col justify-center">
                <p className="text-sm font-semibold mb-1">New Drop</p>
                <p className="text-2xl font-heading font-bold">Genesis</p>
                <p className="text-2xl font-heading font-bold text-[#2DBEFF]">Collection</p>
                <Link
                  href="/collections/genesis"
                  className="mt-4 text-sm font-medium text-[#2DBEFF] hover:underline"
                >
                  Shop Now →
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={toggleMenu} />
          <div className="absolute top-20 left-0 right-0 bg-white min-h-screen p-6">
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={toggleMenu}
                  className="text-2xl font-heading font-semibold hover:text-[#2DBEFF] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <hr className="border-border my-4" />
              <Link
                href="/wishlist"
                onClick={toggleMenu}
                className="text-lg font-medium hover:text-[#2DBEFF] transition-colors flex items-center gap-3"
              >
                <Heart size={20} /> Wishlist
              </Link>
              <Link
                href="/about"
                onClick={toggleMenu}
                className="text-lg font-medium hover:text-[#2DBEFF] transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                onClick={toggleMenu}
                className="text-lg font-medium hover:text-[#2DBEFF] transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/faq"
                onClick={toggleMenu}
                className="text-lg font-medium hover:text-[#2DBEFF] transition-colors"
              >
                FAQ
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
