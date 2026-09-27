import React from 'react'
import {
  Package,
  MapPin,
  Calendar,
  Flower2,
  Users,
  FileText,
  ExternalLink,
  Lock,
  Info,
  Check,
  ShieldCheck,
} from 'lucide-react'

export default function QRStep1({ onNext }) {
  const labMetrics = [
    { label: 'NMR Purity', val: '99.4%', status: 'Pass' },
    { label: 'C4 Sugars', val: '1.2%', status: 'Pass (Limit <= 7%)' },
    { label: 'SMR (Rice Syrup)', val: 'ABSENT', status: 'Negative' },
    { label: 'Moisture', val: '17.2%', status: 'FSSAI <= 20%' },
    { label: 'HMF', val: '22.3 mg/kg', status: 'Pass (<= 80 mg/kg)' },
    { label: 'Diastase', val: '12.1 Schade', status: 'Enzyme Intact' },
  ]

  return (
    <div className="space-y-4">
      {/* Product Banner */}
      <div className="bg-amber-500 text-stone-950 p-4 rounded-sm shadow-[2px_2px_0px_#1C1917]">
        <div className="flex items-center gap-2 mb-1">
          <Package size={20} className="text-stone-950" />
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-950">
            Batch Public Passport
          </span>
        </div>
        <h4 className="text-lg font-black font-sans leading-tight">
          Sundarbans Forest Honey (500g)
        </h4>
        <p className="text-xs font-mono font-bold text-amber-950 mt-0.5">
          BATCH-2026-KVIC-018
        </p>
      </div>

      {/* Meta Specs Grid */}
      <div className="grid grid-cols-2 gap-2 text-xs">
        <div className="bg-stone-50 p-2.5 rounded-sm border border-stone-200 flex items-center gap-2">
          <MapPin size={16} className="text-amber-600 shrink-0" />
          <div>
            <span className="text-[10px] text-stone-400 block font-semibold uppercase">Origin</span>
            <span className="font-bold text-stone-800">Sundarbans East, WB</span>
          </div>
        </div>

        <div className="bg-stone-50 p-2.5 rounded-sm border border-stone-200 flex items-center gap-2">
          <Calendar size={16} className="text-amber-600 shrink-0" />
          <div>
            <span className="text-[10px] text-stone-400 block font-semibold uppercase">Harvested</span>
            <span className="font-bold text-stone-800">12 March 2026</span>
          </div>
        </div>

        <div className="bg-stone-50 p-2.5 rounded-sm border border-stone-200 flex items-center gap-2">
          <Flower2 size={16} className="text-amber-600 shrink-0" />
          <div>
            <span className="text-[10px] text-stone-400 block font-semibold uppercase">Botanical Flora</span>
            <span className="font-bold text-stone-800 truncate">Mustard (Brassica)</span>
          </div>
        </div>

        <div className="bg-stone-50 p-2.5 rounded-sm border border-stone-200 flex items-center gap-2">
          <Users size={16} className="text-amber-600 shrink-0" />
          <div>
            <span className="text-[10px] text-stone-400 block font-semibold uppercase">Producer</span>
            <span className="font-bold text-stone-800">FPO Coop #42</span>
          </div>
        </div>
      </div>

      {/* NABL Lab Certificate Summary */}
      <div className="bg-white border-2 border-stone-900 rounded-sm p-3.5 shadow-2xs">
        <div className="flex items-center justify-between border-b border-emerald-100 pb-2 mb-2.5">
          <div className="flex items-center gap-1.5">
            <ShieldCheck size={16} className="text-emerald-600" />
            <span className="text-xs font-bold text-emerald-950">
              NABL ISO 17025 Chemical Analysis
            </span>
          </div>
          <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 rounded">
            Authentic Batch
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 text-[11px]">
          {labMetrics.map((m, i) => (
            <div key={i} className="flex items-center justify-between p-1.5 bg-stone-50 rounded-lg">
              <span className="text-stone-600 font-medium">{m.label}</span>
              <div className="flex items-center gap-1 font-mono font-bold text-emerald-700">
                <Check size={12} className="text-emerald-600 stroke-[3]" />
                <span>{m.val}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between text-[11px] pt-3 mt-2 border-t border-stone-100 font-medium">
          <a
            href="#lab-pdf"
            onClick={(e) => {
              e.preventDefault()
              alert('NABL ISO 17025 Certificate SHA-256: 0x99e2e504f1837bbca1... Anchored on Polygon.')
            }}
            className="flex items-center gap-1 text-stone-600 hover:text-amber-700"
          >
            <FileText size={13} />
            <span>View Full Lab PDF</span>
          </a>
          <a
            href="https://amoy.polygonscan.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-blue-600 hover:underline"
          >
            <span>Verify on PolygonScan</span>
            <ExternalLink size={12} />
          </a>
        </div>
      </div>

      {/* Foil Instruction Alert */}
      <div className="bg-amber-50 border-2 border-stone-900 p-3 rounded-sm flex items-start gap-2.5 text-xs text-amber-950">
        <Info size={16} className="text-amber-700 shrink-0 mt-0.5" />
        <p className="leading-snug">
          <strong>Dual-Layer Security:</strong> Outer QR displays public batch data. Scratch the silver foil on your jar label to reveal your unique 6-digit PIN and claim ownership.
        </p>
      </div>

      <button
        onClick={onNext}
        className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 font-bold py-3 px-4 rounded-sm text-sm flex items-center justify-center gap-2 shadow-[2px_2px_0px_#1C1917] transition-all hover:scale-101 active:scale-98"
      >
        <Lock size={16} />
        <span>SCRATCH & ENTER PIN</span>
      </button>
    </div>
  )
}
