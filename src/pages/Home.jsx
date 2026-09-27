import React from 'react'
import HeroSection from '../components/home/HeroSection'
import StatCards from '../components/home/StatCards'
import BreakpointMap from '../components/home/BreakpointMap'
import OverviewCards from '../components/home/OverviewCards'
import BlenderShowcase from '../components/solution/BlenderShowcase'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <BlenderShowcase />
      <StatCards />
      <BreakpointMap />
      <OverviewCards />
    </main>
  )
}
