/**
 * Google Analytics 4 helpers for lead-action tracking.
 *
 * Important: phone_click proves someone tapped Call — not that the call
 * connected or was answered. Label reports as "call-button clicks."
 *
 * The Google tag is loaded from index.html (earliest possible) so events
 * still send when a tel: link opens the phone dialer.
 */
import { business } from '../data/business.js'

const MEASUREMENT_ID =
  (typeof import.meta !== 'undefined' && import.meta.env?.VITE_GA_MEASUREMENT_ID) ||
  business.gaMeasurementId ||
  ''

function ensureGtag() {
  if (typeof window === 'undefined') return false
  window.dataLayer = window.dataLayer || []
  if (typeof window.gtag !== 'function') {
    window.gtag = function gtag() {
      window.dataLayer.push(arguments)
    }
  }
  return true
}

/** Ensure gtag stub exists + bind resilient click capture for tel:/maps links. */
export function initAnalytics() {
  if (!MEASUREMENT_ID || typeof document === 'undefined') return
  ensureGtag()

  if (window.__wjGaClickBound) return
  window.__wjGaClickBound = true

  // Capture phase: fires before navigation / dialer steals the page
  document.addEventListener(
    'click',
    (event) => {
      const link = event.target?.closest?.('a[href]')
      if (!link) return

      const href = link.getAttribute('href') || ''
      const location =
        link.getAttribute('data-analytics') ||
        link.dataset.analytics ||
        'unknown'

      if (href.startsWith('tel:')) {
        trackPhoneClick(location)
        return
      }

      if (
        href.includes('google.com/maps') ||
        href.includes('maps.google.com')
      ) {
        // Reviews CTA is also a maps URL — prefer explicit data-analytics name
        if (location === 'reviews') {
          trackReviewsClick(location)
        } else {
          trackDirectionsClick(location)
        }
      }
    },
    true
  )
}

/** Call-button tap (website lead action — not a confirmed phone call). */
export function trackPhoneClick(buttonLocation) {
  if (!ensureGtag()) return
  window.gtag('event', 'phone_click', {
    send_to: MEASUREMENT_ID,
    button_location: buttonLocation,
    phone_number: business.phoneHref.replace(/^tel:/, ''),
    transport_type: 'beacon',
  })
}

/** Directions / maps tap. */
export function trackDirectionsClick(buttonLocation) {
  if (!ensureGtag()) return
  window.gtag('event', 'directions_click', {
    send_to: MEASUREMENT_ID,
    button_location: buttonLocation,
    transport_type: 'beacon',
  })
}

/** Google reviews CTA tap. */
export function trackReviewsClick(buttonLocation = 'reviews') {
  if (!ensureGtag()) return
  window.gtag('event', 'reviews_click', {
    send_to: MEASUREMENT_ID,
    button_location: buttonLocation,
    transport_type: 'beacon',
  })
}
