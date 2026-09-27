import React, { useState } from 'react'
import { Scale, Thermometer, Volume2, BarChart2, CheckCircle2, XCircle, Link2, Clock } from 'lucide-react'

export default function HarvestTab() {
  const [confirmed, setConfirmed] = useState(false)
  const [signing, setSigning] = useState(false)

  const handleConfirm = () => {
    setSigning(true)
    setTimeout(() => {
      setSigning(false)
      setConfirmed(true)
    }, 600)
  }

  const handleReset = () => {
    setConfirmed(false)
  }

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="border-b border-stone-200 pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-amber-100 text-amber-800">
              <Scale size={18} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-stone-900 font-sans">
                Hive #07 — Harvest Candidate
              </h4>
              <p className="text-[11px] text-stone-500">Extraction Event Detected</p>
            </div>
          </div>
          <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded">
            Pending Sig
          </span>
        </div>
      </div>

      {!confirmed ? (
        <div className="space-y-3.5">
          {/* Physical Readings Grid */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-stone-50 p-2.5 rounded-sm border border-stone-200">
              <span className="text-stone-400 block text-[10px] font-semibold uppercase">Net Mass Change</span>
              <span className="text-base font-bold text-stone-900 font-sans">-4.2 kg</span>
              <span className="text-[10px] text-stone-500 block">02:14 – 05:47 AM</span>
            </div>

            <div className="bg-stone-50 p-2.5 rounded-sm border border-stone-200">
              <span className="text-stone-400 block text-[10px] font-semibold uppercase">Brood Nest Temp</span>
              <div className="flex items-center gap-1 mt-0.5">
                <Thermometer size={14} className="text-amber-600" />
                <span className="text-sm font-bold text-stone-900">33.2°C → 34.8°C</span>
              </div>
              <span className="text-[10px] text-emerald-600 font-medium">Thermal Stability OK</span>
            </div>

            <div className="bg-stone-50 p-2.5 rounded-sm border border-stone-200 col-span-2">
              <span className="text-stone-400 block text-[10px] font-semibold uppercase">Acoustic MEMS Signature</span>
              <div className="flex items-center justify-between mt-1">
                <div className="flex items-center gap-1.5">
                  <Volume2 size={15} className="text-stone-600" />
                  <span className="text-xs font-bold text-stone-800">62 dB @ 230 Hz fundamental</span>
                </div>
                <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  No Swarming Buzz
                </span>
              </div>
            </div>
          </div>

          {/* Plausibility Score */}
          <div className="bg-amber-50/80 border-2 border-stone-900 p-3.5 rounded-sm">
            <div className="flex justify-between items-center mb-1">
              <div className="flex items-center gap-1 text-xs font-bold text-stone-800">
                <BarChart2 size={15} className="text-amber-700" />
                <span>Harvest Plausibility Score</span>
              </div>
              <span className="text-xs font-extrabold text-amber-800 font-mono">0.94 / 1.00</span>
            </div>
            {/* Filled bar */}
            <div className="w-full bg-amber-200/80 rounded-full h-2.5 overflow-hidden my-1.5">
              <div className="bg-amber-500 h-full rounded-full w-[94%]"></div>
            </div>
            <p className="text-[11px] text-amber-900 font-medium leading-tight">
              High confidence — natural manual frame extraction event validated against isolation forest model.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 pt-1">
            <button
              onClick={handleConfirm}
              disabled={signing}
              className="flex-1 bg-amber-500 hover:bg-amber-600 active:scale-98 text-stone-950 font-bold py-2.5 px-3 rounded-sm text-xs flex items-center justify-center gap-1.5 shadow-[2px_2px_0px_#1C1917] transition-all"
            >
              <CheckCircle2 size={16} />
              <span>{signing ? 'Signing (~20ms)...' : 'CONFIRM HARVEST'}</span>
            </button>
            <button
              onClick={handleReset}
              className="bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold py-2.5 px-3 rounded-sm text-xs flex items-center justify-center gap-1 transition-colors"
            >
              <XCircle size={15} />
              <span>DISMISS</span>
            </button>
          </div>
        </div>
      ) : (
        /* Success State */
        <div className="bg-emerald-50 border-2 border-stone-900 rounded-sm p-5 text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-[2px_2px_0px_#1C1917]">
            <CheckCircle2 size={28} />
          </div>
          <div>
            <h4 className="text-base font-bold text-emerald-950 font-sans">
              Harvest Recorded On-Chain
            </h4>
            <p className="text-xs font-mono font-bold text-emerald-800 mt-0.5">
              LOT-2026-SUN-0047
            </p>
          </div>

          <div className="bg-white p-3 rounded-sm border-2 border-stone-900 text-left text-xs space-y-1.5 font-mono">
            <div className="flex items-center justify-between text-stone-500 text-[10px]">
              <span>Polygon Amoy Tx</span>
              <span className="text-emerald-700 font-bold">Confirmed</span>
            </div>
            <div className="flex items-center gap-1 text-blue-600 truncate text-[11px]">
              <Link2 size={13} className="shrink-0" />
              <span className="truncate">0x4a8fb210e7498c0bdfa3381...</span>
            </div>
            <div className="flex items-center gap-1 text-stone-600 text-[10px] pt-1 border-t border-stone-100">
              <Clock size={12} className="text-amber-600 shrink-0" />
              <span>Signed in ~20 ms via Mbed TLS ECDSA</span>
            </div>
          </div>

          <button
            onClick={handleReset}
            className="text-xs text-stone-600 hover:text-stone-900 underline font-medium pt-1"
          >
            Record another test event
          </button>
        </div>
      )}
    </div>
  )
}
