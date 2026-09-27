import React from 'react'
import {
  LayoutDashboard,
  Wifi,
  BrainCircuit,
  Camera,
  Zap,
  CheckSquare,
  Activity,
  ScanLine,
  Network,
} from 'lucide-react'
import PageHero from '../components/shared/PageHero'
import DashboardTab from '../components/beekeeper/DashboardTab'
import HarvestTab from '../components/beekeeper/HarvestTab'
import HealthTab from '../components/beekeeper/HealthTab'
import CombScanTab from '../components/beekeeper/CombScanTab'

const features = [
  {
    icon: Network,
    title: 'Economically Viable: The Sentinel Model',
    desc: 'Equipping every single beehive with a ₹4,500 scale would instantly bankrupt a small rural farmer. We don’t do that. HoneyChain uses a Sentinel Hive model. A farmer only needs to deploy 1 IoT scale for every 50 hives in their apiary. This single sentinel node acts as a biological proxy—monitoring regional nectar flow, weather distress, and daily weight changes for the entire yard—cutting hardware costs by 98% while still securing the supply chain.',
  },
  {
    icon: Wifi,
    title: 'Works Offline — 200+ Days',
    desc: 'LittleFS flash ring buffer stores telemetry continuously. Syncs via Bluetooth Low Energy (BLE) or Wi-Fi whenever the beekeeper visits the apiary.',
  },
  {
    icon: BrainCircuit,
    title: 'AI Anomaly Detection',
    desc: 'Isolation Forest flags biological distress patterns (chilled brood, swarming, sudden hive loss) — alerts beekeeper without making unverified diagnoses.',
  },
  {
    icon: Camera,
    title: '3D Comb Scanner (MoGe-3)',
    desc: 'Zero-hardware comb photogrammetry. Estimates honey volume from standard camera frames and cross-validates against physical scale measurements.',
  },
  {
    icon: Zap,
    title: '~20ms Signing Speed',
    desc: 'Hardware-level secp256k1 ECDSA cryptographic signing on ESP32-S3 dual-core LX7 microcontroller. No slow crypto transactions on the phone.',
  },
]

export default function BeekeeperApp() {
  return (
    <main className="min-h-screen pb-20">
      <PageHero
        icon={LayoutDashboard}
        badgeText="Pillar B · Field Companion"
        title="MadhuMitra Beekeeper App"
        subtitle="Vernacular interface. One-button harvest recording. Zero crypto wallets required."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column (40%) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100/80 border-2 border-stone-900 px-3 py-1 rounded-full mb-3 inline-block">
                Built for Rural India
              </span>
              <h2 className="text-3xl font-extrabold text-stone-900 font-sans leading-tight">
                Designed for Field Simplicity & Offline Resilience
              </h2>
              <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed font-normal">
                Indian beekeepers operate in dense mangrove forests and remote mustard fields with zero cellular connectivity.
                MadhuMitra eliminates crypto complexities: the hardware signs the proof, and the phone acts as an offline bridge.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              {features.map((feat, idx) => {
                const Icon = feat.icon
                return (
                  <div
                    key={idx}
                    className="bg-white border-2 border-stone-900/90 rounded-sm p-5 shadow-[2px_2px_0px_#1C1917] hover:border-amber-400 transition-colors"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-sm bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                        <Icon size={20} />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-stone-900 font-sans">
                          {feat.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                          {feat.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Column (60%): Interactive Phone Mockup */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="w-full max-w-sm sm:max-w-md bg-stone-900 p-4 sm:p-5 rounded-[40px] shadow-[12px_12px_0px_#1C1917] border-4 border-stone-900">
              <div className="w-32 h-4 bg-stone-950 rounded-full mx-auto mb-3 flex items-center justify-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-stone-800"></span>
                <span className="w-10 h-1 rounded-full bg-stone-800"></span>
              </div>

              <div className="bg-[#FAF8F5] rounded-[28px] overflow-hidden border border-stone-200 flex flex-col min-h-[580px] text-stone-900 shadow-[inset_4px_4px_0px_rgba(28,25,23,0.1)]">
                <div className="px-5 py-2 flex justify-between items-center text-[10px] font-semibold text-stone-600 border-b border-stone-200/60 bg-white/70">
                  <span>09:41 AM</span>
                  <div className="flex items-center gap-1.5">
                    <span>BLE Active</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  </div>
                </div>

                <div className="p-4 sm:p-5 flex-1 overflow-y-auto space-y-8 bg-stone-50">
                  <DashboardTab />
                  
                  <div className="border-t-2 border-stone-900 pt-6">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-stone-900 mb-4 flex items-center gap-2">
                      <CheckSquare size={14} /> Quick Harvest
                    </h3>
                    <HarvestTab />
                  </div>
                  
                  <div className="border-t-2 border-stone-900 pt-6">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-stone-900 mb-4 flex items-center gap-2">
                      <Activity size={14} /> Hive Health
                    </h3>
                    <HealthTab />
                  </div>
                  
                  <div className="border-t-2 border-stone-900 pt-6">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-stone-900 mb-4 flex items-center gap-2">
                      <ScanLine size={14} /> MoGe-3 Scanner
                    </h3>
                    <CombScanTab />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
