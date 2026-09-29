import React, { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Activity, Thermometer, Droplets, CheckCircle2, XCircle, AlertTriangle, Scale } from 'lucide-react'

export default function HarvestCandidate() {
  const { candidateId } = useParams()
  const navigate = useNavigate()
  const [isConfirming, setIsConfirming] = useState(false)

  const handleConfirm = () => {
    setIsConfirming(true)
    setTimeout(() => {
      // Simulate navigating to the lot creation or success state
      navigate('/demo/lots/create')
    }, 1500)
  }

  return (
    <main className="min-h-screen pb-20 pt-16 bg-[#FAF8F5]">
      {/* Header */}
      <div className="bg-white border-b border-stone-200 mb-8">
        <div className="max-w-7xl mx-auto px-6 py-6 md:py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-2xl font-bold text-stone-900" style={{ fontFamily: 'IBM Plex Sans' }}>
                HARVEST CANDIDATE
              </h1>
              <span className="bg-amber-100 text-amber-700 border-2 border-amber-200 px-2 py-0.5 text-xs font-bold uppercase tracking-wide">
                Demo Data
              </span>
            </div>
            <p className="text-stone-500 text-sm flex items-center gap-2">
              Candidate ID: <span className="font-mono font-semibold text-stone-900">{candidateId || 'HC-CAND-0001'}</span>
            </p>
          </div>
          <Link to="/demo/dashboard" className="text-sm font-semibold text-stone-500 hover:text-stone-900">
            ← Back to Dashboard
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6">
        
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-50 border-2 border-orange-200 rounded-full px-4 py-1.5 mb-4">
            <AlertTriangle className="text-orange-600" size={16} />
            <span className="text-orange-600 text-xs font-bold uppercase tracking-wide">
              Harvest Point Reached
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-3" style={{fontFamily: 'IBM Plex Sans'}}>
            Review Extraction Event
          </h2>
          <div className="w-12 h-1 bg-amber-500 mx-auto mb-4" />
          <p className="text-stone-500 text-lg">
            Candidate generated from the observed telemetry pattern. Final harvest confirmation remains with the beekeeper.
          </p>
        </div>

        {/* Evidence Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Metrics */}
          <div className="bg-white border border-stone-200 p-6 shadow-md shadow-stone-900/5">
            <h3 className="text-sm font-bold text-stone-500 uppercase tracking-wide mb-6">Physical Evidence</h3>
            
            <div className="space-y-6">
              <div>
                <p className="text-xs text-stone-500 mb-1 font-semibold uppercase tracking-wide">Hive ID</p>
                <p className="font-mono text-lg font-bold text-stone-900">H01</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-stone-500 mb-1 font-semibold uppercase tracking-wide">Previous Weight</p>
                  <p className="font-mono text-lg font-bold text-stone-900">44.72 kg</p>
                </div>
                <div>
                  <p className="text-xs text-stone-500 mb-1 font-semibold uppercase tracking-wide">Current Weight</p>
                  <p className="font-mono text-lg font-bold text-stone-900">40.91 kg</p>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 p-4 rounded-sm flex items-center justify-between">
                <span className="text-amber-700 font-bold uppercase tracking-wide text-sm flex items-center gap-2">
                  <Scale size={18} /> Weight Change
                </span>
                <span className="font-mono text-xl font-bold text-amber-700">−3.81 kg</span>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-stone-100">
                <div>
                  <p className="text-xs text-stone-500 mb-1 font-semibold uppercase tracking-wide">Temperature</p>
                  <p className="font-mono text-base font-bold text-stone-900">31.2°C</p>
                </div>
                <div>
                  <p className="text-xs text-stone-500 mb-1 font-semibold uppercase tracking-wide">Humidity</p>
                  <p className="font-mono text-base font-bold text-stone-900">70%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Validation Checks */}
          <div className="bg-white border border-stone-200 p-6 shadow-md shadow-stone-900/5 flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-bold text-stone-500 uppercase tracking-wide mb-6">Detection Checks</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-stone-600 font-semibold">Weight Pattern</span>
                  <CheckCircle2 className="text-emerald-500" size={20} />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-stone-600 font-semibold">Telemetry Signature</span>
                  <CheckCircle2 className="text-emerald-500" size={20} />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-stone-600 font-semibold">Hive Identity</span>
                  <CheckCircle2 className="text-emerald-500" size={20} />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-stone-600 font-semibold">Timestamp Sequence</span>
                  <CheckCircle2 className="text-emerald-500" size={20} />
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-100">
              <p className="text-xs text-stone-400 mb-2 font-mono">Event Time: {new Date().toISOString().slice(0, 19).replace('T', ' ')}</p>
              <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-sm">
                <p className="text-emerald-700 text-xs font-semibold">
                  All edge cryptographic signatures verified successfully. The data is authentic and unmanipulated.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Decision */}
        <div className="bg-white border border-stone-200 p-8 shadow-md shadow-stone-900/5 text-center">
          <h3 className="text-lg font-bold text-stone-900 mb-2">Final Decision</h3>
          <p className="text-stone-500 text-sm mb-6 max-w-md mx-auto">
            Please confirm that this physical weight drop corresponds to a legitimate honey extraction event.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={handleConfirm}
              disabled={isConfirming}
              className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold px-8 py-4 border border-stone-200 shadow-md shadow-stone-900/5 hover:shadow-lg shadow-stone-900/5 hover:-translate-y-px transition-all duration-200 text-base disabled:opacity-70 disabled:cursor-wait"
            >
              {isConfirming ? 'Processing...' : 'Confirm Harvest Event'}
            </button>
            <button 
              className="w-full sm:w-auto bg-white hover:bg-red-50 text-red-600 font-bold px-8 py-4 border-2 border-red-200 hover:border-red-600 transition-all duration-200 text-base flex items-center justify-center gap-2"
            >
              <XCircle size={18} /> Reject Candidate
            </button>
          </div>
        </div>

      </div>
    </main>
  )
}
