import React from 'react'
import { ExternalLink } from 'lucide-react'

const papers = [
  {
    num: '1',
    author: 'Runzel, M. A. S. et al.',
    title: 'Smart Beekeeping and Hive Monitoring: A Review of Emerging Sensor Technologies and Edge-IoT Paradigms',
    journal: 'IEEE Consumer Electronics Magazine, Vol. 10(4), 2021',
    doi: '10.1109/MCE.2021.3059955',
    focus: 'Validates edge-computed temperature and acoustic signatures as reliable proxies for colony vitality.',
  },
  {
    num: '2',
    author: 'Edwards-Murphy, E. et al.',
    title: 'b+WORM: A Low-Power Autonomous In-Hive Sensor Platform for Apiary Health Telemetry',
    journal: 'IEEE Internet of Things Journal, Vol. 3(5), 2016',
    doi: '10.1109/JIOT.2016.2577785',
    focus: 'Establishes low-power sleep modes and non-invasive acoustic sensing thresholds for Apis mellifera.',
  },
  {
    num: '3',
    author: 'Kamilaris, A. et al.',
    title: 'The Rise of Blockchain Technology in Agriculture and Food Supply Chains',
    journal: 'Trends in Food Science & Technology, 91, 2019',
    doi: '10.1016/j.tifs.2019.07.034',
    focus: 'Highlights the critical "garbage in, garbage out" limitation when physical sensors are missing.',
  },
  {
    num: '4',
    author: 'Malik, S. et al.',
    title: 'TrustChain: A Trust-Enforced Blockchain Framework for Food Supply Chain Provenance',
    journal: 'IEEE Access, Vol. 9, 2021',
    doi: '10.1109/ACCESS.2021.3076585',
    focus: 'Formulates multi-actor reputation models and automated consensus checks for commodity verification.',
  },
  {
    num: '5',
    author: 'Almiani, K. et al.',
    title: 'Decentralized Provenance and Anti-Tamper Verification for Agricultural Commodities on Public Ledgers',
    journal: 'Information, 16(8), 626, 2025',
    doi: '10.3390/info16080626',
    focus: 'Proves the feasibility of single-use cryptographic commitments to defeat duplicate QR replication attacks.',
  },
]

export default function PapersList() {
  return (
    <section className="py-16 bg-white border-b border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100/80 border-2 border-stone-900 px-3 py-1 rounded-full mb-3">
            Academic Validation · Literature Base
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight font-sans">
            Peer-Reviewed Literature Foundation
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base">
            MadhuMitra's cyber-physical architecture is directly derived from peer-reviewed IEEE and food science citations.
          </p>
        </div>

        <div className="space-y-4">
          {papers.map((p) => (
            <div
              key={p.num}
              className="bg-[#FAF8F5] border-2 border-stone-900/80 rounded-sm p-6 shadow-2xs hover:border-amber-400 hover:shadow-[2px_2px_0px_#1C1917] transition-all"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <span className="w-8 h-8 rounded-lg bg-amber-500 text-stone-950 font-black text-xs flex items-center justify-center shrink-0 font-sans">
                    0{p.num}
                  </span>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-stone-900 text-sm sm:text-base">
                        {p.author}
                      </span>
                      <span className="text-stone-400 text-xs hidden sm:inline">•</span>
                      <span className="text-xs italic text-stone-600 hidden sm:inline">
                        {p.journal}
                      </span>
                    </div>
                    <h4 className="text-sm sm:text-base font-semibold text-stone-800 leading-snug font-sans">
                      "{p.title}"
                    </h4>
                    <p className="text-xs text-stone-600 mt-2 font-normal">
                      <strong>Harness Application:</strong> {p.focus}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 pl-11 md:pl-0">
                  <a
                    href={`https://doi.org/${p.doi}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-blue-600 hover:text-blue-800 bg-blue-50 border border-blue-200 px-3 py-1.5 rounded-lg transition-colors"
                  >
                    <span>DOI: {p.doi}</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
