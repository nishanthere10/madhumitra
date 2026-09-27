import React from 'react'
import { Link } from 'react-router-dom'
import { Hexagon, Leaf, ExternalLink, CheckCircle2 } from 'lucide-react'
import { GithubIcon } from './Icons'

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-stone-300 border-t border-amber-500/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-stone-800">
          {/* Col 1: Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-amber-500 flex items-center justify-center text-stone-950">
                <Hexagon fill="#F59E0B" color="#0F172A" strokeWidth={2.5} size={22} />
              </div>
              <span className="font-bold text-2xl text-white tracking-tight font-sans">
                HoneyChain <span className="text-amber-400 font-normal">/ MadhuMitra</span>
              </span>
            </div>
            <p className="text-sm text-stone-400 max-w-md leading-relaxed">
              India&apos;s first cyber-physical apiculture platform combining ESP32-S3 cryptographic edge signing,
              MoGe-3 smart beekeeping AI, and Polygon Amoy mass-balance verification.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="inline-flex items-center gap-1.5 bg-amber-950/60 border border-amber-500/30 text-amber-300 text-xs px-3 py-1 rounded-full font-medium">
                <Leaf size={14} className="text-amber-400" />
                <span>Aligned with KVIC Honey Mission Framework</span>
              </div>
              <div className="inline-flex items-center gap-1.5 bg-stone-800 text-stone-300 text-xs px-3 py-1 rounded-full">
                <CheckCircle2 size={13} className="text-emerald-400" />
                <span>SIH26021 Prototype</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-4 font-sans">
              Platform Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-stone-400 hover:text-white transition-colors">
                  Home (Problem & Overview)
                </Link>
              </li>
              <li>
                <Link to="/solution" className="text-stone-400 hover:text-white transition-colors">
                  4-Layer Architecture & Journey
                </Link>
              </li>
              <li>
                <Link to="/beekeeper" className="text-stone-400 hover:text-white transition-colors">
                  Beekeeper App (4-Tab Mockup)
                </Link>
              </li>
              <li>
                <Link to="/consumer" className="text-stone-400 hover:text-white transition-colors">
                  Consumer Verification (QR Flow)
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-stone-400 hover:text-white transition-colors">
                  Research Papers & Benchmarks
                </Link>
              </li>
              <li>
                <Link to="/tech" className="text-stone-400 hover:text-white transition-colors">
                  Technical Architecture & Contracts
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-stone-400 hover:text-white transition-colors">
                  Team Persistence & Impact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Research & Code */}
          <div>
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-4 font-sans">
              Engineering Specs
            </h4>
            <ul className="space-y-2.5 text-sm text-stone-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span>Polygon Amoy (Chain ID 80002)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span>ESP32-S3 ECDSA (~20ms signing)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span>LittleFS Buffer (200+ Days Offline)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span>ISO 17025 NABL Oracle Anchoring</span>
              </li>
              <li className="pt-3">
                <a
                  href="https://github.com/honeychain-sih26021"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-stone-300 hover:text-amber-400 text-xs font-medium bg-stone-800/80 hover:bg-stone-800 px-3 py-2 rounded-lg transition-colors border border-stone-700"
                >
                  <GithubIcon size={16} />
                  <span>github.com/honeychain-sih26021</span>
                  <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500">
          <p className="text-amber-400/90 font-medium text-center md:text-left">
            &ldquo;Making fraud more expensive than the honey itself.&rdquo; · <span className="text-stone-300">Team Persistence (SIH26021)</span>
          </p>
          <p className="text-stone-500 text-center md:text-right">
            Built for Rural India. Proven by Engineering. Smart India Hackathon 2026.
          </p>
        </div>
      </div>
    </footer>
  )
}
