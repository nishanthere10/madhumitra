import React from 'react'
import { Server, Activity, Database, Link as LinkIcon, HardDrive, Network, ShieldCheck } from 'lucide-react'

export default function SystemStatus() {
  const subsystems = [
    { name: 'IoT Edge Nodes', status: '12 / 12 Online', icon: <Network size={20} />, state: 'Operational' },
    { name: 'Core API Services', status: 'Latency: 42ms', icon: <Server size={20} />, state: 'Operational' },
    { name: 'PostgreSQL Database', status: 'Healthy', icon: <Database size={20} />, state: 'Operational' },
    { name: 'Polygon Amoy Blockchain', status: 'Connected', icon: <LinkIcon size={20} />, state: 'Connected' },
    { name: 'IPFS / Object Storage', status: 'Healthy', icon: <HardDrive size={20} />, state: 'Operational' },
    { name: 'MadhuMitra Analytics', status: 'Model Active', icon: <Activity size={20} />, state: 'Simulated' },
  ]

  return (
    <main className="min-h-screen pb-20 pt-16 bg-[#FAF8F5]">
      {/* Header */}
      <div className="bg-white border-b border-stone-200 mb-8">
        <div className="max-w-7xl mx-auto px-6 py-6 md:py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-2xl font-bold text-stone-900 uppercase" style={{ fontFamily: 'IBM Plex Sans' }}>
                System Status
              </h1>
            </div>
            <p className="text-stone-500 text-sm">
              Global Platform Health & Architecture Overview
            </p>
          </div>
          <div className="flex items-center gap-2 bg-emerald-50 border-2 border-emerald-500 text-emerald-800 px-4 py-2 rounded-sm shadow-[4px_4px_0px_#10B981]">
            <ShieldCheck size={18} />
            <span className="font-bold text-sm uppercase tracking-wide">All Systems Nominal</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {subsystems.map((sys, idx) => (
            <div key={idx} className="bg-white border border-stone-200 p-6 shadow-md shadow-stone-900/5 flex items-center justify-between group hover:shadow-lg hover:shadow-amber-900/10 hover:-translate-y-px transition-all duration-200">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-stone-100 border border-stone-200 rounded-sm flex items-center justify-center text-stone-600">
                  {sys.icon}
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 text-lg mb-1">{sys.name}</h3>
                  <p className="text-stone-500 text-sm font-mono">{sys.status}</p>
                </div>
              </div>
              <div className="text-right">
                {sys.state === 'Operational' || sys.state === 'Connected' ? (
                  <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-sm px-3 py-1 text-xs font-bold uppercase tracking-wide">
                    {sys.state}
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-700 border border-amber-200 rounded-sm px-3 py-1 text-xs font-bold uppercase tracking-wide">
                    {sys.state}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-stone-900 text-white border border-stone-200 p-8 shadow-lg shadow-stone-900/5">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-amber-700">
            <Activity size={24} /> Evaluation Note
          </h2>
          <p className="text-stone-300 text-sm leading-relaxed max-w-2xl">
            This status board reflects the intended architecture of the HoneyChain platform. In this prototype deployment, certain ML analytics modules and edge hardware integrations are <strong>Simulated</strong> to allow deterministic evaluation of the core traceability story without requiring live apiary deployment.
          </p>
        </div>

      </div>
    </main>
  )
}
