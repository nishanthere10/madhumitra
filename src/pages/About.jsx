import React from 'react'
import {
  Users,
  Building,
  Shield,
  Globe,
  Lock,
  FileText,
  ExternalLink,
  Leaf,
  Store,
  CheckCircle2,
} from 'lucide-react'
import { GithubIcon } from '../components/shared/Icons'
import PageHero from '../components/shared/PageHero'

export default function About() {
  return (
    <main className="min-h-screen pb-20">
      <PageHero
        icon={Users}
        badgeText="Smart India Hackathon 2026 · SIH26021"
        title="Team Persistence"
        subtitle="Cyber-physical apiculture innovation engineered for India's 38 Lakh beekeeping smallholders."
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        
        {/* SHG Community Banner with Real Photo */}
        <div className="bg-white rounded-sm overflow-hidden border-2 border-amber-200 shadow-[6px_6px_0px_#1C1917] grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6 relative h-80 lg:h-full min-h-[340px] bg-stone-900 overflow-hidden">
            <img
              src="/images/shg_farmers.jpg"
              alt="Rural Indian Beekeepers and Khadi Village SHG cooperative members in mustard apiary"
              className="w-full h-full object-cover object-center hover:scale-103 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 font-mono">
                KVIC Self Help Group Cluster · Bengal Apiculture Zone
              </span>
              <p className="text-xs text-stone-300 font-medium mt-0.5">
                Empowering smallholder beekeepers with direct-to-consumer proven provenance.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 p-8 sm:p-10 space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest bg-amber-100 text-amber-900 px-3 py-1 rounded-full inline-block">
              Our Core Thesis
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-sans leading-tight text-stone-900">
              "Make honey fraud more expensive than the honey itself."
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed font-normal">
              Adulteration persists because dilute sugar syrup costs ₹40/kg while pure forest honey commands ₹600/kg.
              By establishing hardware-signed physical origin, automated mass conservation, and anti-replay scratch nonces,
              HoneyChain makes counterfeit operations economically unviable.
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs font-bold text-amber-800">
              <Leaf size={16} className="text-amber-600" />
              <span>Aligned with KVIC Honey Mission & National Bee Board</span>
            </div>
          </div>
        </div>

        {/* Cooperative Market Direct Sales Photo Block */}
        <div className="bg-[#FAF8F5] border-2 border-amber-200 rounded-sm p-6 sm:p-8 shadow-[2px_2px_0px_#1C1917] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-100 px-3 py-1 rounded-full">
              <Store size={14} className="text-amber-700" />
              <span>Farmer-Owned Cooperative Market</span>
            </div>
            <h3 className="text-2xl font-black text-stone-900 font-sans">
              Direct-to-Consumer Provenance Eliminates the 60% Middleman Margin
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
              Current unorganized beekeepers get ₹80–160/kg from bulk aggregators. But on e-commerce and cooperative retail shelves, verified single-flower honey (Mustard, Acacia, Litchi) commands ₹350–600/kg.
            </p>
            <ul className="space-y-2 text-xs font-semibold text-stone-700 pt-1">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-emerald-500" />
                <span>Pooled NABL ISO 17025 lab testing costs only ₹5–10 per kg for the cooperative</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-emerald-500" />
                <span>Zero hardware cost burden on farmers: ₹190/hive/yr cooperative deployment</span>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-5 rounded-sm overflow-hidden shadow-[6px_6px_0px_#1C1917] border-2 border-white">
            <img
              src="/images/farmer_market.jpg"
              alt="Farmer owned cooperative store selling certified honey directly to happy customers"
              className="w-full h-64 object-cover object-center"
            />
          </div>
        </div>

        {/* 4 Alignment Pillars */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100 border-2 border-stone-900 px-3 py-1 rounded-full mb-2 inline-block">
              Statutory Alignment
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-sans">
              Institutional Framework Integration
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-stone-900 rounded-sm p-6 shadow-[2px_2px_0px_#1C1917] flex items-start gap-4">
              <div className="w-12 h-12 rounded-sm bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                <Building size={24} />
              </div>
              <div>
                <h4 className="text-base font-bold text-stone-900 font-sans">
                  KVIC Honey Mission Framework
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                  Tailored to KVIC cluster deployment model, integrating with Self Help Groups (SHGs) and Khadi Gramodyog cooperatives.
                </p>
              </div>
            </div>

            <div className="bg-white border-2 border-stone-900 rounded-sm p-6 shadow-[2px_2px_0px_#1C1917] flex items-start gap-4">
              <div className="w-12 h-12 rounded-sm bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <Shield size={24} />
              </div>
              <div>
                <h4 className="text-base font-bold text-stone-900 font-sans">
                  FSSAI Food Safety Compliance
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                  Enforces Regulation 2.8.3 standards for raw honey (≤20% moisture, ≤7% C4 sugar, negative rice syrup SMR markers).
                </p>
              </div>
            </div>

            <div className="bg-white border-2 border-stone-900 rounded-sm p-6 shadow-[2px_2px_0px_#1C1917] flex items-start gap-4">
              <div className="w-12 h-12 rounded-sm bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                <Globe size={24} />
              </div>
              <div>
                <h4 className="text-base font-bold text-stone-900 font-sans">
                  EIC Export Quality Verification
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                  Meets Export Inspection Council requirements for NMR laboratory validation, unlocking premium Western export markets.
                </p>
              </div>
            </div>

            <div className="bg-white border-2 border-stone-900 rounded-sm p-6 shadow-[2px_2px_0px_#1C1917] flex items-start gap-4">
              <div className="w-12 h-12 rounded-sm bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                <Lock size={24} />
              </div>
              <div>
                <h4 className="text-base font-bold text-stone-900 font-sans">
                  DPDP Act 2023 Privacy-by-Design
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                  Zero farmer Personally Identifiable Information on public ledgers; only anonymized cryptographic keys and hashes are committed.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Deliverables Cards */}
        <div className="bg-[#FAF8F5] border-2 border-amber-200 rounded-sm p-8 shadow-[2px_2px_0px_#1C1917]">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 border-b border-amber-200 pb-4">
            <div>
              <h4 className="text-xl font-bold text-stone-900 font-sans">
                Prototype Repository & Verification Harness
              </h4>
              <p className="text-xs text-stone-500">
                SIH26021 Competition Artifacts & Codebase
              </p>
            </div>
            <span className="text-xs bg-amber-500 text-stone-950 font-bold px-3 py-1 rounded-full">
              SIH 2026 Submission
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a
              href="https://github.com/honeychain-sih26021"
              target="_blank"
              rel="noreferrer"
              className="bg-white hover:bg-amber-50/60 border border-stone-200 hover:border-amber-400 p-4 rounded-sm transition-all flex items-center gap-3 shadow-2xs group"
            >
              <div className="p-2.5 rounded-sm bg-stone-900 text-white group-hover:scale-105 transition-transform">
                <GithubIcon size={20} />
              </div>
              <div>
                <span className="text-xs font-bold text-stone-900 block font-sans">GitHub Repository</span>
                <span className="text-[11px] text-stone-500">Source code & contracts</span>
              </div>
            </a>

            <a
              href="#harness"
              onClick={(e) => {
                e.preventDefault()
                alert('Research Harness verified: 5 papers, CSE 2020 NMR data, NABARD apiculture model.')
              }}
              className="bg-white hover:bg-amber-50/60 border border-stone-200 hover:border-amber-400 p-4 rounded-sm transition-all flex items-center gap-3 shadow-2xs group"
            >
              <div className="p-2.5 rounded-sm bg-amber-500 text-stone-950 group-hover:scale-105 transition-transform">
                <FileText size={20} />
              </div>
              <div>
                <span className="text-xs font-bold text-stone-900 block font-sans">Research Harness</span>
                <span className="text-[11px] text-stone-500">Evidence & specifications</span>
              </div>
            </a>

            <a
              href="https://amoy.polygonscan.com"
              target="_blank"
              rel="noreferrer"
              className="bg-white hover:bg-amber-50/60 border border-stone-200 hover:border-amber-400 p-4 rounded-sm transition-all flex items-center gap-3 shadow-2xs group"
            >
              <div className="p-2.5 rounded-sm bg-blue-600 text-white group-hover:scale-105 transition-transform">
                <ExternalLink size={20} />
              </div>
              <div>
                <span className="text-xs font-bold text-stone-900 block font-sans">Polygon Explorer</span>
                <span className="text-[11px] text-stone-500">Amoy L2 smart contract</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
