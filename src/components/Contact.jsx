import { business } from '../data/business.js'
import { Phone, Pin, Clock, Arrow } from './Icons.jsx'

const today = new Date().getDay() // 0 = Sunday

export default function Contact() {
  // Map JS day index to our hours array (which starts Monday).
  const todayIndex = today === 0 ? 6 : today - 1

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="section__head reveal">
          <span className="section__eyebrow">Visit or call</span>
          <h2 className="section__title">
            Get in <span className="accent">Touch</span>
          </h2>
          <p className="section__lead">
            The fastest way to get help is a quick phone call — we&apos;ll answer your questions and
            get you scheduled.
          </p>
        </div>

        <div className="contact__grid">
          <div className="contact__info reveal">
            <a
              href={business.phoneHref}
              className="contact__phone"
              data-analytics="contact"
            >
              <Phone />
              <span>
                <small>Call us now</small>
                <strong>{business.phoneDisplay}</strong>
              </span>
            </a>

            <div className="contact__block">
              <h3>
                <Pin /> Address
              </h3>
              <p>
                {business.address.street}
                <br />
                {business.address.city}, {business.address.state} {business.address.zip}
              </p>
              <a
                className="contact__link"
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  business.mapQuery
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                data-analytics="contact"
              >
                Get Directions <Arrow />
              </a>
            </div>

            <div className="contact__block">
              <h3>
                <Clock /> Hours
              </h3>
              <ul className="contact__hours">
                {business.hours.map((h, i) => (
                  <li key={h.day} className={i === todayIndex ? 'is-today' : ''}>
                    <span>{h.day}</span>
                    <span>{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="contact__map reveal">
            <iframe
              title={`Map to ${business.name}`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                business.mapQuery
              )}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allow="fullscreen"
              allowFullScreen
              sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-forms"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
