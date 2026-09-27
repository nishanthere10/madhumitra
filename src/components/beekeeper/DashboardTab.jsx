import React from 'react'
import { Thermometer, Scale, Radio, Zap, AlertTriangle, Cpu, HardDriveDownload } from 'lucide-react'

const hives = [
  { id: '12', weight: '38.2', temp: '34.1', battery: '4.1', signal: '-65', lastSync: '2m', status: 'OK' },
  { id: '15', weight: '32.7', temp: '33.8', battery: '3.9', signal: '-72', lastSync: '12m', status: 'OK' },
  { id: '23', weight: '41.5', temp: '31.2', battery: '4.0', signal: '-68', lastSync: '5m', status: 'WARN' },
  { id: '34', weight: '28.4', temp: '34.5', battery: '4.2', signal: '-55', lastSync: '1m', status: 'OK' },
  { id: '07', weight: '35.1', temp: '29.8', battery: '3.6', signal: '-81', lastSync: '45m', status: 'CRIT' },
]

export default function DashboardTab() {
  return (
    <div className="space-y-6">
      {/* 1. Actuation Panel (Hardware Control) */}
      <div>
        <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider mb-2 flex items-center gap-2">
          <Cpu size={14} /> Hardware Uplink
        </div>
        <div className="grid grid-cols-2 gap-3">
          <button className="bg-stone-900 text-white font-bold text-xs py-3 border-2 border-stone-900 shadow-[4px_4px_0px_#F59E0B] hover:shadow-[2px_2px_0px_#F59E0B] hover:translate-y-[2px] transition-all flex flex-col items-center justify-center gap-1 active:shadow-none active:translate-y-[4px]">
            <HardDriveDownload size={16} className="text-amber-500" />
            SYNC LEDGER
          </button>
          <button className="bg-amber-500 text-stone-900 font-bold text-xs py-3 border-2 border-stone-900 shadow-[4px_4px_0px_#1C1917] hover:shadow-[2px_2px_0px_#1C1917] hover:translate-y-[2px] transition-all flex flex-col items-center justify-center gap-1 active:shadow-none active:translate-y-[4px]">
            <Radio size={16} />
            SCAN BLE
          </button>
        </div>
      </div>

      {/* 2. Industrial Hazard Alerts */}
      <div>
        <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider mb-2 flex items-center gap-2">
          <AlertTriangle size={14} /> Critical Diagnostics
        </div>
        <div className="space-y-3">
          {/* Amber Warning */}
          <div className="border-2 border-stone-900 shadow-[4px_4px_0px_#1C1917] bg-white">
            <div className="hazard-stripes-amber h-2 w-full border-b-2 border-stone-900"></div>
            <div className="p-3">
              <div className="flex items-start gap-2.5">
                <Thermometer size={18} className="text-stone-900 shrink-0" />
                <div>
                  <span className="font-black text-stone-900 uppercase text-xs tracking-wide">Hive #23: Brood Temp Low</span>
                  <p className="text-stone-600 text-[11px] leading-tight mt-1 font-mono">
                    TEMP_BELOW_32C_DURATION=6H. ACTION_REQ=INSPECT_48H
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Red Critical */}
          <div className="border-2 border-stone-900 shadow-[4px_4px_0px_#1C1917] bg-white cursor-pointer hover:bg-stone-50 transition-colors">
            <div className="hazard-stripes-red h-2 w-full border-b-2 border-stone-900"></div>
            <div className="p-3">
              <div className="flex items-start gap-2.5">
                <Scale size={18} className="text-red-600 shrink-0" />
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <span className="font-black text-red-700 uppercase text-xs tracking-wide">Hive #07: Harvest Ready</span>
                    <span className="text-[10px] bg-red-600 text-white font-bold px-1.5 py-0.5 border-2 border-stone-900">SIGN TX</span>
                  </div>
                  <p className="text-stone-600 text-[11px] leading-tight mt-1 font-mono">
                    WEIGHT_DROP=4.2KG (02:14AM). PLAUSIBILITY=0.94.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Dense Telemetry Grid */}
      <div>
        <div className="flex justify-between items-end mb-2">
          <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider flex items-center gap-2">
            <Zap size={14} /> Fleet Telemetry
          </div>
          <div className="text-[9px] font-mono text-stone-400">NODES: 47/50 ONLINE</div>
        </div>
        
        <div className="border-2 border-stone-900 shadow-[4px_4px_0px_#1C1917] bg-white overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-6 border-b-2 border-stone-900 bg-stone-100 text-[9px] font-bold text-stone-600 p-2 uppercase tracking-wider font-sans">
            <div className="col-span-1">ID</div>
            <div className="col-span-1 text-right">WT(kg)</div>
            <div className="col-span-1 text-right">TMP(°C)</div>
            <div className="col-span-1 text-right">PWR(V)</div>
            <div className="col-span-1 text-right">SIG</div>
            <div className="col-span-1 text-right">SYNC</div>
          </div>
          
          {/* Rows */}
          <div className="divide-y-2 divide-stone-100">
            {hives.map((h) => (
              <div key={h.id} className="grid grid-cols-6 p-2 text-[10px] font-mono hover:bg-amber-50 cursor-crosshair">
                <div className="col-span-1 font-bold text-stone-900 flex items-center gap-1">
                  {h.status === 'CRIT' && <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />}
                  {h.status === 'WARN' && <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />}
                  {h.status === 'OK' && <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />}
                  #{h.id}
                </div>
                <div className="col-span-1 text-right text-stone-700">{h.weight}</div>
                <div className="col-span-1 text-right text-stone-700">{h.temp}</div>
                <div className={`col-span-1 text-right ${h.battery < 3.8 ? 'text-red-600 font-bold' : 'text-stone-700'}`}>{h.battery}</div>
                <div className="col-span-1 text-right text-stone-700">{h.signal}</div>
                <div className="col-span-1 text-right text-stone-700">{h.lastSync}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
