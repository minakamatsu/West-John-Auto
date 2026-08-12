import { business } from '../data/business.js'
import { trackPhoneClick, trackDirectionsClick } from '../lib/analytics.js'
import { Phone, Pin } from './Icons.jsx'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="container footer__inner">
          <div className="footer__brand">
            <img
              className="brand__logo"
              src="/images/logo-mark.png"
              alt=""
              width="48"
              height="36"
              decoding="async"
            />
            <div>
              <span className="footer__name">{business.name}</span>
              <span className="footer__cn">
                {business.chineseName} · {business.tagline}
              </span>
            </div>
          </div>

          <div className="footer__cols">
            <div className="footer__col">
              <h4>Contact</h4>
              <a href={business.phoneHref} onClick={() => trackPhoneClick('footer')}>
                <Phone /> {business.phoneDisplay}
              </a>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  business.mapQuery
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackDirectionsClick('footer')}
              >
                <Pin />
                {business.address.street}, {business.address.city}, {business.address.state}{' '}
                {business.address.zip}
              </a>
            </div>

            <div className="footer__col footer__col--explore">
              <h4>Explore</h4>
              <a href="#services">Services</a>
              <a href="#about">About</a>
              <a href="#reviews">Reviews</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>
            © {year} {business.name}. Serving Hicksville since {business.since}.
          </span>
          <span>Auto Repair &amp; Auto Body · NY State Inspections</span>
        </div>
      </div>
    </footer>
  )
}
