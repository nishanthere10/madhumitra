import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Hexagon, CheckCircle2, Box, Beaker, Link as LinkIcon, QrCode, ArrowDown, ArrowRight } from 'lucide-react'

const Tooltip = ({ text }) => (
  <div className="relative group inline-block ml-1">
    <div className="text-stone-400 hover:text-stone-600 cursor-help inline-flex items-center justify-center rounded-full border border-current w-4 h-4 text-[10px] font-bold">
      i
    </div>
    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-stone-900 text-white text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10 pointer-events-none text-center shadow-lg">
      {text}
      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-stone-900"></div>
    </div>
  </div>
)

export default function Traceability() {
  const { lotId } = useParams()
  const displayLotId = lotId || 'HC-H01-20260929-001'
  
  const [activeNode, setActiveNode] = useState(0)

  const nodes = [
    {
      title: 'HIVE H01',
      subtitle: 'Apiary: Demo Farm',
      type: 'Origin',
      icon: <Hexagon size={24} className="text-stone-900" />,
      date: 'Pre-29 Sep 2026',
      details: [
        { label: 'Device', value: 'ESP32-S3-H01' },
        { label: 'Telemetry', value: 'Active' },
      ]
    },
    {
      title: 'RAW HONEY LOT',
      subtitle: displayLotId,
      type: 'Harvest Event',
      icon: <Box size={24} className="text-stone-900" />,
      date: '29 Sep 2026 · 12:31',
      details: [
        { label: 'Harvest Quantity', value: '3.81 kg' },
        { label: 'Operator', value: 'Beekeeper-01' },
      ]
    },
    {
      title: 'PROCESSING BATCH',
      subtitle: 'PB-2026-091',
      type: 'Aggregation',
      icon: <CheckCircle2 size={24} className="text-stone-900" />,
      date: '30 Sep 2026 · 09:14',
      details: [
        { label: 'Total Input', value: '8.03 kg' },
        { label: 'Total Output', value: '7.82 kg' },
        { label: 'Mass Balance', value: 'VALID' },
      ]
    },
    {
      title: 'LABORATORY EVIDENCE',
      subtitle: 'CoA_0929.pdf',
      type: 'NABL Testing',
      icon: <Beaker size={24} className="text-stone-900" />,
      date: '30 Sep 2026 · 16:45',
      details: [
        { label: 'NMR Purity', value: 'PASS' },
        { label: 'SHA-256', value: '8a91...72df' },
        { label: 'Signature', value: 'VERIFIED' },
      ]
    },
    {
      title: 'BLOCKCHAIN ANCHOR',
      subtitle: 'Polygon Amoy',
      type: 'Immutable State',
      icon: <LinkIcon size={24} className="text-stone-900" />,
      date: '30 Sep 2026 · 16:46',
      details: [
        { label: 'Merkle Root', value: '53a7...c201', help: 'A cryptographic hash combining all farm data into one secure fingerprint.' },
        { label: 'Tx Hash', value: '0x8b2f...91ad', help: 'The permanent receipt on the Polygon blockchain that cannot be deleted or altered.' },
        { label: 'Status', value: 'CONFIRMED' },
      ]
    },
    {
      title: 'CONSUMER CREDENTIAL',
      subtitle: 'CR-000184',
      type: 'End Product',
      icon: <QrCode size={24} className="text-stone-900" />,
      date: '01 Oct 2026 · 10:00',
      details: [
        { label: 'Retail Package', value: '500g Jar' },
        { label: 'Auth Status', value: 'READY' },
      ]
    }
  ]

  return (
    <main className="min-h-screen pb-20 pt-16 bg-[#FAF8F5]">
      {/* Header */}
      <div className="bg-white border-b border-stone-200 mb-8">
        <div className="max-w-7xl mx-auto px-6 py-6 md:py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-2xl font-bold text-stone-900 uppercase" style={{ fontFamily: 'IBM Plex Sans' }}>
                Traceability Genealogy
              </h1>
              <span className="bg-amber-100 text-amber-700 border-2 border-amber-200 px-2 py-0.5 text-xs font-bold uppercase tracking-wide">
                Demo Data
              </span>
            </div>
            <p className="text-stone-500 text-sm">
              Tracking Lot: <span className="font-mono font-semibold text-stone-900">{displayLotId}</span>
            </p>
          </div>
          <Link to="/demo/dashboard" className="text-sm font-semibold text-stone-500 hover:text-stone-900">
            ← Back to Dashboard
          </Link>
        </div>
      </div>

      {/* Guided Walkthrough Timeline */}
      <div className="max-w-5xl mx-auto px-6 mb-8">
        <div className="bg-white border border-stone-200 p-6 shadow-sm shadow-stone-900/5 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex-1">
            <h3 className="font-bold text-stone-900 mb-1 flex items-center justify-center md:justify-start gap-2">
              <Hexagon size={16} className="text-amber-500" /> 1. Field
            </h3>
            <p className="text-xs text-stone-500">Harvested & cryptographically signed at the apiary.</p>
          </div>
          <ArrowRight className="hidden md:block text-stone-300 flex-shrink-0" />
          <ArrowDown className="md:hidden text-stone-300 flex-shrink-0" />
          <div className="flex-1">
            <h3 className="font-bold text-stone-900 mb-1 flex items-center justify-center md:justify-start gap-2">
              <Beaker size={16} className="text-amber-500" /> 2. Tested
            </h3>
            <p className="text-xs text-stone-500">NABL lab verified for purity (NMR, C4 Sugars).</p>
          </div>
          <ArrowRight className="hidden md:block text-stone-300 flex-shrink-0" />
          <ArrowDown className="md:hidden text-stone-300 flex-shrink-0" />
          <div className="flex-1">
            <h3 className="font-bold text-stone-900 mb-1 flex items-center justify-center md:justify-start gap-2">
              <QrCode size={16} className="text-amber-500" /> 3. Bottled
            </h3>
            <p className="text-xs text-stone-500">Secured on Polygon blockchain. Ready for retail.</p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Genealogy Tree */}
        <div className="md:col-span-5 flex flex-col items-center">
          {nodes.map((node, i) => (
            <React.Fragment key={i}>
              <div 
                onClick={() => setActiveNode(i)}
                className={`w-full max-w-sm cursor-pointer border-2 transition-all duration-200 group ${activeNode === i ? 'border-amber-500 bg-amber-50 shadow-[6px_6px_0px_#F59E0B] -translate-y-1' : 'border-stone-900 bg-white hover:bg-stone-50'}`}
              >
                <div className="p-4 flex items-start gap-4">
                  <div className={`w-12 h-12 flex-shrink-0 flex items-center justify-center border border-stone-200 bg-white ${activeNode === i ? 'shadow-sm shadow-stone-900/5' : ''}`}>
                    {node.icon}
                  </div>
                  <div>
                    <p className={`text-xs font-bold uppercase tracking-wide mb-1 ${activeNode === i ? 'text-amber-700' : 'text-stone-500'}`}>
                      {node.type}
                    </p>
                    <h3 className="font-bold text-stone-900">{node.title}</h3>
                    <p className="font-mono text-xs text-stone-600 mt-1">{node.subtitle}</p>
                  </div>
                </div>
              </div>
              
              {/* Connector Arrow */}
              {i < nodes.length - 1 && (
                <div className="py-2 text-stone-300">
                  <ArrowDown size={24} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Node Detail Panel */}
        <div className="md:col-span-7">
          <div className="bg-white border border-stone-200 p-8 shadow-lg shadow-stone-900/5 sticky top-24">
            
            <div className="inline-flex items-center gap-2 bg-stone-100 border border-stone-200 rounded-sm px-3 py-1 mb-6">
              {nodes[activeNode].icon}
              <span className="text-stone-600 text-xs font-bold uppercase tracking-wide">
                {nodes[activeNode].type} Node
              </span>
            </div>

            <h2 className="text-2xl font-bold text-stone-900 mb-2">{nodes[activeNode].title}</h2>
            <p className="font-mono text-lg text-stone-600 mb-6">{nodes[activeNode].subtitle}</p>

            <div className="flex items-center gap-2 mb-8">
              <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-sm px-2 py-1 text-xs font-bold uppercase tracking-wide">
                ✓ Verified Record
              </span>
              <span className="text-sm font-mono text-stone-500">
                {nodes[activeNode].date}
              </span>
            </div>

            <div className="border-t-2 border-stone-100 pt-6 space-y-4">
              <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wide mb-4">Node Metadata</h3>
              
              {nodes[activeNode].details.map((detail, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-stone-100 last:border-0">
                  <span className="text-stone-500 font-medium mb-1 sm:mb-0 flex items-center">
                    {detail.label}
                    {detail.help && <Tooltip text={detail.help} />}
                  </span>
                  <span className={`font-mono font-bold ${
                    detail.value === 'VALID' || detail.value === 'VERIFIED' || detail.value === 'CONFIRMED' || detail.value === 'PASS' 
                      ? 'text-emerald-600' 
                      : 'text-stone-900'
                  }`}>
                    {detail.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Contextual Action Button based on node */}
            {activeNode === 3 && (
              <div className="mt-8 pt-6 border-t-2 border-stone-100">
                <button className="w-full bg-stone-100 hover:bg-stone-200 text-stone-900 font-bold px-4 py-3 border-2 border-stone-300 transition-colors flex items-center justify-center gap-2">
                  <Beaker size={18} /> View Certificate of Analysis (PDF)
                </button>
              </div>
            )}
            
            {activeNode === 4 && (
              <div className="mt-8 pt-6 border-t-2 border-stone-100">
                <a href="#" className="w-full bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold px-4 py-3 border-2 border-blue-200 transition-colors flex items-center justify-center gap-2">
                  <LinkIcon size={18} /> View on PolygonScan Explorer ↗
                </a>
              </div>
            )}

          </div>
        </div>

      </div>
    </main>
  )
}
