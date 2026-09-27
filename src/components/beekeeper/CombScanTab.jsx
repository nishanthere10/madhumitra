import React, { useState } from 'react'
import { Camera, CheckCircle2, ScanLine, RefreshCw, AlertCircle, Cpu, Eye, Sparkles } from 'lucide-react'

function HexCell({ level }) {
  const shades = {
    1: 'fill-amber-100 stroke-amber-300',
    2: 'fill-amber-200 stroke-amber-400',
    3: 'fill-amber-300 stroke-amber-500',
    4: 'fill-amber-500 stroke-amber-600',
    5: 'fill-amber-600 stroke-amber-700',
  }
  const cls = shades[level] || shades[3]

  return (
    <svg width="24" height="28" viewBox="0 0 28 32" className="inline-block transition-transform hover:scale-125">
      <polygon
        points="14,0 28,8 28,24 14,32 0,24 0,8"
        className={cls}
        strokeWidth="1.5"
      />
    </svg>
  )
}

export default function CombScanTab() {
  const [scanState, setScanState] = useState('idle')

  const handleStartScan = () => {
    setScanState('processing')
    setTimeout(() => {
      setScanState('done')
    }, 1100)
  }

  const handleReset = () => {
    setScanState('idle')
  }

  const depthMatrix = [
    [5, 5, 5, 4, 4, 5, 5, 5],
    [5, 4, 4, 4, 3, 4, 5, 5],
    [4, 4, 3, 3, 3, 4, 4, 5],
    [5, 4, 3, 2, 3, 4, 5, 5],
    [5, 5, 4, 3, 3, 4, 5, 5],
    [4, 4, 4, 4, 4, 4, 4, 5],
    [5, 5, 5, 5, 4, 5, 5, 5],
    [5, 5, 5, 5, 5, 5, 5, 5],
  ]

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Title & Explainer */}
      <div className="bg-white rounded-sm p-6 border-2 border-stone-900/80 shadow-[2px_2px_0px_#1C1917] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold mb-2">
            <Sparkles size={13} className="text-amber-600" />
            Computer Vision Cell Analyzer (Mobile-Friendly)
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-sans">
            Honey Comb Ripeness & Capping Scanner
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-2xl">
            Takes a photo of your comb frame, checks wax capping coverage in under a second directly on your phone (no internet needed), and ensures moisture content is below 20% before extraction.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {scanState === 'idle' && (
            <button
              onClick={handleStartScan}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold text-sm shadow-[2px_2px_0px_#1C1917] transition-colors cursor-pointer"
            >
              <Camera size={16} />
              Scan Comb Frame
            </button>
          )}

          {scanState === 'processing' && (
            <button
              disabled
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-amber-200 text-amber-900 font-bold text-sm cursor-wait animate-pulse"
            >
              <RefreshCw size={16} className="animate-spin" />
              Analyzing Cell Density...
            </button>
          )}

          {scanState === 'done' && (
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold text-sm transition-colors cursor-pointer"
            >
              <RefreshCw size={14} />
              Scan Another Frame
            </button>
          )}
        </div>
      </div>

      {/* Main Grid: Live Frame View vs Heatmap Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Frame Photographic View with AI Overlays */}
        <div className="lg:col-span-6 bg-white rounded-sm p-5 border-2 border-stone-900/80 shadow-[2px_2px_0px_#1C1917] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Eye size={16} className="text-amber-600" />
                <h3 className="text-sm font-bold text-stone-900 font-sans">
                  Frame Camera View
                </h3>
              </div>
              <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-full bg-stone-100 text-stone-600">
                Langstroth Standard Super Frame #4
              </span>
            </div>

            {/* Photo Container */}
            <div className="relative rounded-sm overflow-hidden border-2 border-stone-900 aspect-4/3 bg-stone-900 group shadow-[inset_4px_4px_0px_rgba(28,25,23,0.1)]">
              <img
                src="images/comb_inspection.jpg"
                alt="Beekeeper inspecting comb frame"
                className="w-full h-full object-cover object-center"
              />

              {/* Scanning Animation */}
              {scanState === 'processing' && (
                <div className="absolute inset-0 bg-amber-500/10 pointer-events-none flex flex-col justify-center items-center">
                  <div className="w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent shadow-[0_0_15px_#f59e0b] animate-bounce" />
                  <div className="mt-4 px-3 py-1 rounded-md bg-stone-900 text-amber-300 font-mono text-xs flex items-center gap-2">
                    <Cpu size={14} className="animate-pulse" />
                    Edge YOLO Segmentation: 64 Grid Blocks
                  </div>
                </div>
              )}

              {/* Detection Bounding Boxes Overlay when Done */}
              {scanState === 'done' && (
                <div className="absolute inset-0 pointer-events-none p-4 flex flex-col justify-between">
                  <div className="border-2 border-emerald-400 bg-emerald-50 rounded-lg p-2 max-w-xs">
                    <div className="text-[10px] font-mono font-bold text-emerald-900 bg-emerald-300 px-1.5 py-0.5 rounded inline-block">
                      ✓ Capped Honey Cells: 94.2% Area
                    </div>
                  </div>

                  <div className="self-end border-2 border-amber-400 bg-amber-50 rounded-lg p-2 max-w-[200px] text-right">
                    <div className="text-[10px] font-mono font-bold text-amber-950 bg-amber-300 px-1.5 py-0.5 rounded inline-block">
                      Moisture Estimate: 17.8%
                    </div>
                  </div>
                </div>
              )}

              {/* Status Pill */}
              <div className="absolute bottom-3 left-3 bg-stone-900 text-white px-2.5 py-1 rounded-md text-[11px] font-mono flex items-center gap-1.5">
                <div className={`w-2 h-2 rounded-full ${scanState === 'done' ? 'bg-emerald-400' : scanState === 'processing' ? 'bg-amber-400 animate-ping' : 'bg-stone-400'}`} />
                {scanState === 'done' ? 'Inspection Complete' : scanState === 'processing' ? 'Running Model...' : 'Ready to Capture'}
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
            <span>Hardware: Smartphone Rear Camera</span>
            <span>Latency: 42ms (Offline ONNX)</span>
          </div>
        </div>

        {/* Right: Heatmap Matrix & Ready To Harvest Status */}
        <div className="lg:col-span-6 bg-white rounded-sm p-5 border-2 border-stone-900/80 shadow-[2px_2px_0px_#1C1917] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <ScanLine size={16} className="text-amber-600" />
                <h3 className="text-sm font-bold text-stone-900 font-sans">
                  Cell Wax Density Matrix (8x8)
                </h3>
              </div>
              <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border-2 border-stone-900">
                92% Wax Sealed
              </span>
            </div>

            {/* Matrix View */}
            <div className="bg-[#FAF8F5] p-4 rounded-sm border-2 border-stone-900/60 flex flex-col items-center justify-center min-h-[220px]">
              <div className="flex flex-col items-center">
                {depthMatrix.map((row, rIdx) => (
                  <div key={rIdx} className={`flex gap-1 ${rIdx > 0 ? '-mt-2' : ''} ${rIdx % 2 !== 0 ? 'ml-3.5' : ''}`}>
                    {row.map((lvl, cIdx) => (
                      <HexCell key={cIdx} level={lvl} />
                    ))}
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4 mt-4 text-[10px] font-mono text-stone-500">
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-xs bg-amber-100 border-2 border-stone-900 inline-block" /> Open Nectar
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-xs bg-amber-300 border border-amber-500 inline-block" /> Partial Cap
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-xs bg-amber-600 border border-amber-700 inline-block" /> Fully Capped
                </span>
              </div>
            </div>
          </div>

          {/* Harvest Decision Card */}
          <div className="mt-4 p-4 rounded-sm bg-emerald-50 border-2 border-stone-900 flex items-start gap-3">
            <CheckCircle2 size={20} className="text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-bold text-emerald-900 font-sans">
                Prime Harvest Window Confirmed
              </div>
              <p className="text-xs text-emerald-800 mt-0.5">
                Over 85% of cells are fully sealed with beeswax. Honey moisture is safely stabilized at <strong>17.8%</strong> (FSSAI max threshold is 20.0%). Safe to extract without fermentation risk.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
