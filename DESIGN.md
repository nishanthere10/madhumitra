# MADHUMITRA UI — DESIGN SYSTEM REFERENCE
> Keep this file open while writing code. Every color, spacing, component pattern, and animation is defined here.

---

## 1. COLORS

### Full Palette with CSS Variable Names
```css
/* Add these to :root in index.css */
:root {
  /* Backgrounds */
  --bg-primary:     #FAF8F5; /* warm ivory — main page background */
  --bg-white:       #FFFFFF; /* pure white — card backgrounds */
  --bg-amber-wash:  #FEF3C7; /* pale amber — section tint, badge backgrounds */
  --bg-amber-light: #FDE68A; /* amber 200 — borders, dividers */

  /* Text */
  --text-primary:   #1C1917; /* stone 900 — headings, body */
  --text-secondary: #57534E; /* stone 500 — subheadings, captions */
  --text-muted:     #A8A29E; /* stone 400 — placeholder, metadata */
  --text-amber:     #D97706; /* amber 700 — amber text on white */

  /* Accent */
  --amber-400:      #FBBF24; /* light amber — subtle highlights */
  --amber-500:      #F59E0B; /* primary amber — buttons, badges, icons */
  --amber-600:      #D97706; /* dark amber — hover states, text */
  --amber-700:      #B45309; /* darkest amber — borders on colored bg */

  /* Semantic */
  --success:        #10B981; /* emerald — ✅ verified, healthy */
  --danger:         #EF4444; /* red — ❌ counterfeit, alert */
  --warning:        #F97316; /* orange — ⚠️ alert, borderline */
  --info:           #3B82F6; /* blue — info links, blockchain explorer */

  /* Shadows */
  --shadow-card:    4px 4px 0px rgba(28, 25, 23, 1);
  --shadow-hover:   6px 6px 0px rgba(245, 158, 11, 1);
  --shadow-strong:  8px 8px 0px rgba(28, 25, 23, 1);
}
```

### Section Background Alternation Pattern
```
Section 1 (Hero):        gradient #FAF8F5 → #FEF3C7
Section 2 (Problem):     #FFFFFF
Section 3 (Solution):    #FAF8F5
Section 4 (How It Works):#FFFFFF
Section 5 (Beekeeper):   #FAF8F5
Section 6 (Consumer):    #FFFFFF
Section 7 (Tech Stack):  #FAF8F5
Section 8 (Impact):      #FFFFFF
Footer:                  #0F172A (only dark element on the page)
```

### Color Usage Rules
| Element | Color Token |
|---------|-------------|
| Primary CTA button | `bg-amber-500` text `text-stone-900` |
| Secondary CTA button | `border-amber-500 text-amber-600` |
| Section heading | `text-stone-900` |
| Card body text | `text-stone-500` |
| Muted caption | `text-stone-400` |
| Success badge | `bg-emerald-50 text-emerald-700 border-emerald-200` |
| Danger badge | `bg-red-50 text-red-700 border-red-200` |
| Warning badge | `bg-orange-50 text-orange-700 border-orange-200` |
| Info badge | `bg-blue-50 text-blue-700 border-blue-200` |
| Amber accent line | `bg-amber-500 h-1 w-12 rounded` (under headings) |

---

## 2. TYPOGRAPHY

### Font Loading (add to index.html <head>)
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### Font Usage Rules
```css
font-family: 'IBM Plex Sans', sans-serif;  /* ALL headings h1-h4 */
font-family: 'IBM Plex Sans', sans-serif;  /* ALL body text, labels, buttons */
font-family: 'JetBrains Mono', monospace;  /* hash values, tx IDs, code, DOIs */
```

### Type Scale (Tailwind classes)
```
Hero title (MadhuMitra):  text-6xl md:text-8xl font-black   (IBM Plex Sans)
Hero subtitle:            text-2xl md:text-3xl font-semibold (IBM Plex Sans)
Section heading:          text-3xl md:text-4xl font-bold     (IBM Plex Sans)
Section subheading:       text-lg md:text-xl font-medium     (IBM Plex Sans)
Card title:               text-lg font-bold                   (IBM Plex Sans)
Card body:                text-sm md:text-base font-normal   (IBM Plex Sans)
Caption / source:         text-xs font-normal text-stone-400 (IBM Plex Sans)
Monospace data:           text-xs md:text-sm font-mono       (JetBrains Mono)
Button text:              text-sm font-bold                   (IBM Plex Sans)
Badge text:               text-xs font-bold uppercase tracking-wider (IBM Plex Sans)
```

