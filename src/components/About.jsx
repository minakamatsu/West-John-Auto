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
    <section className="about" id="about">
      <div
        className="about__bg"
        role="img"
        aria-label={`${business.name} team with a customer vehicle`}
      />

      {/* Padding lives here so .container cannot wipe vertical spacing */}
      <div className="about__pad">
        <div className="container about__inner">
          <div className="about__content reveal">
            <span className="about__eyebrow">Why drivers choose us</span>
            <h2 className="about__title">
              Three Decades of <span className="accent">Honest, Quality Work</span>
            </h2>
            <p className="about__lead">
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

            <div className="about__actions">
              <a href={business.phoneHref} className="btn btn--primary about__cta">
                <Phone />
                Call {business.phoneDisplay}
              </a>
              <span className="about__rating">
                {business.rating}★ · {business.reviewCount} reviews · Since {business.since}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
