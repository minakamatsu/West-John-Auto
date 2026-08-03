import { business } from '../data/business.js'
import { Phone, Pin } from './Icons.jsx'

// Sticky bottom bar shown only on mobile for one-tap calling & directions.
export default function MobileCallBar() {
  return (
    <div className="mobile-callbar">
      <a href={business.phoneHref} className="mobile-callbar__call">
        <Phone />
        Call Now
      </a>
      <a
        className="mobile-callbar__dir"
        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          business.mapQuery
        )}`}
        target="_blank"
        rel="noreferrer"
      >
        <Pin />
        Directions
      </a>
    </div>
  )
}
