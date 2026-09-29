import React, { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Activity, Thermometer, Droplets, ArrowRight, ShieldCheck, AlertTriangle } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, ReferenceLine } from 'recharts'

export default function HiveMonitoring() {
  const { hiveId } = useParams()
  const navigate = useNavigate()
  
  // State to simulate the demo weight drop
  const [demoState, setDemoState] = useState('stable') // 'stable' | 'candidate'
  
  // Generate stable mock data for the last 24 hours
  const generateStableData = () => {
    const data = []
    let currentWeight = 44.5
    for (let i = 0; i < 24; i++) {
      // Fluctuate slightly
      currentWeight += (Math.random() - 0.5) * 0.2
      data.push({
        time: `${i}:00`,
        weight: Number(currentWeight.toFixed(2))
      })
    }
    return data
  }
  
  // Generate candidate mock data (sudden drop at the end)
  const generateCandidateData = () => {
    const data = generateStableData()
    // The last 4 hours show a sudden drop representing an extraction
    for (let i = 20; i < 24; i++) {
      data[i].weight = data[i-1].weight - (i === 20 ? 3.5 : (Math.random() * 0.1))
      data[i].weight = Number(data[i].weight.toFixed(2))
    }
    return data
  }

  const [chartData, setChartData] = useState(generateStableData())

  const triggerWeightDrop = () => {
    setChartData(generateCandidateData())
    setDemoState('candidate')
  }

  return (
    <main className="min-h-screen pb-20 pt-16 bg-[#FAF8F5]">
      {/* Header */}
      <div className="bg-white border-b border-stone-200 mb-8">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-2xl font-bold text-stone-900" style={{ fontFamily: 'IBM Plex Sans' }}>
                HIVE {hiveId || 'H01'}
              </h1>
              {demoState === 'stable' ? (
                <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full px-2 py-0.5 text-xs font-semibold">
                  <ShieldCheck size={12} /> Stable
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 bg-orange-50 text-orange-700 border border-orange-200 rounded-full px-2 py-0.5 text-xs font-semibold">
                  <AlertTriangle size={12} /> Harvest Candidate
                </span>
              )}
            </div>
            <p className="text-stone-500 text-sm">
              Device: <span className="font-mono font-semibold text-stone-900">ESP32-S3-{hiveId || 'H01'}</span>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-xs text-stone-400 uppercase tracking-wide font-semibold mb-1">Status</p>
              <p className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-sm border border-emerald-100">
                ● ONLINE
              </p>
            </div>
            {/* Demo Control Button */}
            {demoState === 'stable' && (
              <button 
                onClick={triggerWeightDrop}
                className="bg-stone-900 hover:bg-stone-800 text-white font-bold px-4 py-2 border border-stone-200 shadow-md shadow-amber-900/10 hover:-translate-y-px transition-all duration-200 text-sm"
              >
                Simulate Weight Drop
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Main Graph Area */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Candidate Alert Banner */}
          {demoState === 'candidate' && (
            <div className="bg-amber-50 border-2 border-amber-500 p-6 shadow-md shadow-amber-900/10 animate-in fade-in slide-in-from-top-4 duration-500">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-amber-700 mb-1 flex items-center gap-2">
                    <AlertTriangle size={20} />
                    Harvest Point Reached
                  </h2>
                  <p className="text-amber-700 text-sm font-medium">
                    A stable weight drop signals a potential extraction event.
                  </p>
                </div>
                <button 
                  onClick={() => navigate('/demo/harvest-candidates/CAND-01')}
                  className="whitespace-nowrap bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold px-5 py-2.5 border border-stone-200 shadow-md shadow-stone-900/5 hover:shadow-lg shadow-stone-900/5 hover:-translate-y-px transition-all duration-200 text-sm flex items-center gap-2"
                >
                  Review Candidate <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          <div className="bg-white border border-stone-200 p-6 shadow-md shadow-stone-900/5">
            <h2 className="text-lg font-bold text-stone-900 mb-6">Hive Weight — Last 24 Hours</h2>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                  <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#78716C' }} />
                  <YAxis domain={['dataMin - 1', 'dataMax + 1']} axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#78716C' }} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1C1917', borderColor: '#1C1917', color: '#fff', borderRadius: '4px', fontSize: '12px' }}
                    itemStyle={{ color: '#FBBF24' }}
                  />
                  {demoState === 'candidate' && (
                    <ReferenceLine x="20:00" stroke="#F59E0B" strokeDasharray="3 3" label={{ position: 'top', value: 'Drop Detected', fill: '#D97706', fontSize: 12, fontWeight: 'bold' }} />
                  )}
                  <Line type="monotone" dataKey="weight" stroke="#1C1917" strokeWidth={3} dot={false} activeDot={{ r: 6, fill: '#F59E0B', stroke: '#1C1917', strokeWidth: 2 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Current Stats */}
          <div className="bg-white border border-stone-200 p-6 shadow-md shadow-stone-900/5">
            <h3 className="text-sm font-bold text-stone-500 uppercase tracking-wide mb-4">Current Readings</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-stone-100">
                <span className="text-stone-600 font-semibold flex items-center gap-2"><Activity size={16}/> Weight</span>
                <span className="font-mono text-lg font-bold text-stone-900">{chartData[23].weight} kg</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-stone-100">
                <span className="text-stone-600 font-semibold flex items-center gap-2"><Thermometer size={16}/> Temperature</span>
                <span className="font-mono text-sm text-stone-900">31.2°C</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-stone-600 font-semibold flex items-center gap-2"><Droplets size={16}/> Humidity</span>
                <span className="font-mono text-sm text-stone-900">70%</span>
              </div>
            </div>
          </div>

          {/* Technical Evidence */}
          <div className="bg-stone-900 text-stone-100 border border-stone-200 p-6 shadow-md shadow-stone-900/5">
            <h3 className="text-sm font-bold text-amber-700 uppercase tracking-wide mb-4">Device Evidence</h3>
            <div className="space-y-3 font-mono text-xs">
              <div className="flex justify-between">
                <span className="text-stone-400">Device</span>
                <span>ESP32-S3-H01</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Timestamp</span>
                <span>{new Date().toISOString().slice(0, 19).replace('T', ' ')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Signature</span>
                <span className="text-emerald-400">VALID</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Nonce</span>
                <span>48291</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Payload</span>
                <span className="text-emerald-400">VERIFIED</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-stone-800">
              <p className="text-[10px] text-stone-500 font-sans">
                Ed25519 hardware signature verified on edge payload.
              </p>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}
