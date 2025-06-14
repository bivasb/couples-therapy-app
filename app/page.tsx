import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import RecentSection from '@/components/RecentSection'
import Questionnaire from '@/components/Questionnaire'
import CTASection from '@/components/CTASection'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <div className="bg-gradient-to-b from-white to-cyan-400 h-24" />
        <Questionnaire />
        <RecentSection />
        <CTASection />
      </main>
    </>
  )
}