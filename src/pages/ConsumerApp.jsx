import React, { useState } from 'react'
import {
  ShieldCheck,
  QrCode,
  KeyRound,
  ToggleLeft,
  ToggleRight,
  Sparkles,
} from 'lucide-react'
import PageHero from '../components/shared/PageHero'
import QRStep1 from '../components/consumer/QRStep1'
import QRStep2 from '../components/consumer/QRStep2'
import QRStep3Genuine from '../components/consumer/QRStep3Genuine'
import QRStep3Counterfeit from '../components/consumer/QRStep3Counterfeit'

export default function ConsumerApp() {
  const [step, setStep] = useState(1)
  const [isCounterfeitMode, setIsCounterfeitMode] = useState(false)

  return (
    <main className="min-h-screen pb-20 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <img src="/images/bg2.svg" className="absolute top-64 -left-24 w-80 opacity-10 pointer-events-none transform -rotate-12" alt="" />
      <img src="/images/bg3.svg" className="absolute top-1/2 -right-32 w-96 opacity-10 pointer-events-none transform rotate-12" alt="" />
      <PageHero
        icon={ShieldCheck}
        badgeText="Dual-Layer Anti-Clone QR"
        title="Consumer Honey Verification"
        subtitle="Scan. Scratch. Verify. In under 3 seconds. No app download needed."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        {/* Demo Mode Toggle Card */}
        <div className="bg-white border border-stone-200 rounded-sm p-4 mb-8 shadow-sm shadow-stone-900/5 flex flex-col sm:flex-row justify-between items-center gap-4 max-w-4xl mx-auto">
          <div>
            <span className="text-xs font-bold text-amber-900 uppercase tracking-wider block">
              SIH Presentation Demo Mode
            </span>
            <p className="text-xs text-stone-600">
              Toggle between verifying a genuine honey jar and intercepting a photocopied counterfeit.
            </p>
          </div>

          <button
            onClick={() => setIsCounterfeitMode(!isCounterfeitMode)}
            className={`flex items-center gap-2.5 px-4 py-2 rounded-sm text-xs font-bold transition-all ${
              isCounterfeitMode
                ? 'bg-red-50 text-red-700 border-2 border-red-400'
                : 'bg-emerald-50 text-emerald-700 border-2 border-emerald-400'
            }`}
          >
            {isCounterfeitMode ? (
              <>
                <ToggleRight size={22} className="text-red-600" />
                <span>Simulating: COUNTERFEIT JAR</span>
              </>
            ) : (
              <>
                <ToggleLeft size={22} className="text-emerald-600" />
                <span>Simulating: GENUINE HONEY</span>
              </>
            )}
          </button>
        </div>

        {/* 2-Column Presentation: Left Product Shot + Right Phone Verification Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Real Physical Honey Jar & Dual QR Security Seal */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-sm overflow-hidden border-2 border-amber-200 shadow-md shadow-stone-900/5">
              <div className="relative h-72 sm:h-80 overflow-hidden bg-amber-50">
                <img
                  src="/images/honey_jar.jpg"
                  alt="Authentic 500g Glass Honey Jar with Dual QR Security Seal"
                  className="w-full h-full object-cover object-center hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-amber-500 text-stone-950 text-xs font-bold px-3 py-1 rounded-full shadow-md shadow-stone-900/5">
                  Physical Jar Security
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-stone-900 font-sans mb-2">
                  Dual-Layer Security Label
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed mb-4">
                  1. <strong>Outer QR (GS1 Digital Link):</strong> Publicly visible on jar. Directs consumer to batch provenance and NABL lab PDF.
                </p>
                <p className="text-xs text-stone-600 leading-relaxed">
                  2. <strong>Scratch-Off Foil PIN:</strong> Hidden under tamper-evident latex seal. Unique single-use nonce that burns on Polygon Amoy on first verification.
                </p>
              </div>
            </div>

            {/* NABL Lab Anchor Highlight */}
            <div className="bg-white rounded-sm p-4 border border-stone-200 flex items-center gap-3.5 shadow-2xs">
              <img
                src="/images/lab_testing.jpg"
                alt="NABL accredited laboratory testing honey purity"
                className="w-16 h-16 rounded-sm object-cover shrink-0"
              />
              <div className="text-xs">
                <span className="font-bold text-emerald-950 block font-sans">
                  NABL ISO 17025 Certified
                </span>
                <span className="text-stone-600 text-[11px] block mt-0.5">
                  NMR 99.4% Purity · Rice Syrup SMR Absent
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: 3-Step Wizard & Interactive Phone Screen */}
          <div className="lg:col-span-7">
            {/* Step Wizard Header */}
            <div className="flex items-center justify-between max-w-md mx-auto mb-8 text-xs font-bold">
              <div className="flex flex-col items-center gap-1.5">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                    step === 1
                      ? 'bg-amber-500 border-amber-600 text-stone-950 shadow-md shadow-stone-900/5 scale-105'
                      : step > 1
                      ? 'bg-emerald-500 border-emerald-600 text-white'
                      : 'bg-white border-stone-300 text-stone-400'
                  }`}
                >
                  <QrCode size={18} />
                </div>
                <span className={step === 1 ? 'text-amber-800' : 'text-stone-600'}>1. Scan QR</span>
              </div>

              <div className={`flex-1 h-0.5 mx-2 ${step > 1 ? 'bg-emerald-500' : 'bg-stone-200'}`}></div>

              <div className="flex flex-col items-center gap-1.5">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                    step === 2
                      ? 'bg-amber-500 border-amber-600 text-stone-950 shadow-md shadow-stone-900/5 scale-105'
                      : step > 2
                      ? 'bg-emerald-500 border-emerald-600 text-white'
                      : 'bg-white border-stone-300 text-stone-400'
                  }`}
                >
                  <KeyRound size={18} />
                </div>
                <span className={step === 2 ? 'text-amber-800' : 'text-stone-600'}>2. Enter PIN</span>
              </div>

              <div className={`flex-1 h-0.5 mx-2 ${step > 2 ? 'bg-emerald-500' : 'bg-stone-200'}`}></div>

              <div className="flex flex-col items-center gap-1.5">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                    step === 3
                      ? isCounterfeitMode
                        ? 'bg-red-500 border-red-600 text-white shadow-md shadow-stone-900/5 scale-105'
                        : 'bg-emerald-500 border-emerald-600 text-white shadow-md shadow-stone-900/5 scale-105'
                      : 'bg-white border-stone-300 text-stone-400'
                  }`}
                >
                  <ShieldCheck size={18} />
                </div>
                <span className={step === 3 ? 'text-amber-800' : 'text-stone-600'}>3. Result</span>
              </div>
            </div>

            {/* Phone Frame */}
            <div className="max-w-md mx-auto bg-stone-900 p-4 sm:p-5 rounded-[40px] shadow-xl shadow-stone-900/5 border border-stone-200">
              <div className="w-28 h-3.5 bg-stone-950 rounded-full mx-auto mb-3"></div>

              <div className="bg-[#FAF8F5] rounded-[28px] p-4 sm:p-5 border border-stone-200 min-h-[520px] flex flex-col justify-between shadow-[inset_4px_4px_0px_rgba(28,25,23,0.1)]">
                {step === 1 && <QRStep1 onNext={() => setStep(2)} />}
                {step === 2 && (
                  <QRStep2
                    onVerify={() => setStep(3)}
                    onBack={() => setStep(1)}
                  />
                )}
                {step === 3 && (
                  <>
                    {isCounterfeitMode ? (
                      <QRStep3Counterfeit onReset={() => setStep(1)} />
                    ) : (
                      <QRStep3Genuine onReset={() => setStep(1)} />
                    )}
                  </>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}
