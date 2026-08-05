import { useEffect } from 'react'

/**
 * Reveal-on-scroll with a large "POV" buffer.
 *
 * - Enter the viewport → animate in
 * - Stay within ~half the page length of the viewport → keep state (no reset)
 * - Move farther than half the page away → reset, so returning re-triggers the animation
 */
export function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.reveal'))
    if (els.length === 0) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }

    let ticking = false

    const distanceFromViewport = (rect) => {
      if (rect.bottom < 0) return -rect.bottom // above the viewport
      if (rect.top > window.innerHeight) return rect.top - window.innerHeight // below
      return 0 // overlapping the POV (current screen)
    }

    const update = () => {
      ticking = false
      // Half the full page length = how far you must scroll away before resets
      const povRadius = document.documentElement.scrollHeight * 0.5

      els.forEach((el) => {
        const rect = el.getBoundingClientRect()
        const dist = distanceFromViewport(rect)

        if (dist === 0) {
          el.classList.add('is-visible')
        } else if (dist > povRadius) {
          el.classList.remove('is-visible')
        }
        // else: still inside the half-page POV buffer — leave class as-is
      })
    }

    const onScrollOrResize = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }

    update()
    window.addEventListener('scroll', onScrollOrResize, { passive: true })
    window.addEventListener('resize', onScrollOrResize)

    return () => {
      window.removeEventListener('scroll', onScrollOrResize)
      window.removeEventListener('resize', onScrollOrResize)
    }
  }, [])
}
