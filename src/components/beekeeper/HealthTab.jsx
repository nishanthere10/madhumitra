import React from 'react'
import { Thermometer, Scale, Volume2, Moon, TrendingUp, CheckCircle2 } from 'lucide-react'

function MiniSparkline({ heights = [40, 55, 60, 50, 70, 85, 90], color = 'bg-amber-500' }) {
  return (
    <div className="flex items-end gap-1 h-6 w-16">
      {heights.map((h, i) => (
        <span
          key={i}
          className={`w-1.5 rounded-xs ${color}`}
          style={{ height: `${h}%` }}
        ></span>
      ))}
    </div>
  )
}

export default function HealthTab() {
  return (
    <div className="space-y-3.5">
      <div className="border-b border-stone-200 pb-2.5">
        <h4 className="text-sm font-bold text-stone-900 font-sans">
          Colony Bio-Proxy Signals
        </h4>
        <p className="text-[11px] text-stone-500">
          Continuous 4-point telemetry for Hive #12 (Sundarbans Cluster)
        </p>
      </div>

      {/* Signal 1: Brood Nest Temp */}
      <div className="bg-white border border-stone-200 rounded-sm p-3 shadow-2xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-amber-50 text-amber-700">
              <Thermometer size={16} />
            </div>
            <div>
              <span className="text-xs font-bold text-stone-800">Brood Nest Temp</span>
              <p className="text-[10px] text-stone-500">Optimal Range: 33–36°C</p>
            </div>
          </div>
          <MiniSparkline heights={[60, 65, 70, 72, 68, 70, 72]} color="bg-amber-500" />
        </div>
        <div className="flex items-center justify-between mt-2 pt-2 border-t border-stone-100 text-xs">
          <span className="font-mono font-bold text-stone-900 text-sm">34.1°C</span>
          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
            <CheckCircle2 size={11} />
            <span>Brood Healthy</span>
          </span>
        </div>
      </div>

      {/* Signal 2: Hive Weight */}
      <div className="bg-white border border-stone-200 rounded-sm p-3 shadow-2xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-amber-50 text-amber-700">
              <Scale size={16} />
            </div>
            <div>
              <span className="text-xs font-bold text-stone-800">Gross Hive Weight</span>
              <p className="text-[10px] text-stone-500">Daily Gain Delta</p>
            </div>
          </div>
          <MiniSparkline heights={[40, 48, 55, 60, 65, 75, 85]} color="bg-emerald-500" />
        </div>
        <div className="flex items-center justify-between mt-2 pt-2 border-t border-stone-100 text-xs">
          <div className="flex items-baseline gap-1.5">
            <span className="font-mono font-bold text-stone-900 text-sm">38.2 kg</span>
            <span className="text-[11px] font-semibold text-emerald-600">(+0.3 kg today)</span>
          </div>
          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
            <TrendingUp size={11} />
            <span>Nectar Flow Active</span>
          </span>
        </div>
      </div>

      {/* Signal 3: Acoustic Volume & Frequency */}
      <div className="bg-white border border-stone-200 rounded-sm p-3 shadow-2xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-amber-50 text-amber-700">
              <Volume2 size={16} />
            </div>
            <div>
              <span className="text-xs font-bold text-stone-800">Acoustic Spectrum</span>
              <p className="text-[10px] text-stone-500">INMP441 MEMS Microphone</p>
            </div>
          </div>
          <MiniSparkline heights={[50, 45, 52, 48, 50, 47, 49]} color="bg-blue-500" />
        </div>
        <div className="flex items-center justify-between mt-2 pt-2 border-t border-stone-100 text-xs">
          <span className="font-mono font-bold text-stone-900 text-sm">58 dB, 230 Hz</span>
          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
            <CheckCircle2 size={11} />
            <span>Queen Present (est.)</span>
          </span>
        </div>
      </div>

      {/* Signal 4: Overnight Weight Loss */}
      <div className="bg-white border border-stone-200 rounded-sm p-3 shadow-2xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-amber-50 text-amber-700">
              <Moon size={16} />
            </div>
            <div>
              <span className="text-xs font-bold text-stone-800">Overnight Loss</span>
              <p className="text-[10px] text-stone-500">Metabolic Respiration (Normal &lt;0.3 kg)</p>
            </div>
          </div>
          <MiniSparkline heights={[30, 25, 28, 30, 26, 29, 27]} color="bg-purple-500" />
        </div>
        <div className="flex items-center justify-between mt-2 pt-2 border-t border-stone-100 text-xs">
          <span className="font-mono font-bold text-stone-900 text-sm">-0.15 kg</span>
          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
            <CheckCircle2 size={11} />
            <span>No Swarming Risk</span>
          </span>
        </div>
      </div>
    </div>
  )
}
