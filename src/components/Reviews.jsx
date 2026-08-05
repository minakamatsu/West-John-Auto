import { reviews, business } from '../data/business.js'
import { Star } from './Icons.jsx'

export default function Reviews() {
  return (
    <section className="section section--soft" id="reviews">
      <div className="container">
        <div className="section__head reveal">
          <span className="section__eyebrow">Customer reviews</span>
          <h2 className="section__title">
            Rated <span className="accent">{business.rating}★</span> by the Neighborhood
          </h2>
          <p className="section__lead">
            {business.reviewCount} Google reviews and counting. Here&apos;s what customers say about
            the team.
          </p>
        </div>

        <div className="reviews__grid">
          {reviews.map((r) => (
            <figure className="review-card reveal" key={r.quote}>
              <div className="review-card__stars" aria-label="5 out of 5 stars">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} width="18" height="18" />
                ))}
              </div>
              <blockquote className="review-card__quote">&ldquo;{r.quote}&rdquo;</blockquote>
              <figcaption className="review-card__author">— {r.author}</figcaption>
            </figure>
          ))}
        </div>

        <div className="reviews__cta reveal">
          <a
            className="btn btn--blue"
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              business.name + ' ' + business.mapQuery
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read all {business.reviewCount} reviews on Google
          </a>
        </div>
      </div>
    </section>
  )
}
