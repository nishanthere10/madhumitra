import React, { useState } from 'react'
import { Leaf, Truck, FlaskConical, Factory, Package, Smartphone, ShieldCheck } from 'lucide-react'

const stages = [
  {
    step: 1,
    icon: Leaf,
    name: 'Apiary Harvest',
    actor: 'Beekeeper (KVIC SHG)',
    action: 'Hive scale detects weight drop; ESP32 signs physical extraction reading.',
    hash: '0x8f2a...1109 (secp256k1 ECDSA)',
    payload: {
      hiveId: 'HIVE-SUN-07',
      netMass: '4.2 kg',
      temp: '34.8°C',
      acoustic: '230 Hz Queen Normal',
      plausibility: '0.94 / 1.00',
    },
  },
  {
    step: 2,
    icon: Truck,
    name: 'Aggregation',
    actor: 'Regional FPO Cooperative',
    action: 'Drums received, weighed, and sealed with tamper-evident NFC tags.',
    hash: '0xb34e...881c (Merkle Leaf)',
    payload: {
      fpoId: 'FPO-SUNDARBAN-42',
      pooledDrums: '8 Drums (1,680 kg)',
      solidsBase: '82.8% Total Sugar Equiv.',
      custodySig: 'FPO Field Officer',
    },
  },
  {
    step: 3,
    icon: FlaskConical,
    name: 'Lab Testing',
    actor: 'NABL Lab (NDDB/CFTRI)',
    action: 'NMR spectroscopy, C4 sugar, and SMR rice syrup testing performed.',
    hash: '0x99e2...04f1 (SHA-256 PDF Anchor)',
    payload: {
      nmrPurity: '99.4%',
      c4Sugars: '1.2% (Limit <= 7%)',
      smrRice: 'NEGATIVE / ABSENT',
      haccpCert: 'NABL-ISO-17025-VALID',
    },
  },
  {
    step: 4,
    icon: Factory,
    name: 'Homogenization',
    actor: 'KVIC Processing Unit',
    action: 'Batch processed under controlled temperature (<45°C) to retain enzymes.',
    hash: '0x22c1...7d83 (Mass Balance Enforced)',
    payload: {
      processId: 'KVIC-PROC-WB-02',
      inputSolids: '1,391 kg Solids',
      outputSolids: '1,388 kg Solids (0.2% variance)',
      diastasePreserved: '12.1 Schade units',
    },
  },
  {
    step: 5,
    icon: Package,
    name: 'Bottling & Packaging',
    actor: 'Packaging Line',
    action: 'Automated filling into 500g glass jars; dual QR scratch label affixed.',
    hash: '0xaa44...cc90 (Nonce Merkle Tree)',
    payload: {
      jarsProduced: '3,360 Units',
      nonceRange: 'NONCE-018-0001 to 3360',
      labelType: 'Dual-Layer Scratch Foil',
      packagingDate: '14 March 2026',
    },
  },
  {
    step: 6,
    icon: Smartphone,
    name: 'Consumer Verify',
    actor: 'Retail Consumer',
    action: 'Consumer scans outer QR and scratches foil to enter 6-digit one-time PIN.',
    hash: '0x7c12...44aa (Polygon Amoy Tx)',
    payload: {
      scanEvent: 'Nonce Claimed & Burned',
      replaysPermitted: '0 (Re-scan flags counterfeit)',
      consumerConfidence: 'Verified Provenance',
      dpdpCompliance: 'Zero PII Collected',
    },
  },
]

export default function JourneyTimeline() {
  const [activeStage, setActiveStage] = useState(1)
  const current = stages.find((s) => s.step === activeStage)

  return (
    <section className="py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100/80 border border-stone-200 px-3 py-1 rounded-full mb-3">
            Chain-of-Custody Lifecycle · Master Spec Phase 3
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight font-sans">
            The 6-Stage "Hive-to-Home" Journey
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base">
            Click any custody stage below to inspect the cryptographic state and actor responsibilities.
          </p>
        </div>

        {/* Stage Selector Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {stages.map((st) => {
            const Icon = st.icon
            const isSelected = activeStage === st.step
            return (
              <button
                key={st.step}
                onClick={() => setActiveStage(st.step)}
                className={`flex flex-col items-center text-center p-3.5 rounded-sm border transition-all ${
                  isSelected
                    ? 'bg-amber-500 text-stone-950 border-amber-600 shadow-lg shadow-stone-900/5 scale-102 font-bold'
                    : 'bg-white text-stone-700 border-amber-200/80 hover:border-amber-400 hover:bg-amber-50/50 shadow-sm shadow-stone-900/5'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-sm flex items-center justify-center mb-2 ${
                    isSelected ? 'bg-stone-950 text-amber-700' : 'bg-amber-100 text-amber-800'
                  }`}
                >
                  <Icon size={18} />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider opacity-80">
                  Stage 0{st.step}
                </span>
                <span className="text-xs font-bold truncate max-w-full font-sans mt-0.5">
                  {st.name}
                </span>
              </button>
            )
          })}
        </div>

        {/* Detailed Stage Card */}
        {current && (
          <div className="bg-white border-2 border-amber-300 rounded-sm p-6 sm:p-8 shadow-md shadow-stone-900/5">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 pb-6 border-b border-stone-100">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-amber-700 uppercase tracking-wider mb-1">
                  <span>Stage 0{current.step} of 06</span>
                  <span>•</span>
                  <span>Actor: {current.actor}</span>
                </div>
                <h3 className="text-2xl font-black text-stone-900 font-sans">
                  {current.name}
                </h3>
              </div>
              <div className="flex items-center gap-2 bg-stone-900 text-amber-300 text-xs font-mono px-3.5 py-2 rounded-sm">
                <ShieldCheck size={16} className="text-emerald-400" />
                <span>Payload: {current.hash}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
              {/* Description */}
              <div className="lg:col-span-5 space-y-4">
                <div className="bg-amber-50/80 border border-stone-200/80 rounded-sm p-5">
                  <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider mb-2">
                    Physical Event Protocol
                  </h4>
                  <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-medium">
                    {current.action}
                  </p>
                </div>
                <p className="text-xs text-stone-500 leading-relaxed italic">
                  Cryptographically committed on-chain. Cannot be altered retrospectively by aggregators or distributors.
                </p>
              </div>

              {/* On-Chain Payload Data */}
              <div className="lg:col-span-7 bg-stone-50 rounded-sm p-5 border border-stone-200">
                <div className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-3 flex items-center justify-between">
                  <span>Validated Cryptographic State</span>
                  <span className="text-[11px] font-mono text-emerald-600 font-bold">✔ Verified</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {Object.entries(current.payload).map(([k, v]) => (
                    <div key={k} className="bg-white p-3 rounded-sm border border-stone-200 shadow-2xs">
                      <span className="text-stone-400 block uppercase tracking-wider text-[10px] font-semibold mb-0.5">
                        {k.replace(/([A-Z])/g, ' $1')}
                      </span>
                      <span className="font-bold text-stone-900 text-sm font-sans">
                        {v}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
