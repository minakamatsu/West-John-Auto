import { useEffect } from 'react'

// Reveal elements when they enter the viewport.
// Immediately marks already-visible items so above-the-fold content never stays hidden.
export function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.reveal'))
    if (els.length === 0) return

    const show = (el) => el.classList.add('is-visible')

    if (!('IntersectionObserver' in window)) {
      els.forEach(show)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            show(entry.target)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -5% 0px' }
    )

    // Show anything already in view on first paint (prevents blank/ghost sections).
    requestAnimationFrame(() => {
      els.forEach((el) => {
        const rect = el.getBoundingClientRect()
        const inView = rect.top < window.innerHeight * 0.95 && rect.bottom > 0
        if (inView) show(el)
        else observer.observe(el)
      })
    })

    return () => observer.disconnect()
  }, [])
}