### Heading Pattern (every major section)
```jsx
<div className="text-center mb-12">
  <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 
                  rounded-full px-4 py-1.5 mb-4">
    <span className="text-amber-600 text-xs font-semibold uppercase tracking-wide">
      Section Label
    </span>
  </div>
  <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-3"
      style={{fontFamily: 'IBM Plex Sans'}}>
    Main Section Heading
  </h2>
  <div className="w-12 h-1 bg-amber-500 mx-auto mb-4" />
  <p className="text-stone-500 text-lg max-w-2xl mx-auto">
    Subheading / supporting text.
  </p>
</div>
```

---

## 3. SPACING & LAYOUT

### Page Layout
```
Max width:        max-w-7xl mx-auto
Section padding:  px-6 md:px-12 py-20 md:py-28
Card padding:     p-6 md:p-8
Grid gaps:        gap-6 md:gap-8
```

### Responsive Grid Patterns
```
2 columns:   grid grid-cols-1 md:grid-cols-2 gap-8
3 columns:   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
4 columns:   grid grid-cols-2 md:grid-cols-4 gap-6
6 cards:     grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6
```

---

## 4. COMPONENT PATTERNS

### Standard Card
```jsx
<div className="bg-white border-2 border-stone-900 p-6 md:p-8
                shadow-[4px_4px_0px_#1C1917]
                hover:shadow-[6px_6px_0px_#F59E0B]
                hover:-translate-y-0.5
                transition-all duration-200">
  {/* content */}
</div>
```

### Amber Accent Card (highlighted/featured)
```jsx
<div className="bg-amber-50 border-2 border-amber-500 p-6
                shadow-[4px_4px_0px_#F59E0B] relative overflow-hidden">
  <div className="absolute top-0 left-0 w-1.5 h-full bg-amber-500" />
  {/* content */}
</div>
```

### Primary Button
```jsx
<button className="bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold
                   px-6 py-3 border-2 border-stone-900 text-sm
                   transition-all duration-200 hover:scale-105
                   shadow-[4px_4px_0px_#1C1917] hover:shadow-[6px_6px_0px_#1C1917]">
  Button Label
</button>
```

### Secondary (Outline) Button
```jsx
<button className="border-2 border-stone-900 text-stone-900 hover:bg-stone-900
                   hover:text-white font-bold px-6 py-3 text-sm
                   shadow-[4px_4px_0px_#1C1917] transition-all duration-200">
  Button Label
</button>
```

### Ghost Button (on dark backgrounds like footer)
```jsx
<button className="border border-white/30 text-white hover:bg-white/10
                   font-medium px-5 py-2.5 rounded-xl text-sm
                   transition-all duration-200">
  Button Label
</button>
```

### Pill Badge
```jsx
{/* Amber badge */}
<span className="inline-flex items-center gap-1 bg-amber-100 text-amber-700
                 border border-amber-200 rounded-full px-3 py-1 text-xs font-semibold">
  🐝 Label
</span>

{/* Success badge */}
<span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700
                 border border-emerald-200 rounded-full px-3 py-1 text-xs font-semibold">
  ✅ Verified
</span>

{/* Danger badge */}
<span className="inline-flex items-center gap-1 bg-red-50 text-red-700
                 border border-red-200 rounded-full px-3 py-1 text-xs font-semibold">
  🔴 Alert
</span>
```

### Stat / Metric Card
```jsx
<div className="bg-white rounded-2xl border border-amber-100 p-6 text-center
                shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
  <div className="text-4xl font-black text-amber-600 mb-1"
       style={{fontFamily: 'Space Grotesk'}}>
    77%
  </div>
  <div className="text-slate-700 font-medium text-sm mb-1">
    Short description
  </div>
  <div className="text-slate-400 text-xs">
    Source citation
  </div>
</div>
```

### Numbered Step Card (for How It Works)
```jsx
<div className="relative bg-white rounded-2xl border border-amber-100 p-6
                shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
  {/* Step number */}
  <div className="absolute -top-4 -left-2 w-9 h-9 bg-amber-500 rounded-full
                  flex items-center justify-center shadow-md">
    <span className="text-white font-black text-sm">1</span>
  </div>
  {/* Actor badge */}
  <div className="mb-3 mt-2">
    <span className="text-xs font-semibold text-amber-600 bg-amber-50
                     border border-amber-200 rounded-full px-3 py-1">
      Actor: Beekeeper
    </span>
  </div>
  <h3 className="font-bold text-slate-900 mb-2">Stage Title</h3>
  <p className="text-slate-600 text-sm">Description text</p>
  {/* Tech note */}
  <div className="mt-3 pt-3 border-t border-slate-100">
    <p className="text-xs font-mono text-slate-500">
      ESP32-S3 → ECDSA sign → LittleFS buffer
    </p>
  </div>
</div>
```

