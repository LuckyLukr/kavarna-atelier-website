import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import MenuSection from './components/MenuSection.jsx'
import GallerySection from './components/GallerySection.jsx'
import ContactSection from './components/ContactSection.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen font-sans antialiased selection:bg-mocha selection:text-white bg-cream text-ink">
      <Navbar />
      <main className="pt-28">
        <Hero />
        <About />
        <MenuSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
