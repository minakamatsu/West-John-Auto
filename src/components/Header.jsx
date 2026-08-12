import { useEffect, useState } from 'react'
import { business } from '../data/business.js'
import { trackPhoneClick } from '../lib/analytics.js'
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
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''} ${open ? 'header--menu-open' : ''}`}>
      <div className="container header__inner">
        <a href="#top" className="brand" aria-label={`${business.name} home`} onClick={closeMenu}>
          {/* Official logo mark (transparent PNG) — replaces old yellow WJ badge */}
          <img
            className="brand__logo"
            src="/images/logo-mark.png"
            alt=""
            width="48"
            height="36"
            decoding="async"
          />
          <span className="brand__text">
            <span className="brand__name">West John Auto</span>
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

        <div className="header__actions">
          <a
            href={business.phoneHref}
            className="btn btn--primary header__cta"
            onClick={() => trackPhoneClick('header')}
          >
            <Phone />
            {business.phoneDisplay}
          </a>

          <a
            href={business.phoneHref}
            className="header__call-icon"
            aria-label={`Call ${business.phoneDisplay}`}
            onClick={() => trackPhoneClick('header_icon')}
          >
            <Phone />
          </a>

          <button
            className="header__burger"
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </div>

      {open ? (
        <div id="mobile-nav" className="mobile-menu mobile-menu--open">
          <nav className="mobile-menu__nav" aria-label="Mobile">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="mobile-menu__link" onClick={closeMenu}>
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href={business.phoneHref}
            className="btn btn--primary mobile-menu__cta"
            onClick={() => {
              trackPhoneClick('mobile_menu')
              closeMenu()
            }}
          >
            <Phone />
            Call {business.phoneDisplay}
          </a>
        </div>
      ) : null}
    </header>
  )
}
