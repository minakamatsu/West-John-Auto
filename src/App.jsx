import { useReveal } from './hooks/useReveal.js'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import TrustBar from './components/TrustBar.jsx'
import Services from './components/Services.jsx'
import About from './components/About.jsx'
import Reviews from './components/Reviews.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import MobileCallBar from './components/MobileCallBar.jsx'
import './styles/components.css'

export default function App() {
  useReveal()
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <About />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  )
}
