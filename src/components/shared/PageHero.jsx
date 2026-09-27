import React from 'react'

export default function PageHero({
  icon: Icon,
  badgeText = 'MadhuMitra SIH26021',
  title,
  subtitle,
  actions = null,
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FEF3C7]/40 via-[#FAF8F5] to-[#FAF8F5] border-b border-amber-100/70 pt-12 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Honeycomb watermark */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] honeycomb-bg"></div>

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-amber-100/80 border-2 border-stone-900/50 text-amber-900 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-5 shadow-[2px_2px_0px_#1C1917]">
          {Icon && <Icon size={15} className="text-amber-700" />}
          <span>{badgeText}</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight font-sans mb-5">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed font-normal">
          {subtitle}
        </p>

        {/* Optional Actions */}
        {actions && <div className="mt-8 flex flex-wrap justify-center gap-4">{actions}</div>}
      </div>
    </section>
  )
}
