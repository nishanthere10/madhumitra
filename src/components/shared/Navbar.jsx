import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Hexagon, Menu, X, ShieldCheck, Sparkles } from 'lucide-react'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Platform Architecture', path: '/solution' },
  { name: 'Beekeeper Portal', path: '/beekeeper' },
  { name: 'Consumer QR', path: '/consumer' },
  { name: 'Research & Proof', path: '/research' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FAF8F5] border-b border-amber-200 transition-all">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Emblem */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 rounded-sm bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 flex items-center justify-center text-stone-950 shadow-sm shadow-stone-900/5 group-hover:scale-105 transition-transform duration-200">
            <Hexagon fill="#0F172A" color="#F59E0B" strokeWidth={2} size={20} />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-lg tracking-tight text-stone-900 group-hover:text-amber-600 transition-colors font-sans">
                MadhuMitra
              </span>
              <span className="text-[10px] font-bold tracking-wider uppercase bg-amber-100 text-amber-900 border border-stone-200 px-1.5 py-0.2 rounded-md font-mono">
                SIH26021
              </span>
            </div>
            <span className="text-[11px] text-stone-500 font-medium tracking-tight -mt-0.5">
              HoneyChain Apiculture Platform
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 bg-white border border-stone-200 p-1 rounded-sm shadow-md shadow-stone-900/5">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-sm text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-amber-500 text-stone-950 shadow-sm shadow-stone-900/5'
                    : 'text-stone-600 hover:text-amber-700 hover:bg-amber-50/80'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/consumer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 font-bold px-4 py-2 rounded-sm text-xs shadow-md shadow-stone-900/5 hover:shadow-lg shadow-stone-900/5 transition-all hover:scale-105 active:scale-95"
          >
            <ShieldCheck size={15} />
            <span>Verify Honey Jar</span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-sm text-stone-700 hover:bg-amber-100/60 hover:text-amber-700 transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-amber-200 bg-[#FAF8F5] px-4 pt-3 pb-6 space-y-1.5 shadow-[8px_8px_0px_#1C1917]">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-2.5 rounded-sm text-sm font-semibold transition-colors ${
                  isActive
                    ? 'bg-amber-500 text-stone-950 shadow-sm shadow-stone-900/5'
                    : 'text-stone-700 hover:bg-amber-50 hover:text-amber-700'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div className="pt-2">
            <Link
              to="/consumer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold px-4 py-2.5 rounded-sm text-sm shadow-md shadow-stone-900/5"
            >
              <ShieldCheck size={16} />
              <span>Verify Honey Jar</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
