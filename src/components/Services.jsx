import { serviceGroups, business } from '../data/business.js'
import { ServiceIcon, Check, Phone } from './Icons.jsx'

export default function Services() {
  return (
    <section className="section section--soft" id="services">
      <div className="container">
        <div className="section__head reveal">
          <span className="section__eyebrow">What we do</span>
          <h2 className="section__title">
            Complete Auto Care, <span className="accent">Under One Roof</span>
          </h2>
          <p className="section__lead">
            Whether it&apos;s routine maintenance, a check-engine light, or full collision repair,
            our certified technicians handle it all — quickly, honestly, and done right the first
            time.
          </p>
        </div>

        <div className="services__grid">
          {serviceGroups.map((group) => (
            <article className="service-card reveal" key={group.title}>
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

        <div className="services__cta reveal">
          <p>Not sure what your car needs? Get a free diagnostic and honest advice.</p>
          <a href={business.phoneHref} className="btn btn--primary">
            <Phone />
            Call {business.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  )
}
