import { useEffect, useState } from 'react'
import { business } from '../data/business.js'
import { Phone, Menu, Close } from './Icons.jsx'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => (document.body.style.overflow = '')
  }, [open])

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a href="#top" className="brand" aria-label={`${business.name} home`}>
          <span className="brand__badge">WJ</span>
          <span className="brand__text">
            <span className="brand__name">{business.name}</span>
            <span className="brand__sub">
              {business.chineseName} · Since {business.since}
            </span>
          </span>
        </a>

        <nav className="nav" aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav__link">
              {l.label}
            </a>
          ))}
        </nav>

        <a href={business.phoneHref} className="btn btn--primary header__cta">
          <Phone />
          {business.phoneDisplay}
        </a>

        <button
          className="header__burger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <Close /> : <Menu />}
        </button>
      </div>

      <div className={`mobile-menu ${open ? 'mobile-menu--open' : ''}`}>
        <nav className="mobile-menu__nav" aria-label="Mobile">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="mobile-menu__link" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
        <a href={business.phoneHref} className="btn btn--primary mobile-menu__cta">
          <Phone />
          Call {business.phoneDisplay}
        </a>
      </div>
    </header>
  )
}
