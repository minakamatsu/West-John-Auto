import { business } from '../data/business.js'
import { Phone, Pin } from './Icons.jsx'

// Sticky bottom bar for mobile — phone-first CTA in the thumb zone.
// Pattern used by high-converting auto repair sites: always-visible tap-to-call.
export default function MobileCallBar() {
  return (
    <div className="mobile-callbar" role="navigation" aria-label="Quick contact">
      <a
        href={business.phoneHref}
        className="mobile-callbar__call"
        aria-label={`Call West John Auto at ${business.phoneDisplay}`}
        data-analytics="mobile_sticky"
      >
        <Phone />
        <span className="mobile-callbar__text">
          <small>Tap to call</small>
          <strong>{business.phoneDisplay}</strong>
        </span>
      </a>
      <a
        className="mobile-callbar__dir"
        href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
          business.mapQuery
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get directions to West John Auto"
        data-analytics="mobile_sticky"
      >
        <Pin />
        <span>Directions</span>
      </a>
    </div>
  )
}
