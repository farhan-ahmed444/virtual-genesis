'use client'
import Link from 'next/link'
import { Globe, Music2, MessageCircle, Mail } from 'lucide-react'

const footerLinks = {
  shop: {
    title: 'Shop',
    links: [
      { label: 'All Products', href: '/shop' },
      { label: 'Apparel', href: '/shop?category=apparel' },
      { label: 'Artwork', href: '/artwork' },
      { label: 'Accessories', href: '/shop?category=accessories' },
    ],
  },
  explore: {
    title: 'Explore',
    links: [
      { label: 'Podcast', href: '/podcast' },
      { label: 'Coaching', href: '/coaching' },
      { label: 'Courses', href: '/courses' },
      { label: 'About', href: '/about' },
    ],
  },
  support: {
    title: 'Support',
    links: [
      { label: 'FAQ', href: '/faq' },
      { label: 'Contact', href: '/contact' },
      { label: 'Shipping', href: '/faq' },
      { label: 'Returns', href: '/faq' },
    ],
  },
}

export function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Top */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="text-2xl font-heading font-semibold tracking-tight">
              VIRTUAL<span className="text-[#5bd37c]">.</span>GENESIS
            </Link>
            <p className="mt-4 text-white/60 text-sm max-w-xs leading-relaxed">
              Faith-inspired apparel, artwork, and resources designed to inspire your journey.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[Globe, Music2, MessageCircle, Mail].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#5bd37c] transition-colors"
                >
                  <Icon size={16} />
                </Link>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.values(footerLinks).map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            © 2026 Virtual Genesis. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-sm text-white/40 hover:text-white/60 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-white/40 hover:text-white/60 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
