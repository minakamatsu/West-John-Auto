import { useEffect, useRef, useState } from 'react'

/**
 * Count from 0 → target while `active` is true.
 * Used by the yellow trust bar stats on desktop + mobile.
 * Quick ease-out; respects prefers-reduced-motion.
 */
export function useCountUp(target, { active = false, decimals = 0, duration = 900 } = {}) {
  const [value, setValue] = useState(0)
  const raf = useRef(0)

  useEffect(() => {
    cancelAnimationFrame(raf.current)

    if (target == null) return

    if (!active) {
      setValue(0)
      return
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(target)
      return
    }

    const start = performance.now()

    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - (1 - t) ** 3
      const next = target * eased
      setValue(decimals > 0 ? next : next)
      if (t < 1) {
        raf.current = requestAnimationFrame(tick)
      } else {
        setValue(target)
      }
    }

    setValue(0)
    raf.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf.current)
  }, [active, target, duration, decimals])

  if (target == null) return null
  return decimals > 0 ? Number(value.toFixed(decimals)) : Math.round(value)
}
