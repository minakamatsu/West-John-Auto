// Lightweight inline SVG icons (no external icon dependency).
const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function Phone(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.8 2z" />
    </svg>
  )
}

export function Pin(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

export function Clock(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  )
}

export function Star({ filled = true, ...props }) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.9 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9z"
        fill={filled ? '#ffce00' : 'none'}
        stroke={filled ? '#e6b800' : '#c9ccd6'}
        strokeWidth="1.2"
      />
    </svg>
  )
}

export function Check(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

export function Arrow(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function Menu(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

export function Close(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  )
}

// Service category icons
const serviceIcons = {
  engine: (
    <svg viewBox="0 0 24 24" {...base}>
      <path d="M4 12v4h2l2 2h5v-3h3l2-3h2v-4h-3V6h-4l-2 2H8l-2 2H4z" />
      <path d="M9 6V4h4v2" />
    </svg>
  ),
  brake: (
    <svg viewBox="0 0 24 24" {...base}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 4v3M12 17v3M4 12h3M17 12h3" />
    </svg>
  ),
  transmission: (
    <svg viewBox="0 0 24 24" {...base}>
      <circle cx="7" cy="7" r="2.5" />
      <circle cx="17" cy="7" r="2.5" />
      <circle cx="7" cy="17" r="2.5" />
      <path d="M7 9.5v5M17 9.5V15a2 2 0 0 1-2 2H9.5" />
    </svg>
  ),
  ac: (
    <svg viewBox="0 0 24 24" {...base}>
      <path d="M12 3v18M4.5 7.5l15 9M19.5 7.5l-15 9" />
      <path d="M12 3l-2.2 2M12 3l2.2 2M12 21l-2.2-2M12 21l2.2-2" />
    </svg>
  ),
  tire: (
    <svg viewBox="0 0 24 24" {...base}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3v5M12 16v5M3 12h5M16 12h5" />
    </svg>
  ),
  body: (
    <svg viewBox="0 0 24 24" {...base}>
      <path d="M3 13l2-5a3 3 0 0 1 2.8-2h8.4A3 3 0 0 1 19 8l2 5v5h-3v-2H6v2H3z" />
      <circle cx="7.5" cy="15.5" r="1.3" />
      <circle cx="16.5" cy="15.5" r="1.3" />
    </svg>
  ),
  inspection: (
    <svg viewBox="0 0 24 24" {...base}>
      <path d="M9 3h6l1 3h2a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2z" />
      <path d="M9.5 13l2 2 3.5-4" />
    </svg>
  ),
  tesla: (
    <svg viewBox="0 0 24 24" {...base}>
      <path d="M13 2 3 14h7l-1 8 10-12h-7z" />
    </svg>
  ),
}

export function ServiceIcon({ name, ...props }) {
  return <span {...props}>{serviceIcons[name] || serviceIcons.engine}</span>
}
