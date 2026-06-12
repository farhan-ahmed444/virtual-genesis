'use client'
import { useState } from 'react'
import { SplitText } from '@/components/animation/SplitText'
import { AnimatedSection } from '@/components/animation/AnimatedSection'
import { MagneticButton } from '@/components/animation/MagneticButton'
import { Button } from '@/components/ui/button'
import { Send, Mail, MapPin, MessageCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const faqPreview = [
  { q: 'What is your return policy?', slug: '/faq' },
  { q: 'How does coaching work?', slug: '/faq' },
  { q: 'Do you ship internationally?', slug: '/faq' },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    alert('Thanks for reaching out! We\'ll get back to you soon.')
  }

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center pt-24">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <AnimatedSection>
              <p className="text-sm font-semibold text-[#2DBEFF] uppercase tracking-widest mb-4">Contact</p>
            </AnimatedSection>
            <h1 className="text-6xl md:text-8xl font-heading font-bold leading-none mb-6">
              <SplitText as="span" className="block">
                GET IN
              </SplitText>
              <SplitText as="span" className="block text-[#2DBEFF]" delay={0.3}>
                TOUCH
              </SplitText>
            </h1>
            <AnimatedSection delay={0.6}>
              <p className="text-lg text-muted max-w-md">
                Have a question, idea, or just want to say hello? We&apos;d love to hear from you.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full h-12 px-4 rounded-xl border border-border bg-neutral/50 focus:border-[#2DBEFF] focus:ring-1 focus:ring-[#2DBEFF] outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full h-12 px-4 rounded-xl border border-border bg-neutral/50 focus:border-[#2DBEFF] focus:ring-1 focus:ring-[#2DBEFF] outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full h-12 px-4 rounded-xl border border-border bg-neutral/50 focus:border-[#2DBEFF] focus:ring-1 focus:ring-[#2DBEFF] outline-none transition-colors"
                      placeholder="How can we help?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-neutral/50 focus:border-[#2DBEFF] focus:ring-1 focus:ring-[#2DBEFF] outline-none transition-colors resize-none"
                      placeholder="Tell us more..."
                    />
                  </div>
                  <MagneticButton>
                    <Button type="submit" variant="primary" size="lg" className="group">
                      Send Message <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </MagneticButton>
                </form>
              </AnimatedSection>
            </div>

            {/* Info & FAQ Preview */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <div className="space-y-8">
                  {/* Contact Info */}
                  <div>
                    <h3 className="font-heading font-bold text-xl mb-4">Contact Info</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Mail size={18} className="text-[#2DBEFF] mt-0.5" />
                        <div>
                          <p className="font-medium text-sm">Email</p>
                          <p className="text-sm text-muted">hello@virtualgenesis.com</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin size={18} className="text-[#2DBEFF] mt-0.5" />
                        <div>
                          <p className="font-medium text-sm">Location</p>
                          <p className="text-sm text-muted">Nashville, TN</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MessageCircle size={18} className="text-[#2DBEFF] mt-0.5" />
                        <div>
                          <p className="font-medium text-sm">Social</p>
                          <p className="text-sm text-muted">@virtualgenesis</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* FAQ Preview */}
                  <div>
                    <h3 className="font-heading font-bold text-xl mb-4">Quick Answers</h3>
                    <div className="space-y-3">
                      {faqPreview.map((item) => (
                        <Link
                          key={item.q}
                          href={item.slug}
                          className="block p-4 rounded-xl bg-neutral hover:bg-[#2DBEFF]/5 transition-colors group"
                        >
                          <p className="text-sm font-medium group-hover:text-[#2DBEFF] transition-colors">{item.q}</p>
                        </Link>
                      ))}
                    </div>
                    <Link
                      href="/faq"
                      className="inline-flex items-center gap-1 text-sm font-medium text-[#2DBEFF] mt-4 hover:underline"
                    >
                      View All FAQs <ArrowRight size={14} />
                    </Link>
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
