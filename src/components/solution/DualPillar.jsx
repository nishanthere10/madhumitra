import React from 'react'
import { Link2, ScanLine, CheckCircle2, Cpu, ShieldCheck, Sparkles, Layers, Activity, Lock } from 'lucide-react'

export default function DualPillar() {
  return (
    <section className="py-20 bg-[#FAF8F5] border-b border-amber-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading conforming to DESIGN.md */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-stone-200 rounded-full px-4 py-1.5 mb-4">
            <span className="text-amber-700 text-xs font-semibold uppercase tracking-wide">
              Core Cyber-Physical Symbiosis
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-stone-900 mb-3 font-sans tracking-tight">
            Dual-Pillar Architecture
          </h2>
          <div className="w-12 h-1 bg-amber-500 rounded mx-auto mb-4" />
          <p className="text-stone-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Traceability without farmer empowerment fails; sensors without cryptographic trust can be forged.
            MadhuMitra binds physical hardware telemetry with on-device AI into an unbreakable verification loop.
          </p>
        </div>

        {/* 2-Pillar Elevated Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Pillar A: Cryptographic Edge Traceability */}
          <div className="bg-white rounded-sm border-2 border-amber-300 overflow-hidden shadow-md shadow-stone-900/5 hover:shadow-lg hover:shadow-amber-900/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
            <div>
              {/* High-Impact Photographic Header */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-stone-950">
                <img
                  src="/images/hardware_scale.jpg"
                  alt="ESP32-S3 IoT scale load cell hardware attached to outdoor beehive"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-transparent" />
                
                {/* Top Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 bg-amber-500 text-stone-950 font-black text-xs px-3 py-1.5 rounded-sm shadow-lg shadow-stone-900/5 font-sans">
                    <Cpu size={14} /> PILLAR A
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-emerald-500 text-white font-mono text-[11px] font-bold px-3 py-1 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                    Field Deployed
                  </span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <div className="text-sm font-bold font-mono text-amber-300 mb-0.5">
                    ESP32-S3 + HX711 Microcontroller Scale
                  </div>
                  <div className="text-xs text-stone-300 font-medium">
                    1 IoT scale protects a 10-hive cluster at ≤₹190/hive/yr
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-7 sm:p-8">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 border border-stone-200 flex items-center justify-center text-amber-700">
                    <Link2 size={18} />
                  </div>
                  <h3 className="text-2xl font-bold text-stone-900 font-sans">
                    Physical Traceability (Hive to Jar)
                  </h3>
                </div>

                <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  ESP32-S3 load-cell scale detects the precise extraction weight drop. It signs the harvest payload with <strong>Digital Signature in &lt;20 ms</strong>, stores offline buffers in Offline Storage for up to 200 days, and prevents aggregators from creating synthetic volume.
                </p>

                {/* Micro Key Feature Rows */}
                <div className="space-y-3 mb-6 bg-[#FAF8F5] p-4 rounded-sm border border-stone-200">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={17} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-stone-700 font-medium">
                      <strong>Built for the Wild:</strong> Every BME280 sensor is shielded by a 15-micron sintered bronze cap, blocking beeswax and propolis from suffocating the telemetry.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={17} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-stone-700 font-medium">
                      <strong>Hardware-Signed Extraction:</strong> Zero manual typing; weight drop triggers automatic Digital Signature.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={17} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-stone-700 font-medium">
                      <strong>200+ Days Offline Buffer:</strong> Syncs encrypted readings automatically when an SHG officer phone connects via BLE.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={17} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-stone-700 font-medium">
                      <strong>Mass-Balance Invariant:</strong> Smart contract blocks bottling more honey than verified by apiary scale records.
                    </span>
                  </div>
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-stone-100">
                  {['ESP32-S3', 'HX711 Scale', 'Digital Signature', 'Polygon Amoy', 'Offline Storage (200d)', 'Secure Audit Trail'].map((chip, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono font-semibold bg-amber-50 text-amber-900 border border-stone-200 px-2.5 py-1 rounded-lg"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Honest Boundary Footer */}
            <div className="px-7 sm:px-8 pb-7">
              <div className="bg-amber-50/90 border border-stone-200 rounded-sm p-3.5">
                <p className="text-amber-900 text-xs font-medium leading-relaxed">
                  ⚠️ <strong>Boundary:</strong> Proves physical extraction happened & stops artificial volume injection. Does not test chemical purity (Layer 3 NABL lab does that).
                </p>
              </div>
            </div>
          </div>

          {/* Pillar B: Smart Beekeeping 3D Vision AI */}
          <div className="bg-white rounded-sm border-2 border-blue-200 overflow-hidden shadow-md shadow-stone-900/5 hover:shadow-[6px_6px_0px_#3B82F6] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
            <div>
              {/* High-Impact Photographic Header */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-stone-950">
                <img
                  src="/images/comb_inspection.jpg"
                  alt="Indian beekeeper inspecting honeycomb frame with active bees"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-transparent" />
                
                {/* Top Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 bg-blue-600 text-white font-black text-xs px-3 py-1.5 rounded-sm shadow-lg shadow-stone-900/5 font-sans">
                    <Sparkles size={14} /> PILLAR B
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-blue-500 text-white font-mono text-[11px] font-bold px-3 py-1 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    Zero Extra Sensors
                  </span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <div className="text-sm font-bold font-mono text-blue-300 mb-0.5">
                    Edge Vision AI 3D Comb Reconstruction
                  </div>
                  <div className="text-xs text-stone-300 font-medium">
                    Runs offline on Android via lightweight ONNX / TFLite runtime
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-7 sm:p-8">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 border border-blue-300 flex items-center justify-center text-blue-700">
                    <ScanLine size={18} />
                  </div>
                  <h3 className="text-2xl font-bold text-stone-900 font-sans">
                    Smart Beekeeping (3D Comb AI)
                  </h3>
                </div>

                <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  An optical scan is taken of an extracted frame. The on-device vision model reconstructs 3D cell depth, checks wax capping completeness (&gt;85% required), and flags early queen loss or swarm risks 3–5 days in advance.
                </p>

                {/* Micro Key Feature Rows */}
                <div className="space-y-3 mb-6 bg-stone-50 p-4 rounded-sm border border-stone-200">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={17} className="text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-stone-700 font-medium">
                      <strong>Capping & Ripeness Detection:</strong> Verifies beeswax capping to ensure honey moisture is under 20% before extraction.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={17} className="text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-stone-700 font-medium">
                      <strong>Early Swarm Warning:</strong> Audio frequency shifts and queen cell patterns trigger alarms before losing ₹7,000 colonies.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={17} className="text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-stone-700 font-medium">
                      <strong>Optical-Weight Cross Check:</strong> Estimated visual frame volume is cross-checked against scale harvest weight (Δ &lt; 0.3 kg).
                    </span>
                  </div>
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-stone-100">
                  {['MoGe-3 Depth', 'Lotus-2 Normals', 'MobileNetV3', 'ONNX Runtime', 'Audio FFT (230Hz)', 'Offline PWA'].map((chip, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono font-semibold bg-blue-50 text-blue-900 border border-blue-200 px-2.5 py-1 rounded-lg"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Honest Boundary Footer */}
            <div className="px-7 sm:px-8 pb-7">
              <div className="bg-blue-50/90 border border-blue-200 rounded-sm p-3.5">
                <p className="text-blue-950 text-xs font-medium leading-relaxed">
                  ⚠️ <strong>Boundary:</strong> Flags behavioral distress indicators to assist beekeepers; does not replace veterinary disease diagnosis.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
