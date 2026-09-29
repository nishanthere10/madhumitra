import React, { useRef } from 'react'
import {
  Cpu,
  Wifi,
  Database,
  BrainCircuit,
  Blocks,
  MonitorSmartphone,
  Code2,
  Banknote,
  TrendingUp,
  Zap,
  MapPin,
  Lock,
  Activity,
  CheckCircle2,
  Sparkles,
} from 'lucide-react'
import PageHero from '../components/shared/PageHero'
import { useInView } from '../hooks/useInView'
import { useCountUp } from '../hooks/useCountUp'

const techCards = [
  {
    icon: Cpu,
    category: '1. In-Apiary Smart Scale',
    badge: 'Hardware Layer',
    specs: [
      'ESP32-S3 microcontroller with physical scale sensor plate',
      'Measures net harvest weight drop instantly under the hive',
      'Creates a tamper-proof digital signature right in the field (~20ms)',
      'Stores 200+ days of data offline even in remote forests with zero signal',
    ],
  },
  {
    icon: Wifi,
    category: '2. Simple Mobile Bridge',
    badge: 'Beekeeper Mobile Layer',
    specs: [
      'Runs completely offline on the farmer’s standard Android smartphone',
      'Syncs via Bluetooth (BLE) when the farmer walks near the hive',
      'Zero crypto knowledge or confusing crypto wallets needed',
      'One-button voice-assisted harvest confirmation in regional languages',
    ],
  },
  {
    icon: Database,
    category: '3. Cooperative Cloud & Storage',
    badge: 'Backend Storage',
    specs: [
      'Stores continuous time-series sensor diary for every registered hive',
      'Permanent tamper-proof archive of NABL NMR laboratory test PDFs',
      'Rolls 1,440 daily sensor readings into one compressed 32-byte digital stamp',
      'Fast automated verification for regional FPO management',
    ],
  },
  {
    icon: BrainCircuit,
    category: '4. Hive Health & Comb Vision',
    badge: 'Smart Beekeeping AI',
    specs: [
      'MoGe-3 3D Comb Scanner: Estimates honey volume from a simple phone camera photo',
      'Cross-checks camera honey estimate against physical scale weight',
      '4 early distress alarms: Chilled brood, swarming risk, nectar flow, pesticide kill',
      'Strict Rule: AI flags alarms for beekeeper inspection; licensed labs prove purity',
    ],
  },
  {
    icon: Blocks,
    category: '5. Smart Contract Registry',
    badge: 'Public Blockchain (Polygon)',
    specs: [
      'Publicly auditable on Polygon Amoy (Chain ID 80002)',
      'Enforces mass conservation: Total honey out can never exceed honey in',
      'Locks the NABL lab test PDF hash to the exact batch volume',
      'Ultra-cheap transactions: Less than ₹0.05 per verified honey jar',
    ],
  },
  {
    icon: MonitorSmartphone,
    category: '6. Consumer Web Verification',
    badge: 'Consumer Browser (No App Needed)',
    specs: [
      'Works instantly in any mobile browser by scanning the jar label',
      'Scratch-off 6-digit PIN burns permanently on the blockchain upon first scan',
      'Displays complete origin story, single-flower source, and lab report',
      'Zero personal data collected (100% compliant with India’s DPDP Act 2023)',
    ],
  },
]

