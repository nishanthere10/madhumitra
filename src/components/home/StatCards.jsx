import React, { useRef } from 'react'
import { AlertTriangle, TrendingDown, Users, DollarSign } from 'lucide-react'
import useInView from '../../hooks/useInView'
import useCountUp from '../../hooks/useCountUp'

export default function StatCards() {
  const containerRef = useRef(null)
  const inView = useInView(containerRef)

  const stats = [
    {
      targetNum: 77,
      suffix: '%',
      label: 'Honey Samples Failed NMR Lab Tests',
      sublabel: 'Passed routine tests using undetectable imported syrup.',
      source: 'Centre for Science and Environment (CSE), 2020',
      icon: AlertTriangle,
      color: 'text-amber-600',
    },
    {
      targetNum: 147,
      prefix: '₹',
      suffix: ' Cr',
      label: 'Annual Lost Value from Preventable Bee Swarms',
      sublabel: 'Beekeepers lose 20-30% of hives each year without early warnings.',
      source: 'NABARD & AICRP Beekeeping Economics, 2022',
      icon: TrendingDown,
      color: 'text-red-600',
    },
    {
      targetNum: 38,
      suffix: ' Lakh+',
      label: 'Smallholder Beekeepers in Rural India',
      sublabel: 'Vulnerable to low farmgate prices without verifiable purity.',
      source: 'National Beekeeping & Honey Mission (NBHM), 2023',
      icon: Users,
      color: 'text-amber-600',
    },
    {
      targetNum: 190,
      prefix: '₹',
      suffix: '/yr',
      label: 'Hardware Cost per Hive to Protect the Supply Chain',
      sublabel: '1 IoT scale per 10-hive cluster makes security affordable.',
      source: 'MadhuMitra BOM Cost Engineering Benchmark, 2026',
      icon: DollarSign,
      color: 'text-emerald-600',
    },
  ]

  return (
    <section className="py-16 bg-[#FAF8F5] border-b border-amber-100" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-50 border-2 border-stone-900 rounded-full px-4 py-1.5 mb-4">
            <span className="text-amber-600 text-xs font-semibold uppercase tracking-wide">
              The Honey Crisis & Market Opportunity
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-3 font-sans">
            Ground Reality of Indian Apiculture
          </h2>
          <div className="w-12 h-1 bg-amber-500 rounded mx-auto mb-4" />
          <p className="text-stone-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Independent laboratory audits and government reports show that adulteration collapses farmer income while consumers pay for sugar syrup.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, idx) => {
            const Icon = s.icon
            const count = useCountUp(s.targetNum, inView, 1200)
            return (
              <div
                key={idx}
                className="bg-white rounded-sm border border-amber-100 p-6 md:p-8 text-center
                           shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_12px_rgba(245,158,11,0.12)]
                           hover:-transtone-y-0.5 transition-all duration-200 flex flex-col justify-between"
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <div>
                  <div className="w-10 h-10 mx-auto mb-3 bg-amber-50 border-2 border-stone-900 rounded-sm flex items-center justify-center">
                    <Icon size={20} className={s.color} />
                  </div>
                  <div
                    className={`text-4xl font-black ${s.color} mb-1`}
                    style={{ fontFamily: 'Space Grotesk' }}
                  >
                    {s.prefix || ''}{count}{s.suffix || ''}
                  </div>
                  <div className="text-stone-800 font-bold text-sm mb-1">
                    {s.label}
                  </div>
                  <p className="text-stone-600 text-xs leading-relaxed mb-3">
                    {s.sublabel}
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 text-stone-400 text-[11px] font-mono">
                  {s.source}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
