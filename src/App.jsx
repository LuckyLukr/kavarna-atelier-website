import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import MenuSection from './components/MenuSection.jsx'
import GallerySection from './components/GallerySection.jsx'
import HoursSection from './components/HoursSection.jsx'
import ContactSection from './components/ContactSection.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen font-sans antialiased selection:bg-gold selection:text-noir bg-cream text-ink">
      <Navbar />
      <main id="home" className="pt-28">
        <Hero />
        <About />
        <MenuSection />
        <GallerySection />
        <HoursSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
