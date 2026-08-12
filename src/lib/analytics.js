/**
 * Google Analytics 4 helpers for lead-action tracking.
 *
 * Important: phone_click proves someone tapped Call — not that the call
 * connected or was answered. Label reports as "call-button clicks."
 *
 * Set VITE_GA_MEASUREMENT_ID (e.g. G-XXXXXXXX) in Vercel env, or set
 * business.gaMeasurementId in src/data/business.js.
 */
import { business } from '../data/business.js'

const MEASUREMENT_ID =
  (typeof import.meta !== 'undefined' && import.meta.env?.VITE_GA_MEASUREMENT_ID) ||
  business.gaMeasurementId ||
  ''

/** Load gtag.js once and configure the GA4 property (no-op if ID missing). */
export function initAnalytics() {
  if (!MEASUREMENT_ID || typeof document === 'undefined') return
  if (window.__wjGaInitialized) return
  window.__wjGaInitialized = true

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    // GA queues commands until gtag.js finishes loading
    window.dataLayer.push(arguments)
  }

  window.gtag('js', new Date())
  window.gtag('config', MEASUREMENT_ID, {
    anonymize_ip: true,
    send_page_view: true,
  })

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`
  document.head.appendChild(script)
}

/** Call-button tap (website lead action — not a confirmed phone call). */
export function trackPhoneClick(buttonLocation) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  window.gtag('event', 'phone_click', {
    button_location: buttonLocation,
    phone_number: business.phoneHref.replace(/^tel:/, ''),
    transport_type: 'beacon',
  })
}

/** Directions / maps tap. */
export function trackDirectionsClick(buttonLocation) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  window.gtag('event', 'directions_click', {
    button_location: buttonLocation,
    transport_type: 'beacon',
  })
}

/** Google reviews CTA tap. */
export function trackReviewsClick(buttonLocation = 'reviews') {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  window.gtag('event', 'reviews_click', {
    button_location: buttonLocation,
    transport_type: 'beacon',
  })
}
