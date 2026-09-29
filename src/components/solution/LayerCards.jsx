import React from 'react'
import { Scale, Lock, FlaskConical, QrCode, AlertCircle, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react'

const layers = [
  {
    num: '1',
    title: 'Physical Extraction Proof',
    plainSubtitle: 'IoT Scale Under Hive · No Manual Input',
    icon: Scale,
    desc: 'When honey is harvested, the smart scale detects the sudden weight drop (e.g. -4.2 kg). The microcontroller immediately stamps this weight digitally before the honey leaves the apiary.',
    boundary: 'Honest Boundary: Flags anomaly alarms; does not diagnose bee sickness. Protects against volume inflation; laboratory tests are still needed for microscopic purity.',
    img: '/images/hardware_scale.jpg',
    highlights: [
      'Automatic weight drop recording (-3.0 to -5.5 kg/super)',
      'Digital hardware signature in under 20ms',
      'Encrypted LittleFS flash buffer holds 200+ days offline',
    ],
  },
  {
    num: '2',
    title: 'Mathematical Balance Rule',
    plainSubtitle: 'Smart Contract Prevents Adding Sugar Syrup',
    icon: Lock,
    desc: 'The blockchain enforces a strict rule: Total honey bottled can NEVER exceed the total honey harvested. If an aggregator tries to add 200 kg of sugar syrup into the system, the smart contract automatically rejects the batch.',
    boundary: 'Honest Boundary: Proves chain-of-custody and prevents artificial volume expansion. Does not replace chemical analysis.',
    img: '/images/coop_drums.jpg',
    highlights: [
      'Mass conservation formula: Bottled solids <= Harvested solids',
      'Aggregation drums sealed with cryptographic NFC tags',
      'Immutable Polygon Amoy audit trail prevents retroactive edits',
    ],
  },
  {
    num: '3',
    title: 'Cryptographic Lab Verification',
    plainSubtitle: 'EIP-712 Lab Signature Locked to Batch',
    icon: FlaskConical,
    desc: 'It’s too easy for a corrupt aggregator to photoshop a PDF lab report. Instead of just storing documents, HoneyChain requires the authorized NABL testing lab to cryptographically sign their results using the EIP-712 standard. The chemical purity proof is permanently locked to the physical batch volume on the blockchain, making it mathematically impossible to alter the test results or swap batches.',
    boundary: 'Honest Boundary: Lab tests prove chemical purity; blockchain proves this specific certificate belongs to this pooled batch, completely stopping certificate re-use.',
    img: '/images/lab_testing.jpg',
    highlights: [
      'NMR profiling catches synthetic C3/C4 corn & rice syrups',
      'Pooled FPO testing reduces cost to only ₹5–10 per kg',
      'Lab PDF hash (SHA-256) permanently anchored on ledger',
    ],
  },
  {
    num: '4',
    title: 'Anti-Copy Scratch-Off QR',
    plainSubtitle: 'Single-Use PIN Destroys The Xerox Attack',
    icon: QrCode,
    desc: 'Each jar has an outer batch QR code and an inner 6-digit PIN hidden under silver scratch foil. The first customer who scratches and enters the PIN claims the jar. Any photocopied duplicates instantly show a red alert.',
    boundary: 'Honest Boundary: Defeats cloned QR stickers completely. Uses registered apiary coordinates, not power-hungry live GPS trackers.',
    img: '/images/honey_jar.jpg',
    highlights: [
      'Dual-layer tamper-evident scratch seal on each jar',
      'First scan burns the cryptographic nonce token',
      'Secondary scan attempts immediately trigger counterfeit warning',
    ],
  },
]

export default function LayerCards() {
  return (
    <section className="py-24 bg-white border-b border-amber-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading conforming to DESIGN.md */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-stone-200 rounded-full px-4 py-1.5 mb-4">
            <span className="text-amber-700 text-xs font-semibold uppercase tracking-wide">
              Defense-in-Depth Model · Zero Jargon
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-stone-900 mb-3 font-sans tracking-tight">
            The 4-Layer Defense Against Honey Fraud
          </h2>
          <div className="w-12 h-1 bg-amber-500 rounded mx-auto mb-4" />
          <p className="text-stone-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Every layer closes a specific loophole. Here is how physical sensors, smart contracts, NABL labs, and scratch seals work together to make fraud impossible.
          </p>
        </div>

        {/* 4 Layers Grid with Large High-Resolution Imagery */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {layers.map((layer) => {
            const Icon = layer.icon
            return (
              <div
                key={layer.num}
                className="bg-[#FAF8F5] border-2 border-amber-200 rounded-sm overflow-hidden shadow-md shadow-stone-900/5 hover:shadow-lg hover:shadow-amber-900/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Large High-Resolution Image Header (Expanded Size per User Feedback) */}
                  <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden bg-stone-950">
                    <img
                      src={layer.img}
                      alt={layer.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-transparent" />
                    
                    {/* Top Layer Badge */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 bg-amber-500 text-stone-950 font-black text-sm px-3.5 py-1.5 rounded-sm shadow-lg shadow-stone-900/5 font-sans">
                        LAYER 0{layer.num}
                      </span>
                      <span className="bg-stone-900 text-amber-300 text-xs font-mono font-bold px-3 py-1 rounded-full border border-amber-400">
                        {layer.plainSubtitle}
                      </span>
                    </div>

                    {/* Bottom Image Caption */}
                    <div className="absolute bottom-4 left-5 right-5 text-white">
                      <div className="flex items-center gap-2">
                        <Icon size={18} className="text-amber-700" />
                        <h3 className="text-xl sm:text-2xl font-bold text-white font-sans">
                          {layer.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-7 sm:p-8">
                    <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-normal mb-6">
                      {layer.desc}
                    </p>

                    {/* Highlights List */}
                    <div className="space-y-2.5 mb-6">
                      {layer.highlights.map((hl, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700 font-medium">
                          <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Honest Boundary Alert Box */}
                <div className="px-7 sm:px-8 pb-7">
                  <div className="bg-amber-50/95 border border-stone-200 rounded-sm p-4 flex items-start gap-3 text-xs sm:text-sm text-amber-950">
                    <AlertCircle size={18} className="text-amber-700 shrink-0 mt-0.5" />
                    <span className="leading-relaxed font-medium">{layer.boundary}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
