import React, { useState } from 'react'
import { Layers, FileX, Copy, TrendingDown, AlertOctagon, ShieldCheck } from 'lucide-react'

const breakpoints = [
  {
    id: 1,
    title: 'The Aggregation Drum Trap',
    plainName: 'Where Pure Honey Gets Diluted with Sugar Syrup',
    icon: Layers,
    color: 'text-red-600',
    bg: 'bg-red-50',
    summary: 'Local middlemen buy pure honey and mix it with ₹40/kg rice syrup inside large 200-liter collection drums.',
    detail: 'Once honey is mixed in the drum, the original farmer origin is erased forever. Testing honey only at the factory gate is too late.',
    solution: 'MadhuMitra puts an IoT weight scale directly under the hive. It creates a digital proof the instant honey is extracted, before it ever touches a drum.',
  },
  {
    id: 2,
    title: 'Fake Certificate Re-Use',
    plainName: 'One Genuine Test PDF Re-Used for 50 Fake Batches',
    icon: FileX,
    color: 'text-red-600',
    bg: 'bg-red-50',
    summary: 'A trader sends one genuine honey sample to the lab, gets a passing test PDF, and attaches copies of it to 50 fake batches.',
    detail: 'Because paper and PDF certificates are not locked to specific jar quantities, traders reuse passing test reports repeatedly.',
    solution: 'The lab digital fingerprint (SHA-256 hash) is locked into the smart contract with an exact volume cap. No extra jars can be sold under that certificate.',
  },
  {
    id: 3,
    title: 'The Xerox Attack (Photocopied QR Codes)',
    plainName: 'Why Normal QR Codes on Honey Jars Do Not Protect You',
    icon: Copy,
    color: 'text-red-600',
    bg: 'bg-red-50',
    summary: 'Scammers photocopy a real QR code and stick 10,000 duplicate stickers onto fake jars of sugar syrup.',
    detail: 'When a buyer scans a normal static QR code, their phone just opens a website. It cannot tell if this is the 1st jar or the 10,000th copy.',
    solution: 'MadhuMitra uses a scratch-off 6-digit PIN. The moment the first real buyer verifies their jar, that PIN is permanently burned. Any copied jar immediately sounds a red COUNTERFEIT alert.',
  },
  {
    id: 4,
    title: 'Farmer Underpayment',
    plainName: 'Beekeepers Earn ₹190/kg While Consumers Pay ₹600–800/kg',
    icon: TrendingDown,
    color: 'text-red-600',
    bg: 'bg-red-50',
    summary: 'Smallholder beekeepers are forced to sell bulk raw honey to middlemen at rock-bottom prices.',
    detail: 'Middlemen pocket over 60% of the value because small farmers had no way to prove their honey came from pure Mustard or Sundarbans flora.',
    solution: 'Cryptographic proof of floral origin allows rural cooperatives to package unifloral honey directly, doubling farmer income.',
  },
]

