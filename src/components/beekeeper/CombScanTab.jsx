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
    <div className="space-y-4">
      {/* Title & Explainer */}
      <div className="bg-white rounded-sm p-4 border border-stone-200/80 shadow-sm shadow-stone-900/5 flex flex-col gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-[10px] font-semibold mb-2">
            <Sparkles size={12} className="text-amber-600" />
            Computer Vision Analyzer
          </div>
          <h2 className="text-lg font-bold text-stone-900 font-sans leading-tight">
            Comb Ripeness Scanner
          </h2>
          <p className="text-xs text-stone-600 mt-1">
            Ensure moisture content is below 20% before extraction.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          {scanState === 'idle' && (
            <button
              onClick={handleStartScan}
              className="inline-flex justify-center items-center gap-2 w-full py-2.5 rounded-sm bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold text-sm shadow-sm shadow-stone-900/5 transition-colors cursor-pointer"
            >
              <Camera size={16} />
              Scan Comb Frame
            </button>
          )}

          {scanState === 'processing' && (
            <button
              disabled
              className="inline-flex justify-center items-center gap-2 w-full py-2.5 rounded-sm bg-amber-200 text-amber-900 font-bold text-sm cursor-wait animate-pulse"
            >
              <RefreshCw size={16} className="animate-spin" />
              Analyzing Density...
            </button>
          )}

          {scanState === 'done' && (
            <button
              onClick={handleReset}
              className="inline-flex justify-center items-center gap-2 w-full py-2.5 rounded-sm bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold text-sm transition-colors cursor-pointer"
            >
              <RefreshCw size={14} />
              Scan Another Frame
            </button>
          )}
        </div>
      </div>

      {/* Main Stack: Live Frame View vs Heatmap Analysis */}
      <div className="flex flex-col gap-4">
        {/* Top: Frame Photographic View with AI Overlays */}
        <div className="bg-white rounded-sm p-3 border border-stone-200/80 shadow-sm shadow-stone-900/5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Eye size={14} className="text-amber-600" />
                <h3 className="text-xs font-bold text-stone-900 font-sans">
                  Camera View
                </h3>
              </div>
            </div>

            {/* Photo Container */}
            <div className="relative rounded-sm overflow-hidden border border-stone-200 aspect-4/3 bg-stone-900 group shadow-[inset_4px_4px_0px_rgba(28,25,23,0.1)]">
              <img
                src="/images/comb_inspection.jpg"
                alt="Beekeeper inspecting comb frame"
                className="w-full h-full object-cover object-center"
              />

              {/* Scanning Animation */}
              {scanState === 'processing' && (
                <div className="absolute inset-0 bg-amber-500/10 pointer-events-none flex flex-col justify-center items-center">
                  <div className="w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent shadow-[0_0_15px_#f59e0b] animate-bounce" />
                  <div className="mt-4 px-2 py-1 rounded-md bg-stone-900 text-amber-300 font-mono text-[10px] flex items-center gap-2">
                    <Cpu size={12} className="animate-pulse" />
                    Edge YOLO: 64 Grids
                  </div>
                </div>
              )}

              {/* Detection Bounding Boxes Overlay when Done */}
              {scanState === 'done' && (
                <div className="absolute inset-0 pointer-events-none p-2 flex flex-col justify-between">
                  <div className="border border-emerald-400 bg-emerald-50/90 rounded p-1 max-w-[150px]">
                    <div className="text-[9px] font-mono font-bold text-emerald-900">
                      ✓ Capped: 94.2%
                    </div>
                  </div>

                  <div className="self-end border border-amber-400 bg-amber-50/90 rounded p-1 max-w-[120px] text-right">
                    <div className="text-[9px] font-mono font-bold text-amber-950">
                      Moisture: 17.8%
                    </div>
                  </div>
                </div>
              )}

              {/* Status Pill */}
              <div className="absolute bottom-2 left-2 bg-stone-900/90 text-white px-2 py-1 rounded-md text-[9px] font-mono flex items-center gap-1.5">
                <div className={`w-1.5 h-1.5 rounded-full ${scanState === 'done' ? 'bg-emerald-400' : scanState === 'processing' ? 'bg-amber-400 animate-ping' : 'bg-stone-400'}`} />
                {scanState === 'done' ? 'Complete' : scanState === 'processing' ? 'Running Model...' : 'Ready to Capture'}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: Heatmap Matrix & Ready To Harvest Status */}
        <div className="bg-white rounded-sm p-3 border border-stone-200/80 shadow-sm shadow-stone-900/5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <ScanLine size={14} className="text-amber-600" />
                <h3 className="text-xs font-bold text-stone-900 font-sans">
                  Density Matrix (8x8)
                </h3>
              </div>
            </div>

            {/* Matrix View */}
            <div className="bg-[#FAF8F5] p-3 rounded-sm border border-stone-200 flex flex-col items-center justify-center min-h-[160px] overflow-hidden">
              <div className="flex flex-col items-center scale-75 transform origin-center">
                {depthMatrix.map((row, rIdx) => (
                  <div key={rIdx} className={`flex gap-1 ${rIdx > 0 ? '-mt-2' : ''} ${rIdx % 2 !== 0 ? 'ml-3.5' : ''}`}>
                    {row.map((lvl, cIdx) => (
                      <HexCell key={cIdx} level={lvl} />
                    ))}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap justify-center gap-2 mt-2 text-[9px] font-mono text-stone-500">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-xs bg-amber-100 border border-stone-900 inline-block" /> Open Nectar
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-xs bg-amber-300 border border-amber-500 inline-block" /> Partial
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-xs bg-amber-600 border border-amber-700 inline-block" /> Capped
                </span>
              </div>
            </div>
          </div>

          {/* Harvest Decision Card */}
          <div className="mt-3 p-3 rounded-sm bg-emerald-50 border border-stone-200 flex items-start gap-2">
            <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-emerald-900 font-sans">
                Prime Harvest Window Confirmed
              </div>
              <p className="text-[10px] text-emerald-800 mt-1 leading-tight">
                Honey moisture is safely stabilized at <strong>17.8%</strong>. Safe to extract without fermentation risk.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
