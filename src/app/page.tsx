import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { About } from '@/components/sections/About'
import { Partners } from '@/components/sections/Partners'
import { Stats } from '@/components/sections/Stats'
import { CTA } from '@/components/sections/CTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Services />
      <Partners />
      <CTA />
    </>
  )
}
