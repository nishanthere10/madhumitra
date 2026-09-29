import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Leaf, ArrowRight, Smartphone, ShieldCheck, Cpu, Database } from 'lucide-react'

const CAROUSEL_IMAGES = [
  { src: '/images/apiary_mustard_field.jpg', alt: 'Authentic Indian apiary in a blooming yellow mustard field' },
  { src: '/images/beekeeper_holding_frame.jpg', alt: 'Indian beekeeper holding a wooden frame covered in bees' },
  { src: '/images/iot_sensor_beehive.jpg', alt: 'Sleek IoT sensor device attached to a wooden beehive' }
]

export default function HeroSection() {
  const [currentIdx, setCurrentIdx] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % CAROUSEL_IMAGES.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FAF8F5] via-[#FEF3C7]/40 to-[#FAF8F5] pt-14 pb-24 border-b border-amber-100">


      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Action */}
          <div className="lg:col-span-6 text-left">


            {/* Title */}
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tight font-sans mb-3 text-stone-900 leading-none">
              <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 bg-clip-text text-transparent">
                MadhuMitra
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-2xl md:text-3xl font-bold text-stone-800 tracking-tight font-sans mb-4">
              Trace Honey. Trust Nature.
            </p>

            {/* Body Text */}
            <p className="text-base md:text-lg text-stone-600 max-w-xl leading-relaxed mb-8 font-normal">
              India&apos;s first cyber-physical apiculture platform — combining IoT edge sensors, AI-powered smart beekeeping,
              and blockchain-anchored traceability to make honey fraud more expensive than the honey itself.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <Link
                to="/demo/dashboard"
                className="inline-flex items-center justify-center gap-2.5 bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold px-6 py-3.5 rounded-sm text-sm transition-all duration-200 hover:scale-105 shadow-md shadow-stone-900/5 hover:shadow-lg shadow-stone-900/5"
              >
                <span>Explore Demo</span>
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/consumer"
                className="inline-flex items-center justify-center gap-2.5 border border-stone-200 text-stone-900 hover:bg-stone-900 hover:text-white font-bold px-6 py-3.5 rounded-sm text-sm transition-all duration-200 hover:scale-105 shadow-md shadow-stone-900/5"
              >
                <Smartphone size={18} className="text-amber-600 hover:text-amber-700 transition-colors" />
                <span>Verify a Honey Lot</span>
              </Link>
            </div>

            {/* Pillar Feature Pills */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-stone-600">
              <div className="flex items-center gap-1.5 bg-white border border-stone-200 px-3 py-1.5 rounded-lg shadow-2xs">
                <Cpu size={14} className="text-amber-600" />
                <span>ESP32-S3 Physical Signing</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white border border-stone-200 px-3 py-1.5 rounded-lg shadow-2xs">
                <Database size={14} className="text-amber-600" />
                <span>Mass-Balance Smart Contract</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white border border-stone-200 px-3 py-1.5 rounded-lg shadow-2xs">
                <ShieldCheck size={14} className="text-emerald-600" />
                <span>Anti-Clone Scratch QR</span>
              </div>
            </div>
          </div>
          {/* Right Column: Real Apiary Photography Carousel */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-sm overflow-hidden shadow-xl shadow-stone-900/5 border-4 border-white bg-stone-900 group h-[450px]">
              {CAROUSEL_IMAGES.map((img, idx) => (
                <img
                  key={idx}
                  src={img.src}
                  alt={img.alt}
                  className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
                    idx === currentIdx ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-black/20 pointer-events-none z-20" />
              
              {/* Carousel Controls */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-30">
                {CAROUSEL_IMAGES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIdx(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all border border-stone-900 ${
                      idx === currentIdx ? 'bg-amber-500 w-6' : 'bg-white/70 hover:bg-white'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
