import { HeroSection } from '@/components/sections/HeroSection'
import { FeaturedProducts } from '@/components/sections/FeaturedProducts'
import { JewelryBanner } from '@/components/sections/JewelryBanner'
import { CollectionShowcase } from '@/components/sections/CollectionShowcase'
import { BrandStory } from '@/components/sections/BrandStory'
import { PodcastSection } from '@/components/sections/PodcastSection'
import { ProgramsSection } from '@/components/sections/ProgramsSection'
import { Testimonials } from '@/components/sections/Testimonials'
import { NewsletterSection } from '@/components/sections/NewsletterSection'
import { StoryFormSection } from '@/components/sections/StoryFormSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <JewelryBanner />
      <CollectionShowcase />
      <BrandStory />
      <PodcastSection />
      <ProgramsSection />
      <Testimonials />
      <StoryFormSection />
      <NewsletterSection />
    </>
  )
}
