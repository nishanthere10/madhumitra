import React from 'react'

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center',
}) {
  const isCenter = align === 'center'
  return (
    <div className={`mb-12 ${isCenter ? 'text-center max-w-3xl mx-auto' : 'text-left'}`}>
      {badge && (
        <div className="inline-flex items-center gap-2 bg-amber-50 border-2 border-stone-900 rounded-full px-4 py-1.5 mb-4">
          <span className="text-amber-600 text-xs font-semibold uppercase tracking-wide">
            {badge}
          </span>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-3 font-sans">
        {title}
      </h2>
      <div className={`w-12 h-1 bg-amber-500 rounded mb-4 ${isCenter ? 'mx-auto' : ''}`} />
      {subtitle && (
        <p className="text-stone-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
