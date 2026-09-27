import React from 'react'
import { Link } from 'react-router-dom'
import { Scale, Calculator, FlaskConical, ShieldCheck, ArrowRight } from 'lucide-react'

const guarantees = [
  {
    icon: Scale,
    title: 'Harvest Plausibility Score',
    subtitle: 'IoT Edge Signing',
    desc: 'HX711 load cell and BME280 sensor sign weight differentials directly on ESP32-S3 via secp256k1 ECDSA.',
    tag: 'Physical Evidence Anchor',
  },
  {
    icon: Calculator,
    title: 'On-Chain Mass Balance',
    subtitle: 'Smart Contract Guard',
    desc: 'Mathematical conservation of honey mass prevents bulk inflation. Volume in must strictly equal volume out.',
    tag: 'Solidity 0.8.24 Registry',
  },
  {
    icon: FlaskConical,
    title: 'NABL Lab Trust Oracle',
    subtitle: 'ISO 17025 Verification',
    desc: 'SHA-256 fingerprint of the authorized NABL NMR lab report is irrevocably anchored to the batch on Polygon.',
    tag: 'Certificate Tamper-Proof',
  },
  {
    icon: ShieldCheck,
    title: 'Anti-Counterfeit QR Nonce',
    subtitle: 'Dual-Layer Verification',
    desc: 'Public GS1 batch QR plus single-use scratch-off cryptographic PIN that burns on the smart contract on first scan.',
    tag: 'Prevents Xerox Attack',
  },
]

export default function OverviewCards() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100/80 border-2 border-stone-900 px-3 py-1 rounded-full mb-3">
            Four Cryptographic Guarantees
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight font-sans">
            Engineered Trust from Hive to Jar
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base">
            No single point of failure. Every stage is physically sealed, cryptographically signed, and independently auditable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {guarantees.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="bg-[#FAF8F5] border-2 border-stone-900/80 rounded-sm p-6 shadow-[2px_2px_0px_#1C1917] hover:shadow-[6px_6px_0px_#1C1917] hover:border-amber-400 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-sm bg-amber-100 text-amber-700 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                    <Icon size={24} />
                  </div>
                  <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider bg-amber-100/60 px-2 py-0.5 rounded">
                    {item.tag}
                  </span>
                  <h3 className="text-lg font-bold text-stone-900 font-sans mt-2.5 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-amber-700 mb-2.5">
                    {item.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <Link
            to="/solution"
            className="inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-amber-400 font-bold px-8 py-3.5 rounded-sm text-sm shadow-[4px_4px_0px_#1C1917] transition-all hover:scale-102"
          >
            <span>See Full Architecture & Custody Journey</span>
            <ArrowRight size={18} className="text-amber-400" />
          </Link>
        </div>
      </div>
    </section>
  )
}
