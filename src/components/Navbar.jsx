import { useState, useEffect } from 'react'
import { Menu, X, Hexagon } from 'lucide-react'

const links = [
  { label: 'Problem', href: '#problem' },
  { label: 'Solution', href: '#solution' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Beekeeper App', href: '#beekeeper' },
  { label: 'Consumer App', href: '#consumer' },
  { label: 'Impact', href: '#impact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'nav-blur shadow-[8px_8px_0px_#1C1917]' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-amber-400 rounded-lg flex items-center justify-center">
            <span className="text-stone-900 font-black text-sm">HC</span>
          </div>
          <div>
            <span className="text-white font-bold text-lg">HoneyChain</span>
            <span className="text-amber-400 text-xs block leading-none">MadhuMitra</span>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-6">
          {links.map(l => (
            <a key={l.href} href={l.href}
              className="text-stone-300 hover:text-amber-400 text-sm font-medium transition-colors duration-200">
              {l.label}
            </a>
          ))}
          <a href="#beekeeper"
            className="bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold text-sm px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105">
            View Demo
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden nav-blur border-t border-stone-700 px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-stone-300 hover:text-amber-400 font-medium transition-colors">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
