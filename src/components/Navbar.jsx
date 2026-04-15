import React, { useEffect, useMemo, useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const ids = useMemo(
    () => ({
      menuToggle: 'menuToggle',
      mobileMenu: 'mobileMenu',
      menuIconOpen: 'menuIconOpen',
      menuIconClose: 'menuIconClose',
    }),
    [],
  )

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    document.documentElement.classList.add('scroll-smooth')
  }, [])

  const toggleMenu = () => setOpen((v) => !v)

  const onNavLinkClick = (e) => {
    const href = e.currentTarget.getAttribute('href') || ''
    if (href.startsWith('#') && window.innerWidth < 768) {
      setOpen(false)
    }
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4">
        <div className="nav-blur rounded-2xl border border-white/40 bg-cream/85 shadow-soft">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a
              href="#home"
              className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2 focus:ring-offset-cream rounded-lg"
              aria-label="Přejít na úvod"
              onClick={onNavLinkClick}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-forest text-cream shadow-md">
                <span className="font-serif text-xl font-semibold">A</span>
              </div>
              <div>
                <p className="font-serif text-2xl leading-none text-ink">Atelier Café</p>
                <p className="text-xs uppercase tracking-[0.22em] text-mocha">Coffee • Brunch • Atmosféra</p>
              </div>
            </a>

            <nav className="hidden items-center gap-8 md:flex" aria-label="Hlavní navigace">
              <a
                href="#about"
                className="text-sm font-medium text-ink/80 transition-all duration-200 hover:text-forest"
                onClick={onNavLinkClick}
              >
                O kavárně
              </a>
              <a
                href="#menu"
                className="text-sm font-medium text-ink/80 transition-all duration-200 hover:text-forest"
                onClick={onNavLinkClick}
              >
                Menu
              </a>
              <a
                href="#gallery"
                className="text-sm font-medium text-ink/80 transition-all duration-200 hover:text-forest"
                onClick={onNavLinkClick}
              >
                Galerie
              </a>
              <a
                href="#contact"
                className="text-sm font-medium text-ink/80 transition-all duration-200 hover:text-forest"
                onClick={onNavLinkClick}
              >
                Kontakt
              </a>
              <a
                href="#menu"
                className="rounded-full bg-forest px-5 py-2.5 text-sm font-semibold text-cream transition-all duration-200 hover:bg-espresso focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2 focus:ring-offset-cream"
                onClick={onNavLinkClick}
              >
                Zobrazit menu
              </a>
            </nav>

            <button
              id={ids.menuToggle}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-espresso/10 bg-white/70 text-ink transition-all duration-200 hover:bg-white md:hidden focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2 focus:ring-offset-cream"
              aria-label={open ? 'Zavřít navigační menu' : 'Otevřít navigační menu'}
              aria-expanded={open}
              aria-controls={ids.mobileMenu}
              type="button"
              onClick={toggleMenu}
            >
              <svg
                id={ids.menuIconOpen}
                xmlns="http://www.w3.org/2000/svg"
                className={open ? 'hidden h-5 w-5' : 'h-5 w-5'}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
              <svg
                id={ids.menuIconClose}
                xmlns="http://www.w3.org/2000/svg"
                className={open ? 'h-5 w-5' : 'hidden h-5 w-5'}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div
            id={ids.mobileMenu}
            className={open ? 'border-t border-espresso/10 px-4 pb-4 pt-3 md:hidden' : 'hidden border-t border-espresso/10 px-4 pb-4 pt-3 md:hidden'}
          >
            <nav className="flex flex-col gap-2" aria-label="Mobilní navigace">
              <a
                href="#about"
                className="rounded-xl px-3 py-3 text-sm font-medium text-ink transition-all duration-200 hover:bg-white/70"
                onClick={onNavLinkClick}
              >
                O kavárně
              </a>
              <a
                href="#menu"
                className="rounded-xl px-3 py-3 text-sm font-medium text-ink transition-all duration-200 hover:bg-white/70"
                onClick={onNavLinkClick}
              >
                Menu
              </a>
              <a
                href="#gallery"
                className="rounded-xl px-3 py-3 text-sm font-medium text-ink transition-all duration-200 hover:bg-white/70"
                onClick={onNavLinkClick}
              >
                Galerie
              </a>
              <a
                href="#contact"
                className="rounded-xl px-3 py-3 text-sm font-medium text-ink transition-all duration-200 hover:bg-white/70"
                onClick={onNavLinkClick}
              >
                Kontakt
              </a>
              <a
                href="#menu"
                className="mt-2 rounded-xl bg-forest px-4 py-3 text-center text-sm font-semibold text-cream transition-all duration-200 hover:bg-espresso"
                onClick={onNavLinkClick}
              >
                Zobrazit menu
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
