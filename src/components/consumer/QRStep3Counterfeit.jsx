import React from 'react'
import { ShieldX, CalendarDays, MapPin, Phone, Download, RefreshCw, AlertTriangle } from 'lucide-react'

export default function QRStep3Counterfeit({ onReset }) {
  return (
    <div className="space-y-4">
      <div className="bg-red-50 border-2 border-red-500 rounded-sm p-5 text-center shadow-sm shadow-stone-900/5">
        <div className="w-14 h-14 rounded-full bg-red-600 text-white flex items-center justify-center mx-auto mb-3 shadow-md shadow-stone-900/5 animate-pulse">
          <ShieldX size={32} />
        </div>
        <h4 className="text-xl font-black text-red-950 font-sans">
          COUNTERFEIT ALERT
        </h4>
        <p className="text-xs font-bold text-red-700 mt-1">
          Duplicate Nonce Detected — Possible Xerox Attack
        </p>
      </div>

      <div className="bg-white border border-stone-200 rounded-sm p-4 shadow-2xs space-y-2.5 text-xs">
        <div className="flex items-center gap-2 pb-2 border-b border-stone-100 text-red-700 font-bold">
          <AlertTriangle size={15} />
          <span>Original Nonce Was Already Claimed</span>
        </div>

        <div className="flex items-center justify-between text-stone-600 pb-2 border-b border-stone-100">
          <div className="flex items-center gap-1.5">
            <CalendarDays size={14} className="text-stone-400" />
            <span>Original Claim Date:</span>
          </div>
          <span className="font-bold text-stone-900">18 Sep 2026, 10:42 AM</span>
        </div>

        <div className="flex items-center justify-between text-stone-600 pb-2 border-b border-stone-100">
          <div className="flex items-center gap-1.5">
            <MapPin size={14} className="text-stone-400" />
            <span>Original Claim City:</span>
          </div>
          <span className="font-bold text-stone-900">Mumbai, Maharashtra</span>
        </div>

        <div className="bg-red-50/70 p-3 rounded-sm border border-stone-200 text-stone-800 leading-snug">
          <strong>The Xerox Attack:</strong> A counterfeit manufacturer photocopied the static outer label and guessed/stole a previously redeemed PIN. Do NOT consume this honey.
        </div>
      </div>

      <div className="space-y-2">
        <button
          onClick={() => alert('FSSAI Grievance Form Opened: Auto-populated with Nonce hash and Merchant GPS.')}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-sm text-xs flex items-center justify-center gap-2 shadow-sm shadow-stone-900/5 transition-colors"
        >
          <Phone size={15} />
          <span>REPORT TO FSSAI ENFORCEMENT</span>
        </button>

        <button
          onClick={() => alert('Downloading Cryptographic Evidence PDF Certificate for consumer dispute.')}
          className="w-full bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold py-2.5 px-4 rounded-sm text-xs flex items-center justify-center gap-2 transition-colors"
        >
          <Download size={14} />
          <span>Download Tamper Evidence PDF</span>
        </button>
      </div>

      <button
        onClick={onReset}
        className="w-full text-center text-xs text-stone-600 hover:text-stone-900 font-semibold flex items-center justify-center gap-1 pt-1"
      >
        <RefreshCw size={13} />
        <span>Return to QR Scanner Demo</span>
      </button>
    </div>
  )
}