export default function BreakpointMap() {
  const [selectedBp, setSelectedBp] = useState(1)

  return (
    <section className="py-20 bg-[#FAF8F5] border-b border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-red-700 bg-red-100/70 border border-stone-200 px-3 py-1 rounded-full mb-3">
            System Breakdown · Plain-English Analysis
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight font-sans">
            The 4 Ways Honey Fraud Happens
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base">
            Click each attack point below to see how adulterators inject sugar syrup and how MadhuMitra closes the door.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: 4 Breakpoint Clickable Cards */}
          <div className="lg:col-span-6 space-y-4">
            {breakpoints.map((bp) => {
              const Icon = bp.icon
              const isSelected = selectedBp === bp.id
              return (
                <div
                  key={bp.id}
                  onClick={() => setSelectedBp(bp.id)}
                  className={`cursor-pointer rounded-sm p-5 border transition-all duration-200 ${
                    isSelected
                      ? 'bg-white border-amber-500 shadow-lg shadow-stone-900/5 transtone-x-1.5'
                      : 'bg-white/80 border-stone-200/80 hover:border-amber-300 hover:bg-white shadow-sm shadow-stone-900/5'
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div className={`p-2.5 rounded-sm ${bp.bg} ${bp.color} mt-0.5 shrink-0`}>
                      <Icon size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider">
                          Attack Vector 0{bp.id}
                        </span>
                        {isSelected && (
                          <span className="text-[11px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-md">
                            Selected
                          </span>
                        )}
                      </div>
                      <h3 className="text-base font-bold text-stone-900 font-sans mt-0.5">
                        {bp.title}
                      </h3>
                      <p className="text-xs font-medium text-amber-900 mt-0.5">
                        {bp.plainName}
                      </p>
                      <p className="text-xs text-stone-600 mt-1 leading-snug">
                        {bp.summary}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right: Interactive Attack vs Fix Inspector with Real Cooperative Photo */}
          <div className="lg:col-span-6 bg-white border-2 border-amber-200 rounded-sm p-6 sm:p-8 shadow-md shadow-stone-900/5">
            <div className="flex items-center justify-between border-b border-stone-100 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <AlertOctagon size={20} className="text-red-500" />
                <h4 className="font-bold text-stone-900 font-sans">
                  Attack Point & Engineering Defense
                </h4>
              </div>
              <span className="text-xs font-mono text-stone-400">Honey Value Chain</span>
            </div>

            {/* Step flow tabs */}
            <div className="bg-stone-50 rounded-sm p-3.5 mb-6 border border-stone-200">
              <div className="text-[10px] font-bold uppercase tracking-wider text-stone-400 mb-2">
                Supply Chain Steps
              </div>
              <div className="grid grid-cols-4 gap-1.5 text-center text-[11px] font-bold">
                <div className="p-2 rounded-lg bg-amber-100 text-amber-900 border border-stone-200">
                  <span>1. Hive</span>
                </div>
                <div className={`p-2 rounded-lg border ${selectedBp === 1 ? 'bg-red-100 text-red-800 border-red-300' : 'bg-white text-stone-600'}`}>
                  <span>2. Drums</span>
                </div>
                <div className={`p-2 rounded-lg border ${selectedBp === 2 ? 'bg-red-100 text-red-800 border-red-300' : 'bg-white text-stone-600'}`}>
                  <span>3. Lab</span>
                </div>
                <div className={`p-2 rounded-lg border ${selectedBp === 3 ? 'bg-red-100 text-red-800 border-red-300' : 'bg-white text-stone-600'}`}>
                  <span>4. Jars</span>
                </div>
              </div>
            </div>

            {/* Selected Breakdown */}
            {breakpoints.filter(b => b.id === selectedBp).map(bp => (
              <div key={bp.id} className="space-y-4">
                <div className="bg-red-50 border border-stone-200 rounded-sm p-4">
                  <span className="text-xs font-bold text-red-900 uppercase tracking-wide block mb-1">
                    How The Scam Works:
                  </span>
                  <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-medium">
                    {bp.detail}
                  </p>
                </div>

                <div className="bg-emerald-50 border border-stone-200 rounded-sm p-4">
                  <div className="flex items-center gap-1.5 text-emerald-900 text-xs font-bold uppercase tracking-wide mb-1">
                    <ShieldCheck size={16} className="text-emerald-600" />
                    <span>MadhuMitra Direct Fix:</span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-800 leading-relaxed">
                    {bp.solution}
                  </p>
                </div>
              </div>
            ))}

            {/* Contextual Photo of Real Cooperative Aggregation Drum Depot */}
            <div className="mt-6 pt-4 border-t border-stone-100">
              <div className="flex items-center gap-3 bg-stone-50 p-3 rounded-sm border border-stone-200">
                <img
                  src="/images/coop_drums.jpg"
                  alt="Cooperative collection depot with sealed 200L honey drums"
                  className="w-16 h-16 rounded-sm object-cover shrink-0"
                />
                <div className="text-xs">
                  <span className="font-bold text-stone-900 block font-sans">
                    Cooperative 200L Drum Aggregation
                  </span>
                  <p className="text-[11px] text-stone-500 mt-0.5 leading-snug">
                    Sealed with digital tamper-evident tags at the FPO warehouse to prevent bulk dilution.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
