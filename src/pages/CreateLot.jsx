import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { PlusCircle, Box, Calendar, User, Hash, CheckCircle2 } from 'lucide-react'

export default function CreateLot() {
  const navigate = useNavigate()
  const [isCreating, setIsCreating] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  
  const lotId = 'HC-H01-20260929-001'
  const [loadingText, setLoadingText] = useState('')

  const handleCreate = (e) => {
    e.preventDefault()
    setIsCreating(true)
    setLoadingText('Hashing Payload...')
    
    setTimeout(() => {
      setLoadingText('Awaiting Polygon Network...')
    }, 600)

    setTimeout(() => {
      setLoadingText('Minting Immutable Lot...')
    }, 1400)

    setTimeout(() => {
      setIsCreating(false)
      setIsSuccess(true)
    }, 2200)
  }

  if (isSuccess) {
    return (
      <main className="min-h-screen pb-20 pt-24 bg-[#FAF8F5] flex flex-col items-center">
        <div className="bg-white border border-stone-200 p-8 shadow-lg shadow-stone-900/5 max-w-lg w-full text-center">
          <div className="w-16 h-16 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="text-emerald-600" size={32} />
          </div>
          <h2 className="text-2xl font-bold text-stone-900 mb-2">RAW HONEY LOT CREATED</h2>
          <div className="w-12 h-1 bg-emerald-500 mx-auto mb-6" />
          
          <div className="bg-stone-50 border border-stone-200 rounded-sm p-4 text-left space-y-3 mb-8">
            <div className="flex justify-between items-center pb-2 border-b border-stone-200">
              <span className="text-xs text-stone-500 font-bold uppercase tracking-wide">Lot ID</span>
              <span className="font-mono text-sm font-bold text-stone-900">{lotId}</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-stone-200">
              <span className="text-xs text-stone-500 font-bold uppercase tracking-wide">Source Hive</span>
              <span className="font-mono text-sm text-stone-900">H01</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-stone-200">
              <span className="text-xs text-stone-500 font-bold uppercase tracking-wide">Harvest Quantity</span>
              <span className="font-mono text-sm font-bold text-stone-900">3.81 kg</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-stone-500 font-bold uppercase tracking-wide">Status</span>
              <span className="font-mono text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-sm border border-emerald-100">RECORDED</span>
            </div>
          </div>

          <p className="text-sm text-stone-600 mb-6 font-medium bg-amber-50 p-3 border border-amber-200 text-left">
            A physical extraction event is now officially represented as a traceable digital lot.
          </p>

          <button 
            onClick={() => navigate(`/demo/traceability/${lotId}`)}
            className="w-full bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold px-6 py-3 border border-stone-200 shadow-md shadow-stone-900/5 hover:shadow-lg shadow-stone-900/5 hover:-translate-y-px transition-all duration-200"
          >
            View Lot Genealogy →
          </button>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen pb-20 pt-16 bg-[#FAF8F5]">
      {/* Header */}
      <div className="bg-white border-b border-stone-200 mb-8">
        <div className="max-w-7xl mx-auto px-6 py-6 md:py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-2xl font-bold text-stone-900" style={{ fontFamily: 'IBM Plex Sans' }}>
                CREATE RAW HONEY LOT
              </h1>
              <span className="bg-amber-100 text-amber-700 border-2 border-amber-200 px-2 py-0.5 text-xs font-bold uppercase tracking-wide">
                Demo Data
              </span>
            </div>
          </div>
          <Link to="/demo/dashboard" className="text-sm font-semibold text-stone-500 hover:text-stone-900">
            ← Cancel
          </Link>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6">
        <form onSubmit={handleCreate} className="bg-white border border-stone-200 p-6 md:p-8 shadow-md shadow-stone-900/5">
          
          <div className="mb-6 flex items-center justify-between p-4 bg-amber-50 border border-amber-200 rounded-sm">
            <span className="text-amber-800 font-semibold text-sm">Target Identity</span>
            <span className="font-mono text-amber-900 font-bold text-lg">{lotId}</span>
          </div>

          <div className="space-y-5 mb-8">
            <div>
              <label className="block text-xs font-bold text-stone-500 uppercase tracking-wide mb-2 flex items-center gap-2">
                <Box size={14}/> Source Hive
              </label>
              <input 
                type="text" 
                value="H01" 
                disabled 
                className="w-full bg-stone-50 border border-stone-300 rounded-sm px-4 py-2.5 text-stone-900 font-mono text-sm cursor-not-allowed"
              />
            </div>
            
            <div>
              <label className="block text-xs font-bold text-stone-500 uppercase tracking-wide mb-2 flex items-center gap-2">
                <Calendar size={14}/> Harvest Time
              </label>
              <input 
                type="text" 
                value="29 Sep 2026 · 12:31 PM" 
                disabled 
                className="w-full bg-stone-50 border border-stone-300 rounded-sm px-4 py-2.5 text-stone-900 font-mono text-sm cursor-not-allowed"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-500 uppercase tracking-wide mb-2 flex items-center gap-2">
                <Hash size={14}/> Measured Harvest Quantity
              </label>
              <div className="relative">
                <input 
                  type="text" 
                  value="3.81" 
                  disabled 
                  className="w-full bg-stone-50 border border-stone-300 rounded-sm px-4 py-2.5 text-stone-900 font-mono font-bold text-lg cursor-not-allowed"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-500 font-bold">kg</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-500 uppercase tracking-wide mb-2 flex items-center gap-2">
                <User size={14}/> Operator
              </label>
              <input 
                type="text" 
                value="Beekeeper-01" 
                disabled 
                className="w-full bg-stone-50 border border-stone-300 rounded-sm px-4 py-2.5 text-stone-900 font-mono text-sm cursor-not-allowed"
              />
            </div>
          </div>

          <button 
            type="submit"
            disabled={isCreating}
            className="w-full bg-stone-900 hover:bg-stone-800 text-white font-bold px-6 py-4 shadow-md shadow-amber-900/10 hover:-translate-y-px transition-all duration-200 text-base disabled:opacity-70 disabled:cursor-wait flex justify-center items-center gap-2"
          >
            <PlusCircle size={20} />
            {isCreating ? loadingText : 'Create Lot Record'}
          </button>
        </form>
      </div>
    </main>
  )
}
