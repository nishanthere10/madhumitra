import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Hexagon, Activity, Droplets, Box, Thermometer, ShieldCheck, AlertTriangle } from 'lucide-react'

export default function BeekeeperDashboard() {
  const [showEmptyState, setShowEmptyState] = useState(false)

  return (
    <main className="min-h-screen pb-20 pt-16 bg-[#FAF8F5]">
      {/* Header */}
      <div className="bg-white border-b border-stone-200 mb-8">
        <div className="max-w-7xl mx-auto px-6 py-6 md:py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-2xl md:text-3xl font-bold text-stone-900" style={{ fontFamily: 'IBM Plex Sans' }}>
                MADHUMITRA
              </h1>
              <span className="bg-amber-100 text-amber-700 border-2 border-amber-200 px-2 py-0.5 text-xs font-bold uppercase tracking-wide">
                Demo Data
              </span>
            </div>
            <p className="text-stone-500 text-sm">
              Apiary: <span className="font-semibold text-stone-900">Demo Farm (H01-H12)</span>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-end sm:items-center gap-4">
            <button 
              onClick={() => setShowEmptyState(!showEmptyState)} 
              className="text-sm font-semibold text-stone-700 bg-white border border-stone-200 hover:bg-stone-50 px-4 py-2 rounded-sm shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-amber-500 active:scale-95"
            >
              {showEmptyState ? 'Show Telemetry' : 'Mock Empty State'}
            </button>
            <div className="text-right flex flex-col items-end">
              <p className="text-xs text-stone-400 uppercase tracking-wide font-semibold mb-1">Last Sync</p>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-sm border border-amber-200" title="Data buffered via Edge Node">
                  OFFLINE BUFFER
                </span>
                <p className="text-sm font-mono text-stone-900 font-bold bg-stone-100 px-3 py-1 rounded-sm border border-stone-200">
                  {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          <div className="bg-white border border-stone-200 p-5 shadow-md shadow-stone-900/5 hover:shadow-lg hover:shadow-amber-900/10 hover:-translate-y-px transition-all duration-200">
            <div className="flex items-center gap-2 mb-2">
              <Hexagon className="text-amber-700" size={18} />
              <h3 className="text-stone-500 text-sm font-bold uppercase tracking-wide">Hives</h3>
            </div>
            <p className="text-3xl font-bold text-stone-900" style={{ fontFamily: 'IBM Plex Sans' }}>12</p>
          </div>
          
          <div className="bg-white border border-stone-200 p-5 shadow-md shadow-stone-900/5 hover:shadow-lg hover:shadow-amber-900/10 hover:-translate-y-px transition-all duration-200">
            <div className="flex items-center gap-2 mb-2">
              <Activity className="text-emerald-500" size={18} />
              <h3 className="text-stone-500 text-sm font-bold uppercase tracking-wide">Online</h3>
            </div>
            <p className="text-3xl font-bold text-stone-900" style={{ fontFamily: 'IBM Plex Sans' }}>
              10 <span className="text-lg text-stone-400">/ 12</span>
            </p>
          </div>

          <div className="bg-amber-50 border-2 border-amber-500 p-5 shadow-md shadow-amber-900/10 hover:-translate-y-px transition-all duration-200 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-amber-500" />
            <div className="flex items-center gap-2 mb-2">
              <Droplets className="text-amber-600" size={18} />
              <h3 className="text-amber-700 text-sm font-bold uppercase tracking-wide">Candidates</h3>
            </div>
            <p className="text-3xl font-bold text-amber-700" style={{ fontFamily: 'IBM Plex Sans' }}>1</p>
          </div>

          <div className="bg-white border border-stone-200 p-5 shadow-md shadow-stone-900/5 hover:shadow-lg hover:shadow-amber-900/10 hover:-translate-y-px transition-all duration-200">
            <div className="flex items-center gap-2 mb-2">
              <Box className="text-blue-500" size={18} />
              <h3 className="text-stone-500 text-sm font-bold uppercase tracking-wide">Active Lots</h3>
            </div>
            <p className="text-3xl font-bold text-stone-900" style={{ fontFamily: 'IBM Plex Sans' }}>7</p>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900" style={{ fontFamily: 'IBM Plex Sans' }}>
            Active Hive Telemetry
          </h2>
        </div>

        {showEmptyState ? (
          <div className="bg-white border border-stone-200 p-12 text-center flex flex-col items-center justify-center rounded-sm shadow-sm shadow-stone-900/5">
            <div className="w-20 h-20 bg-amber-50 border border-amber-200 rounded-full flex items-center justify-center mb-6">
              <Hexagon className="text-amber-500" size={32} />
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-2">No Hives Connected</h3>
            <p className="text-stone-500 max-w-md mx-auto mb-8">
              Your Sentinel Hives are currently offline or out of range. Tap below to sync telemetry directly from the field via Bluetooth.
            </p>
            <button className="bg-amber-500 hover:bg-amber-600 text-stone-900 font-bold px-6 py-3 border border-stone-200 shadow-md shadow-stone-900/5 transition-all flex items-center gap-2">
              Sync via Bluetooth
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Candidate Hive (H01) - Needs Action */}
          <div className="bg-white border-2 border-amber-500 p-6 shadow-md shadow-amber-900/10 flex flex-col h-full relative">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-amber-500" />
            <div className="flex justify-between items-start mb-6 mt-2">
              <div>
                <h3 className="text-xl font-bold text-stone-900 mb-1">HIVE H01</h3>
                <span className="inline-flex items-center gap-1 bg-orange-50 text-orange-700 border border-orange-200 rounded-full px-2 py-0.5 text-xs font-semibold">
                  <AlertTriangle size={12} /> Harvest Candidate
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs text-stone-500 block mb-1">ESP32-S3-H01</span>
                <span className="font-mono text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-sm">● ONLINE</span>
              </div>
            </div>

            <div className="space-y-4 mb-8 flex-grow">
              <div className="flex justify-between items-center bg-[#FAF8F5] p-3 border border-stone-200 rounded-sm">
                <span className="text-sm font-semibold text-stone-600 flex items-center gap-2">
                  <Activity size={16} /> Weight
                </span>
                <span className="font-mono text-lg font-bold text-stone-900">40.91 kg</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex justify-between items-center bg-[#FAF8F5] p-3 border border-stone-200 rounded-sm">
                  <span className="text-xs font-semibold text-stone-600 flex items-center gap-1">
                    <Thermometer size={14} /> Temp
                  </span>
                  <span className="font-mono text-sm text-stone-900">31.2°C</span>
                </div>
                <div className="flex justify-between items-center bg-[#FAF8F5] p-3 border border-stone-200 rounded-sm">
                  <span className="text-xs font-semibold text-stone-600 flex items-center gap-1">
                    <Droplets size={14} /> Hum
                  </span>
                  <span className="font-mono text-sm text-stone-900">70%</span>
                </div>
              </div>
            </div>

            <Link to="/demo/hives/H01" className="block text-center bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold px-4 py-3 border border-stone-200 shadow-md shadow-stone-900/5 hover:shadow-lg shadow-stone-900/5 hover:-translate-y-px transition-all duration-200 w-full text-sm">
              Review Candidate Event →
            </Link>
          </div>

          {/* Stable Hive (H02) */}
          <div className="bg-white border border-stone-200 p-6 shadow-md shadow-stone-900/5 flex flex-col h-full relative group">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-bold text-stone-900 mb-1">HIVE H02</h3>
                <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full px-2 py-0.5 text-xs font-semibold">
                  <ShieldCheck size={12} /> Stable
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs text-stone-500 block mb-1">ESP32-S3-H02</span>
                <span className="font-mono text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-sm">● ONLINE</span>
              </div>
            </div>

            <div className="space-y-4 mb-8 flex-grow">
              <div className="flex justify-between items-center bg-[#FAF8F5] p-3 border border-stone-200 rounded-sm">
                <span className="text-sm font-semibold text-stone-600 flex items-center gap-2">
                  <Activity size={16} /> Weight
                </span>
                <span className="font-mono text-lg font-bold text-stone-900">43.82 kg</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex justify-between items-center bg-[#FAF8F5] p-3 border border-stone-200 rounded-sm">
                  <span className="text-xs font-semibold text-stone-600 flex items-center gap-1">
                    <Thermometer size={14} /> Temp
                  </span>
                  <span className="font-mono text-sm text-stone-900">31.4°C</span>
                </div>
                <div className="flex justify-between items-center bg-[#FAF8F5] p-3 border border-stone-200 rounded-sm">
                  <span className="text-xs font-semibold text-stone-600 flex items-center gap-1">
                    <Droplets size={14} /> Hum
                  </span>
                  <span className="font-mono text-sm text-stone-900">71%</span>
                </div>
              </div>
            </div>

            <Link to="/demo/hives/H02" className="block text-center border border-stone-200 text-stone-900 hover:bg-stone-900 hover:text-white font-bold px-4 py-3 shadow-md shadow-stone-900/5 hover:shadow-lg shadow-stone-900/5 hover:-translate-y-px transition-all duration-200 w-full text-sm">
              Open Hive Telemetry
            </Link>
          </div>

          {/* Stable Hive (H03) */}
          <div className="bg-white border border-stone-200 p-6 shadow-md shadow-stone-900/5 flex flex-col h-full relative group">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-bold text-stone-900 mb-1">HIVE H03</h3>
                <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full px-2 py-0.5 text-xs font-semibold">
                  <ShieldCheck size={12} /> Stable
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs text-stone-500 block mb-1">ESP32-S3-H03</span>
                <span className="font-mono text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-sm">● ONLINE</span>
              </div>
            </div>

            <div className="space-y-4 mb-8 flex-grow">
              <div className="flex justify-between items-center bg-[#FAF8F5] p-3 border border-stone-200 rounded-sm">
                <span className="text-sm font-semibold text-stone-600 flex items-center gap-2">
                  <Activity size={16} /> Weight
                </span>
                <span className="font-mono text-lg font-bold text-stone-900">38.16 kg</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex justify-between items-center bg-[#FAF8F5] p-3 border border-stone-200 rounded-sm">
                  <span className="text-xs font-semibold text-stone-600 flex items-center gap-1">
                    <Thermometer size={14} /> Temp
                  </span>
                  <span className="font-mono text-sm text-stone-900">32.1°C</span>
                </div>
                <div className="flex justify-between items-center bg-[#FAF8F5] p-3 border border-stone-200 rounded-sm">
                  <span className="text-xs font-semibold text-stone-600 flex items-center gap-1">
                    <Droplets size={14} /> Hum
                  </span>
                  <span className="font-mono text-sm text-stone-900">74%</span>
                </div>
              </div>
            </div>

            <Link to="/demo/hives/H03" className="block text-center border border-stone-200 text-stone-900 hover:bg-stone-900 hover:text-white font-bold px-4 py-3 shadow-md shadow-stone-900/5 hover:shadow-lg shadow-stone-900/5 hover:-translate-y-px transition-all duration-200 w-full text-sm">
              Open Hive Telemetry
            </Link>
          </div>

        </div>
        )}
      </div>
    </main>
  )
}
