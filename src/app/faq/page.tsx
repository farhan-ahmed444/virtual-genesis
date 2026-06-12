'use client'
import { useState, useRef, useEffect } from 'react'
import { SplitText } from '@/components/animation/SplitText'
import { AnimatedSection } from '@/components/animation/AnimatedSection'
import { faqs } from '@/lib/data'
import { Plus, Minus, Search } from 'lucide-react'
import gsap from 'gsap'

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null!)

  const toggle = () => {
    if (!contentRef.current) return

    if (open) {
      gsap.to(contentRef.current, {
        height: 0,
        duration: 0.3,
        ease: 'power3.out',
      })
    } else {
      gsap.fromTo(
        contentRef.current,
        { height: 0 },
        { height: contentRef.current.scrollHeight, duration: 0.4, ease: 'power3.out' }
      )
    }
    setOpen(!open)
  }

  return (
    <AnimatedSection delay={index * 0.05}>
      <div className="border-b border-border">
        <button
          onClick={toggle}
          className="w-full flex items-center justify-between py-6 text-left group"
        >
          <span className="font-medium text-base pr-4 group-hover:text-[#5bd37c] transition-colors">
            {question}
          </span>
          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-neutral flex items-center justify-center group-hover:bg-[#5bd37c] group-hover:text-white transition-all">
            {open ? <Minus size={14} /> : <Plus size={14} />}
          </span>
        </button>
        <div
          ref={contentRef}
          className="overflow-hidden"
          style={{ height: 0 }}
        >
          <div className="pb-6 text-muted text-sm leading-relaxed">{answer}</div>
        </div>
      </div>
    </AnimatedSection>
  )
}

export default function FAQPage() {
  const [search, setSearch] = useState('')

  const filtered = faqs.filter(
    (f) =>
      f.question.toLowerCase().includes(search.toLowerCase()) ||
      f.answer.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center pt-24">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <AnimatedSection>
              <p className="text-sm font-semibold text-[#5bd37c] uppercase tracking-widest mb-4">FAQ</p>
            </AnimatedSection>
            <h1 className="text-6xl md:text-8xl font-heading font-bold leading-none mb-8">
              <SplitText as="span" className="block">
                QUESTIONS?
              </SplitText>
              <SplitText as="span" className="block text-[#5bd37c]" delay={0.3}>
                ANSWERS.
              </SplitText>
            </h1>
          </div>

          {/* Search */}
          <AnimatedSection delay={0.6}>
            <div className="relative max-w-md">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search FAQs..."
                className="w-full h-12 pl-12 pr-4 rounded-full border border-border bg-white focus:border-[#5bd37c] focus:ring-1 focus:ring-[#5bd37c] outline-none transition-colors"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          {filtered.length === 0 ? (
            <p className="text-center text-muted py-12">No results found for your search.</p>
          ) : (
            filtered.map((faq, i) => (
              <FAQItem key={faq.id} question={faq.question} answer={faq.answer} index={i} />
            ))
          )}
        </div>
      </section>
    </>
  )
}