export default function TechStack() {
  const metricsRef = useRef(null)
  const inView = useInView(metricsRef)

  const c190 = useCountUp(190, inView)
  const c250 = useCountUp(250, inView)
  const c3 = useCountUp(3, inView)
  const c200 = useCountUp(200, inView)
  const c50000 = useCountUp(50, inView)
  const c4 = useCountUp(4, inView)

  return (
    <main className="min-h-screen pb-20">
      <PageHero
        icon={Cpu}
        badgeText="Technical Architecture · Plain English"
        title="Engineering Without the Fluff"
        subtitle="Every component is real, field-tested, and built for India's 38 Lakh beekeepers."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        
        {/* Section A: 6 Cards */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100 border border-stone-200 px-3 py-1 rounded-full mb-3">
              Full System Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight font-sans">
              The 6 Parts of MadhuMitra
            </h2>
            <p className="mt-3 text-stone-600 text-sm sm:text-base">
              A practical, low-cost system connecting rural wooden beehives to public blockchain verification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techCards.map((card, idx) => {
              const Icon = card.icon
              return (
                <div
                  key={idx}
                  className="bg-white border-2 border-amber-200/90 rounded-sm p-7 shadow-sm shadow-stone-900/5 hover:shadow-lg shadow-stone-900/5 hover:border-amber-400 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-sm bg-amber-100 text-amber-700 flex items-center justify-center shadow-2xs">
                        <Icon size={24} />
                      </div>
                      <span className="text-[11px] font-bold text-amber-800 bg-amber-50 border border-stone-200 px-2.5 py-1 rounded-full uppercase">
                        {card.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-stone-900 font-sans mb-4">
                      {card.category}
                    </h3>

                    <ul className="space-y-2.5 text-xs text-stone-600 mb-4">
                      {card.specs.map((spec, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                          <span className="leading-snug">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Section B: Smart Contract Rules */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100 border border-stone-200 px-3 py-1 rounded-full mb-3">
              Polygon Smart Contract Rules
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight font-sans">
              The 3 Unbreakable Code Rules
            </h2>
            <p className="mt-3 text-stone-600 text-sm sm:text-base">
              These simple mathematical checks running on the blockchain prevent middlemen from faking honey quantities or reusing certificates.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Rule 1 */}
            <div className="bg-stone-900 rounded-sm border border-stone-800 overflow-hidden shadow-lg shadow-stone-900/5 flex flex-col justify-between">
              <div className="bg-stone-950 px-4 py-3 border-b border-stone-800 flex items-center justify-between text-xs text-stone-400 font-mono">
                <div className="flex items-center gap-2">
                  <Code2 size={15} className="text-amber-700" />
                  <span className="font-semibold text-white">Rule 1: Stop Dilution</span>
                </div>
                <span className="text-[10px] text-emerald-400 font-bold">Mass Balance</span>
              </div>
              <div className="p-4 text-xs font-mono text-emerald-300 leading-relaxed overflow-x-auto bg-stone-900/90">
                <pre>{`// Rule: Output honey solids CANNOT exceed
// declared input harvest solids
require(
  outputSolids <= totalInputSolids,
  "MASS_BALANCE_VIOLATION"
);

// Enforce FSSAI moisture maximum (20%)
require(
  outputMoistureBps <= 2000,
  "MOISTURE_EXCEEDS_FSSAI_LIMIT"
);`}</pre>
              </div>
              <div className="p-3 bg-stone-950/60 border-t border-stone-800 text-[11px] text-stone-400">
                <strong>Plain English:</strong> If an aggregator harvests 500 kg of pure honey, the contract will never allow 600 kg of jars to be registered.
              </div>
            </div>

            {/* Rule 2 */}
            <div className="bg-stone-900 rounded-sm border border-stone-800 overflow-hidden shadow-lg shadow-stone-900/5 flex flex-col justify-between">
              <div className="bg-stone-950 px-4 py-3 border-b border-stone-800 flex items-center justify-between text-xs text-stone-400 font-mono">
                <div className="flex items-center gap-2">
                  <Code2 size={15} className="text-amber-700" />
                  <span className="font-semibold text-white">Rule 2: Lock Lab PDF</span>
                </div>
                <span className="text-[10px] text-emerald-400 font-bold">Certificate Tamper-Proof</span>
              </div>
              <div className="p-4 text-xs font-mono text-emerald-300 leading-relaxed overflow-x-auto bg-stone-900/90">
                <pre>{`// Lock NABL lab PDF report hash
// directly to this specific batch ID
bytes32 pdfSha256Hash = 
  sha256(labReportRawBytes);

batches[batchId].labReportHash = 
  pdfSha256Hash;`}</pre>
              </div>
              <div className="p-3 bg-stone-950/60 border-t border-stone-800 text-[11px] text-stone-400">
                <strong>Plain English:</strong> The exact PDF from the NABL testing lab is permanently locked to the batch. Nobody can photoshop or swap test numbers.
              </div>
            </div>

            {/* Rule 3 */}
            <div className="bg-stone-900 rounded-sm border border-stone-800 overflow-hidden shadow-lg shadow-stone-900/5 flex flex-col justify-between">
              <div className="bg-stone-950 px-4 py-3 border-b border-stone-800 flex items-center justify-between text-xs text-stone-400 font-mono">
                <div className="flex items-center gap-2">
                  <Code2 size={15} className="text-amber-700" />
                  <span className="font-semibold text-white">Rule 3: Single-Use PIN</span>
                </div>
                <span className="text-[10px] text-emerald-400 font-bold">Anti-Replay Seal</span>
              </div>
              <div className="p-4 text-xs font-mono text-emerald-300 leading-relaxed overflow-x-auto bg-stone-900/90">
                <pre>{`// Burn scratch-off PIN upon first scan
bytes32 commitment = keccak256(
  abi.encodePacked(nonce, jarSerial)
);

require(
  !claimedCredentials[commitment],
  "REPLAY_ATTACK_DETECTED"
);
claimedCredentials[commitment] = true;`}</pre>
              </div>
              <div className="p-3 bg-stone-950/60 border-t border-stone-800 text-[11px] text-stone-400">
                <strong>Plain English:</strong> The scratch-off PIN is permanently marked "CLAIMED". Any photocopied label instantly triggers a counterfeit alert.
              </div>
            </div>
          </div>
        </div>

        {/* Section C: Verified Metrics Grid (3x3) */}
        <div ref={metricsRef} className="bg-[#FAF8F5] border-2 border-amber-200 rounded-sm p-8 sm:p-10 shadow-sm shadow-stone-900/5">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100 border border-stone-200 px-3 py-1 rounded-full mb-2">
              Verified Harness Metrics
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-sans">
              The Real Numbers Behind HoneyChain
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-sm border border-stone-200/80 shadow-2xs">
              <div className="flex items-center gap-2 text-amber-700 mb-2">
                <Banknote size={20} />
                <span className="text-xs font-bold uppercase text-stone-400">Affordable Hardware</span>
              </div>
              <div className="text-3xl font-black text-stone-900 font-sans">
                ₹{c190}/hive/yr
              </div>
              <p className="text-xs text-stone-600 mt-1">
                94× cheaper than Western robotic hives ($1,200/hive). Built for Indian cooperatives.
              </p>
            </div>

            <div className="bg-white p-5 rounded-sm border border-stone-200/80 shadow-2xs">
              <div className="flex items-center gap-2 text-emerald-600 mb-2">
                <TrendingUp size={20} />
                <span className="text-xs font-bold uppercase text-stone-400">Farmer Price Boost</span>
              </div>
              <div className="text-3xl font-black text-stone-900 font-sans">
                {c250}%
              </div>
              <p className="text-xs text-stone-600 mt-1">
                Proven single-flower honey sells at ₹350–600/kg vs ₹190/kg bulk mixed rate.
              </p>
            </div>

            <div className="bg-white p-5 rounded-sm border border-stone-200/80 shadow-2xs">
              <div className="flex items-center gap-2 text-amber-700 mb-2">
                <Zap size={20} />
                <span className="text-xs font-bold uppercase text-stone-400">Verification Speed</span>
              </div>
              <div className="text-3xl font-black text-stone-900 font-sans">
                &lt; {c3} sec
              </div>
              <p className="text-xs text-stone-600 mt-1">
                A buyer scans the QR code and sees complete origin and lab proof in under 3 seconds.
              </p>
            </div>

            <div className="bg-white p-5 rounded-sm border border-stone-200/80 shadow-2xs">
              <div className="flex items-center gap-2 text-amber-700 mb-2">
                <Wifi size={20} />
                <span className="text-xs font-bold uppercase text-stone-400">Offline Flash Storage</span>
              </div>
              <div className="text-3xl font-black text-stone-900 font-sans">
                {c200}+ days
              </div>
              <p className="text-xs text-stone-600 mt-1">
                Stores harvest diary continuously even in Sundarbans mangrove clusters without cell signal.
              </p>
            </div>

            <div className="bg-white p-5 rounded-sm border border-stone-200/80 shadow-2xs">
              <div className="flex items-center gap-2 text-blue-600 mb-2">
                <Blocks size={20} />
                <span className="text-xs font-bold uppercase text-stone-400">Negligible Gas Cost</span>
              </div>
              <div className="text-3xl font-black text-stone-900 font-sans">
                &lt; ₹0.05/tx
              </div>
              <p className="text-xs text-stone-600 mt-1">
                Polygon Amoy rollup fees cost less than five paise per verified jar.
              </p>
            </div>

            <div className="bg-white p-5 rounded-sm border border-stone-200/80 shadow-2xs">
              <div className="flex items-center gap-2 text-amber-700 mb-2">
                <MapPin size={20} />
                <span className="text-xs font-bold uppercase text-stone-400">Target Cooperatives</span>
              </div>
              <div className="text-3xl font-black text-stone-900 font-sans">
                {c50000},000 FPOs
              </div>
              <p className="text-xs text-stone-600 mt-1">
                Total addressable agricultural and tribal beekeeping cooperatives across India.
              </p>
            </div>

            <div className="bg-white p-5 rounded-sm border border-stone-200/80 shadow-2xs">
              <div className="flex items-center gap-2 text-purple-600 mb-2">
                <Lock size={20} />
                <span className="text-xs font-bold uppercase text-stone-400">Complete Privacy</span>
              </div>
              <div className="text-3xl font-black text-stone-900 font-sans">
                Zero PII
              </div>
              <p className="text-xs text-stone-600 mt-1">
                Compliant with DPDP Act 2023. No farmer private information is ever stored on the public chain.
              </p>
            </div>

            <div className="bg-white p-5 rounded-sm border border-stone-200/80 shadow-2xs">
              <div className="flex items-center gap-2 text-emerald-600 mb-2">
                <Activity size={20} />
                <span className="text-xs font-bold uppercase text-stone-400">Health Proxy Alarms</span>
              </div>
              <div className="text-3xl font-black text-stone-900 font-sans">
                {c4} signals
              </div>
              <p className="text-xs text-stone-600 mt-1">
                Brood nest temp, daily weight curve, sound frequency, and overnight metabolic loss.
              </p>
            </div>

            <div className="bg-white p-5 rounded-sm border border-stone-200/80 shadow-2xs">
              <div className="flex items-center gap-2 text-amber-700 mb-2">
                <Database size={20} />
                <span className="text-xs font-bold uppercase text-stone-400">Data Compression</span>
              </div>
              <div className="text-3xl font-black text-stone-900 font-sans">
                1,440 → 1
              </div>
              <p className="text-xs text-stone-600 mt-1">
                All 1,440 readings per day are compressed into a single 32-byte cryptographic digital fingerprint.
              </p>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}
