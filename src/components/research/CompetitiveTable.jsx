import React from 'react'
import { Check, X } from 'lucide-react'

const rows = [
  {
    feature: 'ECDSA Cryptographic Harvest Signing',
    honeychain: true,
    beewise: false,
    ibm: false,
    agmark: false,
  },
  {
    feature: 'NABL ISO 17025 On-Chain Anchoring',
    honeychain: true,
    beewise: false,
    ibm: false,
    agmark: false,
  },
  {
    feature: 'Public Blockchain (Polygon, Auditable)',
    honeychain: true,
    beewise: false,
    ibm: false,
    agmark: false,
  },
  {
    feature: 'Anti-Replay Scratch-Off Nonce QR',
    honeychain: true,
    beewise: false,
    ibm: false,
    agmark: false,
  },
  {
    feature: 'Colony Bio-Proxy Health Monitoring',
    honeychain: true,
    beewise: true,
    ibm: false,
    agmark: false,
  },
  {
    feature: 'Affordable ≤₹190/hive/yr (FPO scale)',
    honeychain: true,
    beewise: false,
    ibm: false,
    agmark: true,
  },
]

export default function CompetitiveTable() {
  return (
    <section className="py-20 bg-[#FAF8F5] border-b border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100 border border-stone-200 px-3 py-1 rounded-full mb-3">
            Market Benchmark · Phase 6 Evaluation
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight font-sans">
            Competitive Analysis Matrix
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base">
            Benchmarking HoneyChain against global smart-hive hardware, enterprise supply chains, and government QR standards.
          </p>
        </div>

        <div className="overflow-x-auto bg-white rounded-sm border-2 border-amber-200 shadow-md shadow-stone-900/5">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-amber-200 bg-amber-50/60 text-xs font-bold text-stone-900 font-sans">
                <th className="py-4 px-6">Core Verification Capability</th>
                <th className="py-4 px-6 text-center bg-amber-100/90 text-amber-950 font-black">
                  HoneyChain (MadhuMitra)
                </th>
                <th className="py-4 px-6 text-center text-stone-600">Beewise Beehome</th>
                <th className="py-4 px-6 text-center text-stone-600">IBM Food Trust</th>
                <th className="py-4 px-6 text-center text-stone-600">Agmark Static QR</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 text-xs sm:text-sm">
              {rows.map((r, idx) => (
                <tr key={idx} className="hover:bg-stone-50/60 transition-colors">
                  <td className="py-3.5 px-6 font-semibold text-stone-800">
                    {r.feature}
                  </td>
                  <td className="py-3.5 px-6 text-center bg-amber-50/40">
                    {r.honeychain ? (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 mx-auto">
                        <Check size={16} className="stroke-[3]" />
                      </span>
                    ) : (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100 text-red-600 mx-auto">
                        <X size={16} />
                      </span>
                    )}
                  </td>
                  <td className="py-3.5 px-6 text-center">
                    {r.beewise ? (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 mx-auto">
                        <Check size={16} className="stroke-[3]" />
                      </span>
                    ) : (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100 text-red-500 mx-auto">
                        <X size={16} />
                      </span>
                    )}
                  </td>
                  <td className="py-3.5 px-6 text-center">
                    {r.ibm ? (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 mx-auto">
                        <Check size={16} className="stroke-[3]" />
                      </span>
                    ) : (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100 text-red-500 mx-auto">
                        <X size={16} />
                      </span>
                    )}
                  </td>
                  <td className="py-3.5 px-6 text-center">
                    {r.agmark ? (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 mx-auto">
                        <Check size={16} className="stroke-[3]" />
                      </span>
                    ) : (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100 text-red-500 mx-auto">
                        <X size={16} />
                      </span>
                    )}
                  </td>
                </tr>
              ))}

              <tr className="bg-amber-100/50 font-bold text-xs sm:text-sm text-stone-900 border-t-2 border-amber-200">
                <td className="py-4 px-6 font-sans text-stone-900">
                  Total Evaluation Score
                </td>
                <td className="py-4 px-6 text-center text-emerald-800 font-extrabold text-base bg-amber-200/60 font-mono">
                  6 / 6 (100%)
                </td>
                <td className="py-4 px-6 text-center text-stone-600 font-mono">
                  1 / 6
                </td>
                <td className="py-4 px-6 text-center text-stone-600 font-mono">
                  0 / 6
                </td>
                <td className="py-4 px-6 text-center text-stone-600 font-mono">
                  1 / 6
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
