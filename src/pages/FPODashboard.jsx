import React from 'react'
import { Link } from 'react-router-dom'
import { Hexagon, Box, FileText, CheckCircle2, Download, AlertTriangle, Users } from 'lucide-react'

export default function FPODashboard() {
  const lots = [
    { id: 'HC001', hive: 'H01', mass: '3.81 kg', lab: 'Pass', status: 'Verified' },
    { id: 'HC002', hive: 'H03', mass: '4.20 kg', lab: 'Pass', status: 'Verified' },
    { id: 'HC003', hive: 'H07', mass: 'Pending', lab: 'Pending', status: 'Review' },
    { id: 'HC004', hive: 'H09', mass: '3.95 kg', lab: 'Pass', status: 'Verified' },
    { id: 'HC005', hive: 'H12', mass: '4.10 kg', lab: 'Failed', status: 'Rejected' },
  ]

  return (
    <main className="min-h-screen pb-20 pt-16 bg-[#FAF8F5]">
      {/* Header */}
      <div className="bg-white border-b border-stone-200 mb-8">
        <div className="max-w-7xl mx-auto px-6 py-6 md:py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-2xl font-bold text-stone-900 uppercase" style={{ fontFamily: 'IBM Plex Sans' }}>
                FPO / Cooperative Dashboard
              </h1>
              <span className="bg-amber-100 text-amber-700 border-2 border-amber-200 px-2 py-0.5 text-xs font-bold uppercase tracking-wide">
                Demo Data
              </span>
            </div>
            <p className="text-stone-500 text-sm flex items-center gap-2">
              <Users size={16} /> Titwala Cooperative Society
            </p>
          </div>
          <button className="bg-stone-900 hover:bg-stone-800 text-white font-bold px-4 py-2 shadow-md shadow-amber-900/10 hover:-translate-y-px transition-all duration-200 text-sm flex items-center gap-2">
            <Download size={16} /> Export Evidence Package
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 mb-10">
          <div className="bg-white border border-stone-200 p-4 shadow-md shadow-stone-900/5">
            <h3 className="text-stone-500 text-xs font-bold uppercase tracking-wide mb-1">Managed Hives</h3>
            <p className="text-2xl font-bold text-stone-900">48</p>
          </div>
          <div className="bg-white border border-stone-200 p-4 shadow-md shadow-stone-900/5">
            <h3 className="text-stone-500 text-xs font-bold uppercase tracking-wide mb-1">Active Lots</h3>
            <p className="text-2xl font-bold text-stone-900">16</p>
          </div>
          <div className="bg-white border border-stone-200 p-4 shadow-md shadow-stone-900/5">
            <h3 className="text-stone-500 text-xs font-bold uppercase tracking-wide mb-1">Processing Batches</h3>
            <p className="text-2xl font-bold text-stone-900">7</p>
          </div>
          <div className="bg-white border border-stone-200 p-4 shadow-md shadow-stone-900/5">
            <h3 className="text-stone-500 text-xs font-bold uppercase tracking-wide mb-1">Lab Reports</h3>
            <p className="text-2xl font-bold text-stone-900">12</p>
          </div>
          <div className="bg-amber-50 border-2 border-amber-500 p-4 shadow-md shadow-amber-900/10">
            <h3 className="text-amber-800 text-xs font-bold uppercase tracking-wide mb-1">Pending Reviews</h3>
            <p className="text-2xl font-bold text-amber-700">2</p>
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-white border border-stone-200 shadow-lg shadow-stone-900/5 overflow-hidden">
          <div className="p-4 border-b border-stone-200 bg-stone-50 flex items-center justify-between">
            <h2 className="font-bold text-stone-900">Recent Harvest Lots</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-stone-50 border-b border-stone-200 text-xs uppercase tracking-wide text-stone-500">
                  <th className="p-4 font-bold border-r border-stone-200">Lot ID</th>
                  <th className="p-4 font-bold border-r border-stone-200">Source Hive</th>
                  <th className="p-4 font-bold border-r border-stone-200">Mass</th>
                  <th className="p-4 font-bold border-r border-stone-200">Lab Status</th>
                  <th className="p-4 font-bold">Overall Status</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {lots.map((lot, idx) => (
                  <tr key={idx} className="border-b border-stone-100 hover:bg-stone-50 transition-colors">
                    <td className="p-4 border-r border-stone-200 font-mono font-semibold text-stone-900">
                      {lot.status === 'Verified' ? (
                        <Link to="/demo/traceability/HC-H01-20260929-001" className="text-amber-600 hover:underline">{lot.id}</Link>
                      ) : (
                        lot.id
                      )}
                    </td>
                    <td className="p-4 border-r border-stone-200 text-stone-600 font-mono">{lot.hive}</td>
                    <td className="p-4 border-r border-stone-200 font-mono text-stone-900">{lot.mass}</td>
                    <td className="p-4 border-r border-stone-200">
                      {lot.lab === 'Pass' && <span className="inline-flex items-center gap-1 text-emerald-600 text-xs font-bold"><CheckCircle2 size={14}/> PASS</span>}
                      {lot.lab === 'Pending' && <span className="inline-flex items-center gap-1 text-amber-600 text-xs font-bold"><AlertTriangle size={14}/> PENDING</span>}
                      {lot.lab === 'Failed' && <span className="inline-flex items-center gap-1 text-red-600 text-xs font-bold"><AlertTriangle size={14}/> FAILED</span>}
                    </td>
                    <td className="p-4">
                      {lot.status === 'Verified' && <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-sm px-2 py-1 text-xs font-bold uppercase">Verified</span>}
                      {lot.status === 'Review' && <span className="bg-orange-50 text-orange-700 border border-orange-200 rounded-sm px-2 py-1 text-xs font-bold uppercase">Review</span>}
                      {lot.status === 'Rejected' && <span className="bg-red-50 text-red-700 border border-red-200 rounded-sm px-2 py-1 text-xs font-bold uppercase">Rejected</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </main>
  )
}
