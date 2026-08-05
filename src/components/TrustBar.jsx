import { business } from '../data/business.js'

const stats = [
  { value: '30+', label: 'Years in business' },
  { value: '4.6★', label: `${business.reviewCount} Google reviews` },
  { value: '40+', label: 'Services offered' },
  { value: 'OEM', label: 'Genuine Tesla parts' },
]

export default function TrustBar() {
  return (
    <section className="trustbar">
      <div className="container trustbar__inner">
        {stats.map((s) => (
          <div className="trustbar__item" key={s.label}>
            <span className="trustbar__value">{s.value}</span>
            <span className="trustbar__label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
