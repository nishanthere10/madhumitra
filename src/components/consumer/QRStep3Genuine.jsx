import React from 'react'
import { ShieldCheck, Link2, CheckCircle2, Users, RefreshCw } from 'lucide-react'

export default function QRStep3Genuine({ onReset }) {
  return (
    <div className="space-y-4">
      <div className="bg-emerald-50 border-2 border-emerald-400 rounded-sm p-5 text-center shadow-[2px_2px_0px_#1C1917]">
        <div className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto mb-3 shadow-[4px_4px_0px_#1C1917]">
          <ShieldCheck size={32} />
        </div>
        <h4 className="text-xl font-black text-emerald-950 font-sans">
          AUTHENTIC HONEY VERIFIED
        </h4>
        <p className="text-xs font-medium text-emerald-800 mt-1">
          Cryptographically authenticated against Polygon Amoy Registry
        </p>
      </div>

      <div className="bg-white border border-stone-200 rounded-sm p-4 shadow-2xs space-y-2.5 text-xs">
        <div className="flex justify-between items-center pb-2 border-b border-stone-100">
          <span className="text-stone-500 font-medium">Jar Serial ID</span>
          <span className="font-mono font-bold text-stone-900">JAR-018-A-1247</span>
        </div>

        <div className="flex justify-between items-center pb-2 border-b border-stone-100">
          <span className="text-stone-500 font-medium">Nonce Status</span>
          <span className="inline-flex items-center gap-1 font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-[11px]">
            <CheckCircle2 size={12} />
            <span>VALID (Burned Now)</span>
          </span>
        </div>

        <div className="flex justify-between items-center pb-2 border-b border-stone-100">
          <span className="text-stone-500 font-medium">Scan Count</span>
          <span className="font-bold text-stone-900">1 of 1 (First ever scan)</span>
        </div>

        <div className="flex justify-between items-center pb-2 border-b border-stone-100">
          <span className="text-stone-500 font-medium">Timestamp</span>
          <span className="text-stone-700">25 Sep 2026, 3:14 PM IST</span>
        </div>

        <div className="flex justify-between items-center pb-2 border-b border-stone-100 font-mono">
          <span className="text-stone-500 text-[11px]">Polygon Tx</span>
          <a
            href="https://amoy.polygonscan.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-blue-600 hover:underline text-[11px]"
          >
            <Link2 size={12} />
            <span>0x7c12...44aa</span>
          </a>
        </div>
      </div>

      <div className="bg-amber-50/70 border-2 border-stone-900 rounded-sm p-4 space-y-2 text-xs">
        <div className="flex items-center gap-2 text-amber-900 font-bold">
          <Users size={16} className="text-amber-700" />
          <span>FPO Cooperative #42 · Sundarbans Cluster</span>
        </div>
        <div className="grid grid-cols-2 gap-2 pt-1 text-[11px]">
          <div className="bg-white/80 p-2 rounded-lg border border-amber-100">
            <span className="text-stone-400 block uppercase text-[9px] font-bold">Colony Health</span>
            <span className="font-extrabold text-stone-900 font-mono">94 / 100</span>
          </div>
          <div className="bg-white/80 p-2 rounded-lg border border-amber-100">
            <span className="text-stone-400 block uppercase text-[9px] font-bold">Harvest Window</span>
            <span className="font-bold text-stone-900">Mustard Flow 2026</span>
          </div>
        </div>
      </div>

      <button
        onClick={onReset}
        className="w-full text-center text-xs text-stone-600 hover:text-stone-900 font-semibold flex items-center justify-center gap-1 pt-1"
      >
        <RefreshCw size={13} />
        <span>Scan another jar demo</span>
      </button>
    </div>
  )
}
