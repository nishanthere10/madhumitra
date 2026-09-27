import React from 'react'
import { Database, Link2Off, MapPin } from 'lucide-react'

export default function ResearchGap() {
  const gaps = [
    {
      icon: Database,
      title: '85% of Blockchain Food Papers Lack Physical Sensors',
      desc: 'Academic consensus (Feng et al., J. Cleaner Production, 2020) reveals that existing blockchain solutions merely tokenize human self-declaration. If an aggregator types fake data into an app, the blockchain immortalizes the lie.',
    },
    {
      icon: Link2Off,
      title: 'Zero ECDSA + Mass Balance Systems for Bulk Liquids',
      desc: 'No published food provenance framework enforces cryptographic mass conservation on public ledgers for divisible liquids like honey, permitting silent volume inflation in aggregation drums.',
    },
    {
      icon: MapPin,
      title: 'Zero Platforms Tailored to Indian FPO Cooperatives',
      desc: "Western systems (such as Beewise at $1,200+/hive) are cost-prohibitive for India's 38 Lakh smallholders. There has been no scalable solution deployable under the KVIC cluster model at ≤₹190/hive/yr.",
    },
  ]

  return (
    <section className="py-16 bg-white border-b border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 border-2 border-stone-900 px-3 py-1 rounded-full mb-3">
            Academic Differentiation · Research Gap
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight font-sans">
            What Existing Literature Is Missing
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base">
            Identified systemic shortcomings across existing agri-traceability and apiculture computing research.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {gaps.map((g, idx) => {
            const Icon = g.icon
            return (
              <div
                key={idx}
                className="bg-[#FAF8F5] border-2 border-stone-900/90 rounded-sm p-6 shadow-[2px_2px_0px_#1C1917] flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-sm bg-red-100 text-red-600 flex items-center justify-center mb-4">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-base font-bold text-stone-900 font-sans mb-2 leading-snug">
                    {g.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                    {g.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
