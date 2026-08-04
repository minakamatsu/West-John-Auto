import { useState } from 'react'
import { serviceGroups, business } from '../data/business.js'
import { ServiceIcon, Phone } from './Icons.jsx'

export default function Services() {
  // First category open by default so visitors see how it works without clutter.
  const [openId, setOpenId] = useState(serviceGroups[0]?.title ?? null)

  return (
    <section className="section section--soft" id="services">
      <div className="container">
        <div className="section__head reveal">
          <span className="section__eyebrow">What we do</span>
          <h2 className="section__title">
            Complete Auto Care, <span className="accent">Under One Roof</span>
          </h2>
          <p className="section__lead">
            Tap a category to see what&apos;s included — brakes, body work, inspections, Tesla OEM,
            and more.
          </p>
        </div>

        <div className="services-list reveal" role="list">
          {serviceGroups.map((group) => {
            const isOpen = openId === group.title
            const panelId = `service-panel-${group.icon}`
            const btnId = `service-btn-${group.icon}`

            return (
              <div
                className={`services-item ${isOpen ? 'is-open' : ''}`}
                key={group.title}
                role="listitem"
              >
                <button
                  type="button"
                  id={btnId}
                  className="services-item__trigger"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenId(isOpen ? null : group.title)}
                >
                  <span className="services-item__icon" aria-hidden="true">
                    <ServiceIcon name={group.icon} />
                  </span>
                  <span className="services-item__meta">
                    <span className="services-item__title">{group.title}</span>
                    <span className="services-item__count">{group.items.length} services</span>
                  </span>
                  <span className="services-item__chevron" aria-hidden="true" />
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  className="services-item__panel"
                  hidden={!isOpen}
                >
                  <ul className="services-item__chips">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>

        <div className="services__cta reveal">
          <p>Not sure what your car needs? Call for a free diagnostic.</p>
          <a href={business.phoneHref} className="btn btn--primary">
            <Phone />
            Call {business.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  )
}
