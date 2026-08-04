import { business } from '../data/business.js'
import { Check, Phone } from './Icons.jsx'

const highlights = [
  'Straightforward diagnostics with clear service options — no pressure, no surprises.',
  'Repairs & auto body work for all makes: domestic, import, and electric vehicles.',
  '100% Original Tesla OEM parts, finished in-house.',
  'NY State inspections, emissions testing & used-car multi-point checks.',
]

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container about__grid">
        <div className="about__media reveal" aria-hidden="true">
          <div className="about__photo">
            <span className="about__photo-badge">Since {business.since}</span>
            <div className="about__photo-inner">
              <span className="about__photo-wj">WJ</span>
              <span className="about__photo-name">{business.name}</span>
              <span className="about__photo-cn">{business.chineseName}</span>
              <span className="about__photo-rating">
                {business.rating}★ · {business.reviewCount} reviews
              </span>
            </div>
          </div>
        </div>

        <div className="about__content reveal">
          <span className="section__eyebrow">Why drivers choose us</span>
          <h2 className="section__title">
            Three Decades of <span className="accent">Honest, Quality Work</span>
          </h2>
          <p className="section__lead">
            For over 30 years, {business.name} has been the neighborhood shop Hicksville trusts.
            &ldquo;Hugo and staff really go the extra mile,&rdquo; and it shows in every repair — a
            reputation built one satisfied customer at a time.
          </p>

          <ul className="about__list">
            {highlights.map((h) => (
              <li key={h}>
                <Check />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <a href={business.phoneHref} className="btn btn--primary about__cta">
            <Phone />
            Call {business.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  )
}
