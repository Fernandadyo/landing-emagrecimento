import HeroSection from '@/components/sections/HeroSection'
import PainSolutionSection from '@/components/sections/PainSolutionSection'
import WhatYouLearnSection from '@/components/sections/WhatYouLearnSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import GuaranteeSection from '@/components/sections/GuaranteeSection'
import FinalCtaSection from '@/components/sections/FinalCtaSection'
import StickyCtaBar from '@/components/ui/StickyCtaBar'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PainSolutionSection />
      <WhatYouLearnSection />
      <TestimonialsSection />
      <GuaranteeSection />
      <FinalCtaSection />
      <StickyCtaBar />
    </main>
  )
}
