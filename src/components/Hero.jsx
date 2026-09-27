import { useEffect, useRef, useState } from 'react'
import { ArrowDown, Shield, Cpu, Link } from 'lucide-react'

const stats = [
  { value: '77%', label: 'Commercial honey brands fail purity tests', source: 'CSE 2020 NMR Investigation' },
  { value: '₹146.9 Cr', label: 'Lost annually to bee swarm events in India', source: 'NABARD / AICRP Data, 2023-24' },
  { value: '38L+', label: 'Beekeepers on Madhukranti with manual self-declaration', source: 'NBHM / National Bee Board' },
]

export default function Hero() {
  const [visible, setVisible] = useState(false)
  useEffect(() => { setTimeout(() => setVisible(true), 100) }, [])

  return (
    <section className="hero-bg honeycomb-bg min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-20">
      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500 rounded-full opacity-5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-400 rounded-full opacity-5 blur-3xl pointer-events-none" />

      {/* Government badge */}
      <div className={`transition-all duration-700 ${visible ? 'opacity-100 transtone-y-0' : 'opacity-0 -transtone-y-4'}`}>
        <div className="flex items-center gap-3 bg-white/10 border border-amber-500/30 rounded-full px-5 py-2 mb-8">
          <div className="flex gap-1">
            <div className="w-3 h-3 rounded-full bg-orange-500" />
            <div className="w-3 h-3 rounded-full bg-white" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-stone-300 text-sm font-medium">Smart India Hackathon 2026 · SIH26021</span>
          <span className="text-amber-400 text-sm font-bold">Team Persistence</span>
        </div>
      </div>

      {/* Main headline */}
      <div className={`text-center px-6 max-w-5xl mx-auto transition-all duration-700 delay-100 ${visible ? 'opacity-100 transtone-y-0' : 'opacity-0 transtone-y-8'}`}>
        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-4">
          <span className="gradient-text">MadhuMitra</span>
        </h1>
        <p className="text-2xl md:text-3xl font-semibold text-stone-200 mb-4">
          Trace Honey. Trust Nature.
        </p>
        <p className="text-stone-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
          HoneyChain is India's first <strong className="text-amber-400">cyber-physical apiculture platform</strong> — combining IoT edge sensors, AI-powered comb analysis, and blockchain-anchored traceability to make honey fraud more expensive than the honey itself.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#beekeeper"
            className="bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold px-8 py-4 rounded-sm text-lg transition-all duration-200 hover:scale-105 pulse-glow">
            🐝 See Beekeeper App
          </a>
          <a href="#consumer"
            className="border border-amber-500/50 hover:border-amber-400 text-amber-400 hover:text-amber-300 font-bold px-8 py-4 rounded-sm text-lg transition-all duration-200 hover:scale-105">
            📱 Consumer Verification
          </a>
        </div>
      </div>

      {/* Stats row */}
      <div className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-6 w-full transition-all duration-700 delay-300 ${visible ? 'opacity-100 transtone-y-0' : 'opacity-0 transtone-y-8'}`}>
        {stats.map((s, i) => (
          <div key={i} className="glass-card rounded-sm p-6 text-center border border-amber-500/20">
            <div className="text-4xl font-black text-amber-400 mb-2">{s.value}</div>
            <div className="text-stone-700 font-medium text-sm mb-1">{s.label}</div>
            <div className="text-stone-400 text-xs">{s.source}</div>
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <a href="#problem" className="absolute bottom-8 left-1/2 -transtone-x-1/2 text-stone-400 hover:text-amber-400 transition-colors float-anim">
        <ArrowDown size={28} />
      </a>
    </section>
  )
}
