import { business } from '../data/business.js'
import { Phone, Pin, Star, Arrow } from './Icons.jsx'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg" role="img" aria-label="West John Auto storefront on West John Street" />

      {/* Mobile-only visual accent — hidden on desktop via CSS */}
      <div className="hero__wheel" aria-hidden="true">
        <img src="/images/wheel.png" alt="" width="280" height="293" decoding="async" />
      </div>

      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__since">Family owned & trusted since {business.since}</span>

          <h1 className="hero__title">
            {/* Desktop V1 title — frozen */}
            <span className="hero__title-desktop">
              Expert Auto Repair &amp;
              <span className="hero__title-accent"> Auto Body</span>
              <br /> in Hicksville, NY
            </span>
            {/* Mobile: shorter phrase; "repair & body" kept on one line via CSS */}
            <span className="hero__title-mobile">
              <span className="hero__title-accent">Hicksville</span>
              {' '}
              Auto{' '}
              <span className="hero__title-phrase">repair &amp; body</span>
            </span>
          </h1>

          {/* Desktop lead copy */}
          <p className="hero__lead">
            {business.name} <span className="hero__cn">{business.chineseName}</span> — 30+ years of
            honest diagnostics, quality repairs, and flawless body work. From oil changes and brakes
            to collision, paint, and Tesla OEM service, we keep you safely on the road.
          </p>
          {/* Mobile meta line under the title */}
          <p className="hero__lead hero__lead--mobile">
            <span className="hero__cn">{business.chineseName}</span>
            {' · '}
            Since {business.since}
          </p>

          <div className="hero__actions">
            {/* Desktop CTAs */}
            <a
              href={business.phoneHref}
              className="btn btn--primary hero__call"
              data-analytics="hero"
            >
              <Phone />
              Call {business.phoneDisplay}
            </a>
            <a href="#services" className="btn btn--ghost hero__services">
              View Services <Arrow />
            </a>
            {/* Mobile CTAs — desktop versions are hidden in CSS */}
            <a href="#services" className="btn btn--primary hero__cta-mobile">
              View Services <Arrow />
            </a>
            <a
              href={business.phoneHref}
              className="btn btn--ghost hero__cta-call-mobile"
              data-analytics="hero_mobile"
            >
              <Phone />
              Call Now
            </a>
          </div>

          {/* Mobile-only short blurb under the buttons */}
          <p className="hero__desc-mobile">
            Brakes, body work, inspections &amp; Tesla OEM — honest repairs since {business.since}.
          </p>

          {/* Desktop rating row — hidden on mobile (stats live in the yellow trust bar) */}
          <div className="hero__rating">
            <span className="hero__stars" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} width="18" height="18" />
              ))}
            </span>
            <strong>{business.rating}</strong>
            <span className="hero__rating-count">
              <span className="hero__rating-count-desktop">
                from {business.reviewCount} Google reviews
              </span>
              <span className="hero__rating-count-mobile">
                ★ · {business.reviewCount} reviews
              </span>
            </span>
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
              <a href={business.phoneHref} data-analytics="hero_card">
                {business.phoneDisplay}
              </a>
            </li>
          </ul>
          <a
            className="btn btn--blue hero__card-cta"
            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
              business.mapQuery
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            data-analytics="hero_card"
          >
            Get Directions <Arrow />
          </a>
          <p className="hero__card-note">Free estimates · Walk-ins welcome</p>
        </aside>
      </div>
    </section>
  )
}
