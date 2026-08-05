import { useEffect, useRef, useState } from 'react'
import { business } from '../data/business.js'
import { useCountUp } from '../hooks/useCountUp.js'

/** Yellow trust-bar stats — numeric values count up when the section enters view */
const stats = [
  { end: 30, decimals: 0, suffix: '+', label: 'Years in business' },
  { end: 4.6, decimals: 1, suffix: '★', label: `${business.reviewCount} Google reviews` },
  { end: 40, decimals: 0, suffix: '+', label: 'Services offered' },
  { end: null, text: 'OEM', label: 'Genuine Tesla parts' }, // non-numeric; shown as-is
]

function StatValue({ end, decimals, suffix, text, active }) {
  // Animates 0 → end while `active` is true (IntersectionObserver in TrustBar)
  const count = useCountUp(end, { active, decimals, duration: 900 })

  if (end == null) {
    return <span className="trustbar__value">{text}</span>
  }

  const display =
    decimals > 0 ? Number(count ?? 0).toFixed(decimals) : String(count ?? 0)

  return (
    <span className="trustbar__value">
      {display}
      {suffix}
    </span>
  )
}

export default function TrustBar() {
  const ref = useRef(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setActive(true)
      return
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
        } else {
          // Reset only when fully off-screen so scrolling back re-plays
          setActive(false)
        }
      },
      { threshold: 0.35 }
    )

    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section className="trustbar" ref={ref}>
      <div className="container trustbar__inner">
        {stats.map((s) => (
          <div className="trustbar__item" key={s.label}>
            <StatValue {...s} active={active} />
            <span className="trustbar__label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
