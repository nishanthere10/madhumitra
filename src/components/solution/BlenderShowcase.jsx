import React, { useRef, useState } from 'react'
import { Play, Pause, Volume2, VolumeX, Maximize2, Sparkles, Cpu, Box, ShieldCheck } from 'lucide-react'

export default function BlenderShowcase() {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)

  const togglePlay = () => {
    if (!videoRef.current) return
    if (isPlaying) {
      videoRef.current.pause()
      setIsPlaying(false)
    } else {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  const toggleMute = () => {
    if (!videoRef.current) return
    videoRef.current.muted = !isMuted
    setIsMuted(!isMuted)
  }

  const handleFullscreen = () => {
    if (!videoRef.current) return
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen()
    }
  }

  return (
    <section className="py-8 bg-white border-b border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-stone-200 rounded-full px-3 py-1 mb-2">
            <Box size={13} className="text-amber-600" />
            <span className="text-amber-800 text-[11px] font-bold uppercase tracking-wide">
              3D Cyber-Physical Simulation
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 font-sans tracking-tight">
            Interactive 3D Hive Digital Twin
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm mt-1">
            Exploded CAD rendering showing the load-cell scale base and ESP32-S3 microcontroller module.
          </p>
        </div>

        {/* Compact 3D Video Player Card */}
        <div className="relative rounded-sm overflow-hidden bg-stone-950 border-2 border-amber-300 shadow-[0_4px_20px_rgba(245,158,11,0.12)] group">
          {/* Video Container (Constrained Aspect & Height) */}
          <div className="relative aspect-video max-h-[800px] w-full flex items-center justify-center bg-black">
            <video
              ref={videoRef}
              src="/blender-3d.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover sm:object-contain"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />

            {/* Gradient Overlays */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-stone-950/80 via-transparent to-black/20" />

            {/* Top Bar Badges */}
            <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 bg-amber-500 text-stone-950 font-black text-[10px] sm:text-xs px-2.5 py-1 rounded-lg shadow font-sans">
                  <Sparkles size={12} /> 3D BLENDER CAD
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 bg-stone-900 text-amber-300 text-[11px] font-mono px-2.5 py-0.5 rounded-md border border-amber-400">
                  <Cpu size={12} className="text-amber-700" />
                  Langstroth v2.4
                </span>
              </div>

              <span className="inline-flex items-center gap-1.5 bg-emerald-500 text-white font-mono text-[10px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                Live Render
              </span>
            </div>

            {/* Bottom Controls Bar */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between z-20">
              <div className="flex items-center gap-2">
                <button
                  onClick={togglePlay}
                  className="w-8 h-8 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 flex items-center justify-center shadow transition-transform hover:scale-105 active:scale-95 cursor-pointer"
                  title={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? <Pause size={14} /> : <Play size={14} className="ml-0.5" />}
                </button>

                <button
                  onClick={toggleMute}
                  className="w-8 h-8 rounded-lg bg-stone-900 hover:bg-stone-800 text-white flex items-center justify-center border border-white/20 transition-colors cursor-pointer"
                  title={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                </button>

                <span className="text-[11px] font-mono text-stone-300 hidden sm:inline-block ml-1">
                  {isPlaying ? '● Playing' : '❚❚ Paused'}
                </span>
              </div>

              <button
                onClick={handleFullscreen}
                className="w-8 h-8 rounded-lg bg-stone-900 hover:bg-stone-800 text-white flex items-center justify-center border border-white/20 transition-colors cursor-pointer"
                title="Fullscreen"
              >
                <Maximize2 size={14} />
              </button>
            </div>
          </div>

          {/* Compact Single-Row Telemetry Bar (Reduced Size per Feedback) */}
          <div className="bg-stone-900 px-4 py-3 border-t border-amber-500/20 text-white">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-700 shrink-0">
                  <Box size={14} />
                </div>
                <div>
                  <div className="font-bold text-white font-sans text-[11px]">
                    Load-Cell Bottom Board
                  </div>
                  <div className="text-[10px] text-stone-400 truncate">
                    4x shear-beam strain gauges
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-700 shrink-0">
                  <Cpu size={14} />
                </div>
                <div>
                  <div className="font-bold text-white font-sans text-[11px]">
                    ESP32-S3 Enclosure
                  </div>
                  <div className="text-[10px] text-stone-400 truncate">
                    Hardware Security + IP67 solar case
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-700 shrink-0">
                  <ShieldCheck size={14} />
                </div>
                <div>
                  <div className="font-bold text-white font-sans text-[11px]">
                    1:10 Cluster Economics
                  </div>
                  <div className="text-[10px] text-stone-400 truncate">
                    Target BOM ≤ ₹190/hive/yr
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