### Phone Mockup Frame (for App sections)
```jsx
<div className="relative mx-auto" style={{width: '320px'}}>
  {/* Phone outer */}
  <div className="bg-slate-800 rounded-[3rem] p-2 shadow-2xl">
    {/* Notch */}
    <div className="bg-slate-900 rounded-[2.5rem] overflow-hidden">
      <div className="flex justify-center pt-3 pb-1">
        <div className="w-20 h-1.5 bg-slate-700 rounded-full" />
      </div>
      {/* Screen content */}
      <div className="bg-[#FAF8F5] min-h-[560px] p-4">
        {/* App content goes here */}
      </div>
    </div>
  </div>
</div>
```

### App Tab Bar (inside Phone Mockup)
```jsx
<div className="flex border-b border-slate-200 mb-4 overflow-x-auto">
  {['Dashboard', 'Harvest', 'Health', 'Comb Scan'].map((tab, i) => (
    <button
      key={tab}
      onClick={() => setActiveTab(i)}
      className={`flex-shrink-0 px-3 py-2 text-xs font-semibold border-b-2 transition-colors
        ${activeTab === i
          ? 'border-amber-500 text-amber-600'
          : 'border-transparent text-slate-400 hover:text-slate-600'}`}>
      {tab}
    </button>
  ))}
</div>
```

### Hive Status Row (inside Beekeeper Dashboard)
```jsx
{/* Healthy */}
<div className="flex items-center justify-between py-2 px-3 rounded-lg
                bg-emerald-50 border border-emerald-100 mb-2">
  <span className="font-mono text-xs text-slate-700">Hive #12</span>
  <span className="text-xs text-slate-600">38.2 kg</span>
  <span className="text-xs text-slate-600">34.1°C</span>
  <span className="text-xs font-semibold text-emerald-600">● Healthy</span>
</div>

{/* Warning */}
<div className="flex items-center justify-between py-2 px-3 rounded-lg
                bg-orange-50 border border-orange-100 mb-2">
  <span className="font-mono text-xs text-slate-700">Hive #23</span>
  <span className="text-xs text-slate-600">41.5 kg</span>
  <span className="text-xs text-slate-600">31.2°C</span>
  <span className="text-xs font-semibold text-orange-600">⚠ Temp Low</span>
</div>

{/* Alert */}
<div className="flex items-center justify-between py-2 px-3 rounded-lg
                bg-red-50 border border-red-100 mb-2">
  <span className="font-mono text-xs text-slate-700">Hive #07</span>
  <span className="text-xs text-slate-600">28.4 kg</span>
  <span className="text-xs text-slate-600">34.5°C</span>
  <span className="text-xs font-semibold text-red-600">🔴 Alert</span>
</div>
```

### Lab Result Row (Consumer App)
```jsx
<div className="space-y-1.5">
  {[
    { label: 'NMR Purity', value: '99.4%', pass: true },
    { label: 'C4 Sugars', value: '1.2%', pass: true },
    { label: 'SMR (Rice Marker)', value: 'ABSENT', pass: true },
    { label: 'Moisture', value: '17.2%', pass: true },
    { label: 'HMF', value: '22.3 mg/kg', pass: true },
  ].map(item => (
    <div key={item.label}
         className="flex items-center justify-between py-1.5 px-3
                    bg-slate-50 rounded-lg text-xs">
      <span className="text-slate-600 font-medium">{item.label}</span>
      <div className="flex items-center gap-2">
        <span className="font-mono text-slate-800">{item.value}</span>
        <span className={item.pass ? 'text-emerald-600' : 'text-red-600'}>
          {item.pass ? '✅' : '❌'}
        </span>
      </div>
    </div>
  ))}
</div>
```

### Blockchain Hash Display
```jsx
<div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
  <p className="text-xs text-slate-500 mb-1">Polygon Transaction</p>
  <p className="font-mono text-xs text-blue-600 break-all">
    0x7c12...44aa
  </p>
  <a href="#" className="text-xs text-blue-500 hover:underline mt-1 inline-block">
    View on PolygonScan →
  </a>
</div>
```

