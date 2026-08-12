import { serviceGroups, business } from '../data/business.js'
import { trackPhoneClick } from '../lib/analytics.js'
import { ServiceIcon, Check, Phone } from './Icons.jsx'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from './ui/accordion.jsx'
import '../styles/accordion.css'

export default function Services() {
  const firstValue = serviceGroups[0] ? `svc-${serviceGroups[0].icon}` : undefined

  return (
    <section className="section section--soft" id="services">
      <div className="container">
        <div className="section__head reveal">
          <span className="section__eyebrow">What we do</span>
          <h2 className="section__title">
            Complete Auto Care, <span className="accent">Under One Roof</span>
          </h2>
          <p className="section__lead section__lead--desktop">
            From routine maintenance to collision repair, our technicians handle it all — quickly,
            honestly, and done right the first time.
          </p>
          <p className="section__lead section__lead--mobile">
            Tap a category to see what&apos;s included — brakes, body work, inspections, Tesla OEM,
            and more.
          </p>
        </div>

        {/* Desktop: service boxes (frozen V1) */}
        <div className="services-grid reveal">
          {serviceGroups.map((group) => (
            <article className="service-card" key={group.title}>
              <div className="service-card__icon">
                <ServiceIcon name={group.icon} />
              </div>
              <h3 className="service-card__title">{group.title}</h3>
              <ul className="service-card__list">
                {group.items.map((item) => (
                  <li key={item}>
                    <Check />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Mobile: shadcn-style Accordion (Base UI) */}
        <div className="services-list reveal">
          <Accordion defaultValue={firstValue ? [firstValue] : []} className="services-acc">
            {serviceGroups.map((group) => {
              const value = `svc-${group.icon}`
              return (
                <AccordionItem key={group.title} value={value}>
                  <AccordionTrigger>
                    <span className="services-acc__lead">
                      <span className="services-acc__icon" aria-hidden="true">
                        <ServiceIcon name={group.icon} />
                      </span>
                      <span className="services-acc__meta">
                        <span className="services-acc__title">{group.title}</span>
                        <span className="services-acc__count">{group.items.length} services</span>
                      </span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="services-acc__chips">
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              )
            })}
          </Accordion>
        </div>

        <div className="services__cta reveal">
          <p>Not sure what your car needs? Call for a free diagnostic.</p>
          <a
            href={business.phoneHref}
            className="btn btn--primary"
            onClick={() => trackPhoneClick('services')}
          >
            <Phone />
            Call {business.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  )
}
