import React, { useState } from 'react'
import { KeyRound, ShieldCheck, ArrowLeft } from 'lucide-react'

export default function QRStep2({ onVerify, onBack }) {
  const [pin, setPin] = useState(['7', '3', '9', '2', '8', '1'])

  const handleDigitChange = (index, value) => {
    if (value.length > 1) value = value.slice(-1)
    const newPin = [...pin]
    newPin[index] = value
    setPin(newPin)
  }

  return (
    <div className="space-y-6 text-center py-2">
      <div className="w-14 h-14 rounded-sm bg-amber-100 text-amber-600 flex items-center justify-center mx-auto shadow-[2px_2px_0px_#1C1917]">
        <KeyRound size={28} />
      </div>

      <div>
        <h4 className="text-lg font-bold text-stone-900 font-sans">
          Enter Scratch-Off PIN
        </h4>
        <p className="text-xs text-stone-600 max-w-xs mx-auto mt-1 leading-snug">
          Gently scratch off the silver latex coating on your jar's neck seal to reveal the 6-digit cryptographic nonce.
        </p>
      </div>

      <div className="flex justify-center gap-2 sm:gap-3">
        {pin.map((digit, idx) => (
          <input
            key={idx}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleDigitChange(idx, e.target.value)}
            className="w-10 h-12 sm:w-12 sm:h-14 text-center text-xl sm:text-2xl font-black font-mono text-stone-900 bg-white border-2 border-amber-300 rounded-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200 shadow-2xs"
          />
        ))}
      </div>

      <div className="bg-amber-50/80 border-2 border-stone-900 rounded-sm p-3 text-[11px] text-amber-900 max-w-xs mx-auto">
        <span className="font-bold">Anti-Replay Mechanism:</span> Submitting this PIN permanently burns the nonce on Polygon. Once claimed, any subsequent scan of this jar flags an alert.
      </div>

      <div className="space-y-2 pt-2">
        <button
          onClick={onVerify}
          className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 font-bold py-3.5 px-4 rounded-sm text-sm flex items-center justify-center gap-2 shadow-[2px_2px_0px_#1C1917] transition-all hover:scale-101 active:scale-98"
        >
          <ShieldCheck size={18} />
          <span>VERIFY AUTHENTICITY</span>
        </button>

        <button
          onClick={onBack}
          className="text-xs text-stone-500 hover:text-stone-800 font-semibold flex items-center justify-center gap-1 mx-auto pt-2"
        >
          <ArrowLeft size={14} />
          <span>Back to batch details</span>
        </button>
      </div>
    </div>
  )
}