### Breakpoint Warning Card (Problem Section)
```jsx
<div className="flex gap-4 p-5 bg-white rounded-2xl border border-red-100
                shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
  <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full
                  flex items-center justify-center text-red-600 font-bold text-sm">
    1
  </div>
  <div>
    <h4 className="font-semibold text-slate-900 text-sm mb-1">
      The Aggregation Black Hole
    </h4>
    <p className="text-slate-600 text-xs leading-relaxed">
      Aggregators mix pure honey with cheap ₹40/kg syrup in 200-litre drums.
      Origin is permanently erased.
    </p>
  </div>
</div>
```

### Layer Card (Solution Section — 4 Layers)
```jsx
<div className="bg-white rounded-2xl border border-amber-100 p-6
                shadow-[0_1px_3px_rgba(0,0,0,0.06)]
                hover:shadow-[0_4px_12px_rgba(245,158,11,0.12)]
                transition-all duration-200">
  {/* Layer number */}
  <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center mb-4">
    <span className="text-white font-black text-lg">1</span>
  </div>
  <h3 className="font-bold text-slate-900 mb-2" style={{fontFamily:'Space Grotesk'}}>
    Physical Evidence Anchor
  </h3>
  <p className="text-slate-600 text-sm mb-3">
    Captures multi-sensor hive telemetry to compute a Harvest Plausibility Score.
  </p>
  {/* Boundary warning */}
  <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
    <p className="text-amber-700 text-xs font-medium">
      ⚠️ Does NOT test chemical purity. Proves physical extraction happened.
    </p>
  </div>
</div>
```

### Tech Stack Card
```jsx
<div className="bg-white rounded-2xl border border-amber-100 p-6
                shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
  {/* Icon + Title */}
  <div className="flex items-center gap-3 mb-4">
    <div className="w-10 h-10 bg-amber-50 border border-amber-200 rounded-xl
                    flex items-center justify-center">
      <Cpu className="text-amber-600" size={20} />
    </div>
    <h3 className="font-bold text-slate-900 text-sm">Edge Sensing</h3>
  </div>
  {/* Chip list */}
  <div className="flex flex-wrap gap-2">
    {['ESP32-S3', 'HX711', 'BME280', 'INMP441', 'LittleFS', 'ECDSA'].map(chip => (
      <span key={chip}
            className="bg-slate-100 text-slate-700 rounded-lg px-2 py-1
                       text-xs font-mono font-medium">
        {chip}
      </span>
    ))}
  </div>
</div>
```

---

## 5. ANIMATIONS

### Fade-in-up on Scroll (use IntersectionObserver)
```jsx
// Hook
function useInView(ref) {
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return inView
}

// Usage on any element
<div ref={ref}
     className={`transition-all duration-700 ${
       inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
     }`}>
```

### Staggered Children (add delay per index)
```jsx
style={{ transitionDelay: `${index * 100}ms` }}
```

### Count-up Animation (for stat numbers)
```jsx
function useCountUp(target, inView, duration = 1500) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target])
  return count
}
// Usage: <span>{useCountUp(77, inView)}%</span>
```

### Button hover pulse (amber glow)
```css
/* In index.css */
.btn-primary:hover {
  box-shadow: 0 0 0 4px rgba(245, 158, 11, 0.2);
}
```

### Floating animation (hero elements, icons)
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-8px); }
}
.float { animation: float 3s ease-in-out infinite; }
.float-delay { animation: float 3s ease-in-out infinite 1s; }
```

### Scan line animation (QR / MoGe-3 section)
```css
@keyframes scan {
  0%   { top: 5%; opacity: 1; }
  100% { top: 90%; opacity: 0.4; }
}
.scan-line {
  position: absolute;
  left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, #F59E0B, transparent);
  animation: scan 2s ease-in-out infinite alternate;
}
```

### Tab switch (crossfade)
```jsx
<div className={`transition-all duration-300 ${
  activeTab === i ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 hidden'
}`}>
```

---

## 6. HONEYCOMB PATTERN (Hero Background)

### SVG Pattern (inline in Hero background)
```jsx
// Place as an absolutely positioned SVG layer in the Hero section
<div className="absolute inset-0 opacity-[0.04] pointer-events-none overflow-hidden">
  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="honeycomb" x="0" y="0" width="56" height="100" patternUnits="userSpaceOnUse">
        <path d="M28 66L0 50V16L28 0l28 16v34L28 66zm0-2.4L54 49.2V17.6L28 2.4 2 17.6v31.6L28 63.6z"
              fill="#F59E0B"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#honeycomb)"/>
  </svg>
