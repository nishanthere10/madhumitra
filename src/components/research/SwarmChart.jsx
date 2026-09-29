import React from 'react'
import { AlertTriangle } from 'lucide-react'

const swarmData = [
  { year: '2019-20', withoutIoT: 79.56, withIoT: 59.67, note: null },
  { year: '2020-21', withoutIoT: 106.73, withIoT: 80.05, note: 'COVID border closures' },
  { year: '2021-22', withoutIoT: 92.74, withIoT: 69.56, note: null },
  { year: '2022-23', withoutIoT: 111.85, withIoT: 83.89, note: null },
  { year: '2023-24', withoutIoT: 146.90, withIoT: 110.18, note: 'Severe climate disruption' },
  { year: '2024-25', withoutIoT: 139.27, withIoT: 104.45, note: null },
]

export default function SwarmChart() {
  const maxVal = 160

  return (
    <section className="py-20 bg-[#FAF8F5] border-b border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-red-700 bg-red-100 border border-stone-200 px-3 py-1 rounded-full mb-3">
            Economic Impact · Swarm Prevention
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight font-sans">
            Annual Bee Swarm Losses — India
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base">
            Estimated financial losses without IoT monitoring vs. with MadhuMitra early acoustic & weight warnings (25% reduction).
          </p>
        </div>

        <div className="bg-white border-2 border-amber-200 rounded-sm p-6 sm:p-8 shadow-sm shadow-stone-900/5 max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-stone-100 text-xs">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <span className="w-3.5 h-3.5 rounded bg-red-400 inline-block"></span>
                <span className="font-bold text-stone-700">Without IoT (Current Losses)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3.5 h-3.5 rounded bg-amber-500 inline-block"></span>
                <span className="font-bold text-stone-700">With MadhuMitra IoT (-25%)</span>
              </div>
            </div>
            <span className="text-stone-400 font-medium">All figures in ₹ Crores</span>
          </div>

          <div className="space-y-6 pt-6">
            {swarmData.map((row) => {
              const withoutPct = (row.withoutIoT / maxVal) * 100
              const withPct = (row.withIoT / maxVal) * 100

              return (
                <div key={row.year} className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs font-semibold">
                    <span className="text-stone-900 font-bold font-sans">{row.year}</span>
                    {row.note && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-red-700 bg-red-50 border border-stone-200 px-2 py-0.5 rounded-full">
                        <AlertTriangle size={11} />
                        <span>{row.note}</span>
                      </span>
                    )}
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-stone-100 rounded-full h-4 overflow-hidden">
                        <div
                          className="bg-red-400 h-full rounded-full transition-all duration-700 flex items-center justify-end pr-2"
                          style={{ width: `${withoutPct}%` }}
                        ></div>
                      </div>
                      <span className="w-20 text-right font-mono font-bold text-xs text-red-600">
                        ₹{row.withoutIoT} Cr
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-stone-100 rounded-full h-4 overflow-hidden">
                        <div
                          className="bg-amber-500 h-full rounded-full transition-all duration-700 flex items-center justify-end pr-2"
                          style={{ width: `${withPct}%` }}
                        ></div>
                      </div>
                      <span className="w-20 text-right font-mono font-bold text-xs text-amber-700">
                        ₹{row.withIoT} Cr
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-8 pt-4 border-t border-stone-100 text-xs text-stone-500 flex flex-col sm:flex-row justify-between gap-2">
            <span>
              <strong>Methodology:</strong> Based on NABARD & AICRP colony migration survival benchmarks.
            </span>
            <span className="italic">
              Sources: National Bee Board, ICAR-AICRP, Madhukranti Portal (2023-24).
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
