import React from 'react'
import { BookOpen, Award, CheckCircle2, TrendingUp, AlertTriangle } from 'lucide-react'
import PageHero from '../components/shared/PageHero'
import PapersList from '../components/research/PapersList'
import SwarmChart from '../components/research/SwarmChart'
import ResearchGap from '../components/research/ResearchGap'
import CompetitiveTable from '../components/research/CompetitiveTable'
import RegulatoryList from '../components/research/RegulatoryList'

export default function Research() {
  return (
    <main className="min-h-screen">
      <PageHero
        icon={BookOpen}
        badgeText="Verified Academic Foundations"
        title="Research & Empirical Grounding"
        subtitle="Peer-reviewed literature, government datasets, and laboratory validation protocols solving India's honey adulteration crisis."
      />

      {/* Visual Research Highlight Banner */}
      <section className="py-12 bg-white border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-800 text-xs font-bold uppercase tracking-wider">
                <AlertTriangle size={13} /> The 2020 CSE Investigation
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 font-sans">
                Why Standard Sugar Tests Failed & How Modern Syrup Defeats Them
              </h2>
              <p className="text-sm text-stone-600 leading-relaxed">
                In 2020, the Centre for Science and Environment (CSE) conducted an undercover investigation into India&apos;s honey supply chain. They discovered that major commercial brands were easily passing routine FSSAI laboratory tests (C3/C4 sugar isotope tests) by blending specialized, designer rice and corn syrups imported from China.
              </p>
              <p className="text-sm text-stone-600 leading-relaxed">
                When CSE sent identical samples to an advanced laboratory in Germany for <strong>Nuclear Magnetic Resonance (NMR) spectroscopy</strong>, <strong>77% of all samples failed immediately</strong>. MadhuMitra eliminates this loophole by linking hive load-cell data directly to ISO 17025 batch NMR test certificates on a public, verifiable audit trail.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-3.5 bg-amber-50 rounded-sm border-2 border-stone-900">
                  <div className="text-2xl font-black text-amber-700 font-sans">77%</div>
                  <div className="text-xs text-amber-900 font-medium">NMR Adulteration Failure in CSE Benchmark</div>
                </div>
                <div className="p-3.5 bg-emerald-50 rounded-sm border-2 border-stone-900">
                  <div className="text-2xl font-black text-emerald-700 font-sans">₹5–10/kg</div>
                  <div className="text-xs text-emerald-900 font-medium">Cost via FPO Pooled Batch Testing (vs ₹25,000 solo)</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-sm overflow-hidden shadow-[6px_6px_0px_#1C1917] border-2 border-stone-900">
                <img
                  src="images/bee_pollination.jpg"
                  alt="Honeybee pollinating mustard flower"
                  className="w-full h-56 object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-stone-950/80 to-transparent text-white text-xs font-semibold">
                  Unifloral Mustard Nectar Flow
                </div>
              </div>

              <div className="relative rounded-sm overflow-hidden shadow-[6px_6px_0px_#1C1917] border-2 border-stone-900">
                <img
                  src="images/lab_testing.jpg"
                  alt="NABL ISO 17025 Laboratory Testing"
                  className="w-full h-56 object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-stone-950/80 to-transparent text-white text-xs font-semibold">
                  NABL / ISO 17025 NMR Testing
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PapersList />
      <SwarmChart />
      <ResearchGap />
      <CompetitiveTable />
      <RegulatoryList />
    </main>
  )
}
