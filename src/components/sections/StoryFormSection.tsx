'use client'
import { useState } from 'react'
import { AnimatedSection } from '@/components/animation/AnimatedSection'
import { MagneticButton } from '@/components/animation/MagneticButton'
import { Button } from '@/components/ui/button'
import { Send, Sparkles } from 'lucide-react'

export function StoryFormSection() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-neutral" />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#5bd37c]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#0fa8ed]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#5bd37c]/10 text-[#5bd37c] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <Sparkles size={14} />
              Share Your Story
            </div>
            <h2 className="text-5xl md:text-7xl font-heading font-bold leading-tight">
              Your Story
              <br />
              <span className="text-[#5bd37c]">Matters</span>
            </h2>
            <p className="text-muted text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
              Each month, one testimony will be selected and transformed into a
              message that can be shared with others through a custom-designed shirt.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          {submitted ? (
            <div className="text-center py-20">
              <div className="w-20 h-20 rounded-full bg-[#5bd37c]/10 flex items-center justify-center mx-auto mb-6">
                <Send size={32} className="text-[#5bd37c]" />
              </div>
              <h3 className="text-3xl font-heading font-bold mb-3">Thank You</h3>
              <p className="text-muted text-lg max-w-md mx-auto">
                Your story has been received. Every story is valued, and if
                yours is selected, we&apos;ll be in touch.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
              <div>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  required
                  className="w-full h-14 px-6 rounded-2xl border border-border bg-white text-foreground placeholder:text-muted focus:border-[#5bd37c] focus:ring-2 focus:ring-[#5bd37c]/20 outline-none transition-all text-base"
                />
              </div>

              <div>
                <textarea
                  placeholder="Share Your Story"
                  rows={6}
                  required
                  className="w-full px-6 py-5 rounded-2xl border border-border bg-white text-foreground placeholder:text-muted focus:border-[#5bd37c] focus:ring-2 focus:ring-[#5bd37c]/20 outline-none transition-all text-base resize-none"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Scripture Field"
                  className="w-full h-14 px-6 rounded-2xl border border-border bg-white text-foreground placeholder:text-muted focus:border-[#5bd37c] focus:ring-2 focus:ring-[#5bd37c]/20 outline-none transition-all text-base"
                />
              </div>

              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  required
                  className="mt-1 w-5 h-5 rounded-md border-2 border-border accent-[#5bd37c] checked:bg-[#5bd37c] focus:ring-[#5bd37c]"
                />
                <span className="text-sm text-muted leading-relaxed group-hover:text-foreground transition-colors">
                  By submitting, you allow Virtual Genesis to use your story.
                </span>
              </label>

              <div className="pt-2">
                <MagneticButton>
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full group text-base"
                  >
                    Submit Your Story
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Button>
                </MagneticButton>
              </div>

              <div className="text-center pt-4">
                <p className="text-xs text-muted leading-relaxed">
                  Only one submission per person per month is allowed.
                  <br />
                  Only one story will be selected each month.
                  <br />
                  Not all submissions will be used, but every story is valued.
                </p>
              </div>
            </form>
          )}
        </AnimatedSection>
      </div>
    </section>
  )
}
