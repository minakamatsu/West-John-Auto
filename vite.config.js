import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/** Shared browser security headers for preview / local production testing */
const securityHeaders = {
  'Content-Security-Policy':
    "default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'none'; form-action 'self'; script-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: blob:; connect-src 'self'; frame-src https://www.google.com https://maps.google.com; worker-src 'none'; upgrade-insecure-requests",
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy':
    'accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=(), interest-cohort=()',
  'Cross-Origin-Opener-Policy': 'same-origin',
  'Cross-Origin-Resource-Policy': 'same-origin',
  'X-Permitted-Cross-Domain-Policies': 'none',
}

export default defineConfig({
  plugins: [react()],
  server: {
    // Bind localhost only — avoid exposing the Vite dev server on the LAN
    // (several Vite advisories only apply when host is network-accessible).
    // Do NOT send CSP here: Vite HMR needs inline/eval scripts that a
    // production CSP correctly blocks (that was causing a blank page).
    host: 'localhost',
    port: 5173,
    strictPort: true,
    fs: {
      // Deny sensitive paths even if someone later re-enables network bind
      deny: ['.env', '.env.*', '*.{crt,pem}', '**/.git/**'],
    },
  },
  preview: {
    host: 'localhost',
    port: 4173,
    strictPort: true,
    // Production-like headers for `npm run preview` only
    headers: securityHeaders,
  },
  build: {
    sourcemap: false,
  },
})
