import React from 'react'
import { ScrollText, Shield, Users, Globe, Banknote, Globe2, Lock } from 'lucide-react'

const standards = [
  {
    icon: ScrollText,
    title: 'CSE 2020 NMR Investigation',
    desc: 'Documented 77% adulteration in major commercial brands using Chinese fructose syrup, triggering nationwide purity inquiries.',
  },
  {
    icon: Shield,
    title: 'FSSAI Regulation 2.8.3',
    desc: 'Mandates <=20% Moisture, <=7% C4 sugar, negative SMR (Specific Marker for Rice), and enzyme minimums.',
  },
  {
    icon: Users,
    title: 'NBHM / Madhukranti Portal',
    desc: 'National Bee Board registry tracking 38 Lakh+ beekeepers seeking digital provenance certification.',
  },
  {
    icon: Globe,
    title: 'Export Inspection Council (EIC)',
    desc: 'Mandatory NMR testing protocols for raw and processed honey exported to North America and the European Union.',
  },
  {
    icon: Banknote,
    title: 'NABARD Apiculture Model',
    desc: 'Economics benchmark for 50-colony cluster viability (₹1,500–₹2,500 per colony annual operational cost).',
  },
  {
    icon: Globe2,
    title: 'COLOSS Asia Task Force',
    desc: 'Standardized colony loss monitoring protocol across apiculture hubs in India and Southeast Asia.',
  },
  {
    icon: Lock,
    title: 'DPDP Act 2023 Compliance',
    desc: 'Zero Personally Identifiable Information (PII) on-chain. HoneyChain only stores cryptographic hashes and anonymized cooperative credentials.',
  },
]

export default function RegulatoryList() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100 border border-stone-200 px-3 py-1 rounded-full mb-3">
            Standards & Statutory Compliance
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight font-sans">
            Regulatory Framework Alignment
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base">
            Every audit requirement, food standard limit, and data protection rule embedded in the codebase.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {standards.map((s, idx) => {
            const Icon = s.icon
            return (
              <div
                key={idx}
                className="bg-[#FAF8F5] border border-stone-200/80 rounded-sm p-5 shadow-2xs hover:border-amber-300 transition-colors"
              >
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="p-2 rounded-sm bg-amber-100 text-amber-800">
                    <Icon size={18} />
                  </div>
                  <h4 className="text-sm font-bold text-stone-900 font-sans">
                    {s.title}
                  </h4>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed font-normal">
                  {s.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
