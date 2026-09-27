import React from 'react'
import { Blocks } from 'lucide-react'
import PageHero from '../components/shared/PageHero'
import DualPillar from '../components/solution/DualPillar'
import LayerCards from '../components/solution/LayerCards'
import JourneyTimeline from '../components/solution/JourneyTimeline'

export default function Solution() {
  return (
    <main className="min-h-screen">
      <PageHero
        icon={Blocks}
        badgeText="Cyber-Physical Architecture"
        title="The Proposed Solution"
        subtitle="4 cryptographic layers. 6 custody stages."
      />
      <DualPillar />
      <LayerCards />
      <JourneyTimeline />
    </main>
  )
}