</div>
```

---

## 7. NAVBAR DESIGN

```
State 1 (top of page):
  bg: transparent
  text: white (for hero dark fallback if needed) OR slate-900 (on light hero)

State 2 (scrolled > 40px):
  bg: white with border-b border-slate-100 shadow-sm

Transition: transition-all duration-300

Height: h-16 (64px)
```

```jsx
// Amber "Government strip" above navbar (only on desktop)
<div className="hidden md:flex bg-amber-500 text-slate-900 text-xs font-medium
                items-center justify-between px-8 py-1.5">
  <div className="flex items-center gap-2">
    <span>🟠</span><span>⚪</span><span>🟢</span>
    <span className="ml-2">Smart India Hackathon 2026 · SIH26021</span>
  </div>
  <span className="font-bold">Team Persistence</span>
</div>
```

---

## 8. FOOTER DESIGN

```
Background:  #0F172A (deep navy — ONLY dark section on entire page)
Text:        text-white / text-slate-400

Three columns:
  1. Logo + tagline + gov badge
  2. Nav links (slate-400 → white on hover)
  3. GitHub link + social links

Bottom bar:
  border-t border-white/10
  "Making fraud more expensive than the honey itself." — amber text
  "Aligned with KVIC Honey Mission Framework"
```

---

## 9. ICONOGRAPHY

Use `lucide-react` throughout. Key icons:

```
Scale / Weight:      Scale
Microchip:           Cpu
Link/Chain:          Link2
Flask/Lab:           FlaskConical
QR Code:             QrCode
Shield:              Shield, ShieldCheck
Bee/Hexagon:         Hexagon (styled amber)
Alert:               AlertTriangle, AlertCircle
Check:               CheckCircle2, Check
X:                   XCircle, X
Lock:                Lock, Unlock
Phone:               Smartphone
Blockchain/Block:    Blocks
Honey/Jar:           (use 🍯 emoji or SVG)
India Map:           MapPin
Clock:               Clock
User:                User, Users
Download:            Download
ExternalLink:        ExternalLink (for PolygonScan links)
ChevronRight:        ChevronRight (step arrows)
```

---

## 10. RESPONSIVE BREAKPOINTS

```
Mobile:  < 640px   (stack everything, full-width cards)
Tablet:  640-1024px (2-col grids, simplified phone mockup)
Desktop: > 1024px  (full layout, side-by-side sections)

Phone mockup: Hide on mobile < 640px, show from md:
  <div className="hidden md:block">...</div>
```

---

## 11. QUICK COPY-PASTE CLASSES (most used combinations)

```
Section wrapper:      "max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28"
Standard card:        "bg-white border-2 border-stone-900 p-6 shadow-[4px_4px_0px_#1C1917]"
Amber wash card:      "bg-amber-50 border-2 border-amber-500 p-6 shadow-[4px_4px_0px_#F59E0B]"
Section heading:      "text-3xl md:text-4xl font-bold text-stone-900 mb-3"
Section subheading:   "text-stone-500 text-lg max-w-2xl mx-auto"
Amber accent line:    "w-12 h-1.5 bg-amber-500 my-4"
Amber pill badge:     "bg-amber-100 text-amber-700 border-2 border-amber-200 px-3 py-1 text-xs font-bold uppercase tracking-wide"
Primary button:       "bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold px-6 py-3 border-2 border-stone-900 shadow-[4px_4px_0px_#1C1917] transition-all"
Mono data text:       "font-mono text-xs text-stone-500"
Success row:          "bg-emerald-50 border border-emerald-100 rounded-lg"
Danger row:           "bg-red-50 border border-red-100 rounded-lg"
```

---

## 12. DO NOT RULES

```
❌ NO dark backgrounds on any section except footer
❌ NO glassmorphism (no backdrop-blur on cards)
❌ NO soft drop shadows (shadow-sm, shadow-lg) — use hard zero-blur offset shadows
❌ NO generic slate colors — use stone-900 for darks
❌ NO rounded borders (rounded-2xl) — use sharp borders or rounded-sm
❌ NO generic Bootstrap blue — use amber palette exclusively
❌ NO scroll-jacking or parallax effects
❌ NO placeholder lorem ipsum — every text is from the harness
❌ NO Tailwind arbitrary values except for shadow strings (already defined above)
```
