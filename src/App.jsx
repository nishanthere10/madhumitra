import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Agentation } from 'agentation'
import Navbar from './components/shared/Navbar'
import Footer from './components/shared/Footer'
import ScrollToTop from './components/shared/ScrollToTop'

import Home from './pages/Home'
import Solution from './pages/Solution'
import BeekeeperApp from './pages/BeekeeperApp'
import ConsumerApp from './pages/ConsumerApp'
import Research from './pages/Research'
import TechStack from './pages/TechStack'
import About from './pages/About'

import BeekeeperDashboard from './pages/BeekeeperDashboard'
import HiveMonitoring from './pages/HiveMonitoring'
import HarvestCandidate from './pages/HarvestCandidate'
import CreateLot from './pages/CreateLot'
import Traceability from './pages/Traceability'
import FPODashboard from './pages/FPODashboard'
import SystemStatus from './pages/SystemStatus'

export default function App() {
  const isDev = import.meta.env.DEV || process.env.NODE_ENV === 'development'

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#FAF8F5] flex flex-col text-stone-900 selection:bg-amber-200 selection:text-stone-900 relative z-0">
        <div className="fixed inset-0 z-[-1] opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("/images/bg5.svg")', backgroundSize: '300px', backgroundRepeat: 'repeat' }}></div>
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solution" element={<Solution />} />
            <Route path="/beekeeper" element={<BeekeeperApp />} />
            <Route path="/consumer" element={<ConsumerApp />} />
            <Route path="/research" element={<Research />} />
            <Route path="/tech" element={<TechStack />} />
            <Route path="/about" element={<About />} />
            {/* Demo Routes */}
            <Route path="/demo/dashboard" element={<BeekeeperDashboard />} />
            <Route path="/demo/hives/:hiveId" element={<HiveMonitoring />} />
            <Route path="/demo/harvest-candidates/:candidateId" element={<HarvestCandidate />} />
            <Route path="/demo/lots/create" element={<CreateLot />} />
            <Route path="/demo/traceability/:lotId" element={<Traceability />} />
            <Route path="/fpo" element={<FPODashboard />} />
            <Route path="/tech/status" element={<SystemStatus />} />
          </Routes>
        </div>
        <Footer />
        {isDev && <Agentation endpoint="http://localhost:4747" />}
      </div>
    </BrowserRouter>
  )
}
