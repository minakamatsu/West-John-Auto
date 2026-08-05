import { business } from '../data/business.js'
import { Phone, Pin, Star, Arrow } from './Icons.jsx'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg" role="img" aria-label="West John Auto storefront on West John Street" />
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__since">Family owned & trusted since {business.since}</span>
          <h1 className="hero__title">
            Expert Auto Repair &amp;
            <span className="hero__title-accent"> Auto Body</span>
            <br /> in Hicksville, NY
          </h1>
          <p className="hero__lead">
            {business.name} <span className="hero__cn">{business.chineseName}</span> — 30+ years of
            honest diagnostics, quality repairs, and flawless body work. From oil changes and brakes
            to collision, paint, and Tesla OEM service, we keep you safely on the road.
          </p>
          <p className="hero__lead hero__lead--mobile">
            {business.name} <span className="hero__cn">{business.chineseName}</span> — trusted in
            Hicksville since {business.since}. Honest repairs, auto body, and Tesla OEM service.
          </p>

          <div className="hero__actions">
            <a href={business.phoneHref} className="btn btn--primary hero__call">
              <Phone />
              Call {business.phoneDisplay}
            </a>
            <a href="#services" className="btn btn--ghost">
              View Services <Arrow />
            </a>
          </div>

          <div className="hero__rating">
            <span className="hero__stars" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} width="18" height="18" />
              ))}
            </span>
            <strong>{business.rating}</strong>
            <span className="hero__rating-count">from {business.reviewCount} Google reviews</span>
          </div>
        </div>

        <aside className="hero__card" aria-label="Visit us">
          <div className="hero__card-head">
            <span className="hero__card-badge">Open Today</span>
            <h2 className="hero__card-title">Stop by the shop</h2>
          </div>
          <ul className="hero__card-list">
            <li>
              <Pin />
              <span>
                {business.address.street}
                <br />
                {business.address.city}, {business.address.state} {business.address.zip}
              </span>
            </li>
            <li>
              <Phone />
              <a href={business.phoneHref}>{business.phoneDisplay}</a>
            </li>
          </ul>
          <a
            className="btn btn--blue hero__card-cta"
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              business.mapQuery
            )}`}
            target="_blank"
            rel="noreferrer"
          >
            Get Directions <Arrow />
          </a>
          <p className="hero__card-note">Free estimates · Walk-ins welcome</p>
        </aside>
      </div>
    </section>
  )
}
