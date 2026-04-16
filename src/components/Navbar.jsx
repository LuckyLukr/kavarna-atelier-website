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
    document.documentElement.classList.add('scroll-smooth')
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    const menuToggleEl = document.getElementById(ids.menuToggle)
    if (!menuToggleEl) return
    menuToggleEl.setAttribute('aria-expanded', String(open))
    menuToggleEl.setAttribute(
      'aria-label',
      open ? 'Zavřít navigační menu' : 'Otevřít navigační menu',
    )
  }, [open, ids.menuToggle])

  const toggleMenu = () => setOpen((v) => !v)

  const onNavLinkClick = (e) => {
    const href = e.currentTarget.getAttribute('href') || ''
    if (href.startsWith('#') && window.innerWidth < 768) setOpen(false)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4">
        <div className="nav-blur rounded-2xl border border-white/10 bg-noir/70 shadow-luxe">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a
              href="#home"
              className="flex items-center gap-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-noir"
              aria-label="Přejít na úvod"
              onClick={onNavLinkClick}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-gold shadow-md">
                <span className="font-display text-xl font-black">S</span>
              </div>
              <div>
                <p className="font-display text-2xl font-extrabold leading-none text-cream">
                  sklep kafe
                </p>
                <p className="text-[11px] uppercase tracking-[0.24em] text-gold/80">
                  Coffee House • Brunch • Atmosféra
                </p>
              </div>
            </a>

            <nav className="hidden items-center gap-8 md:flex" aria-label="Hlavní navigace">
              <a
                href="#about"
                className="text-sm font-semibold text-cream/80 transition-all duration-300 hover:text-gold"
                onClick={onNavLinkClick}
              >
                O nás
              </a>
              <a
                href="#menu"
                className="text-sm font-semibold text-cream/80 transition-all duration-300 hover:text-gold"
                onClick={onNavLinkClick}
              >
                Menu
              </a>
              <a
                href="#gallery"
                className="text-sm font-semibold text-cream/80 transition-all duration-300 hover:text-gold"
                onClick={onNavLinkClick}
              >
                Galerie
              </a>
              <a
                href="#hours"
                className="text-sm font-semibold text-cream/80 transition-all duration-300 hover:text-gold"
                onClick={onNavLinkClick}
              >
                Otevírací doba
              </a>
              <a
                href="#contact"
                className="text-sm font-semibold text-cream/80 transition-all duration-300 hover:text-gold"
                onClick={onNavLinkClick}
              >
                Kontakt
              </a>
              <a
                href="#menu"
                className="rounded-full border border-gold/40 bg-gold px-5 py-2.5 text-sm font-bold text-noir transition-all duration-300 hover:-translate-y-0.5 hover:bg-beige focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-noir"
                onClick={onNavLinkClick}
              >
                Zobrazit menu
              </a>
            </nav>

            <button
              id={ids.menuToggle}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gold/20 bg-white/5 text-cream transition-all duration-300 hover:bg-white/10 md:hidden focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-noir"
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
            className={
              open
                ? 'border-t border-gold/10 px-4 pb-4 pt-3 md:hidden'
                : 'hidden border-t border-gold/10 px-4 pb-4 pt-3 md:hidden'
            }
          >
            <nav className="flex flex-col gap-2" aria-label="Mobilní navigace">
              <a
                href="#about"
                className="rounded-xl px-3 py-3 text-sm font-semibold text-cream transition-all duration-300 hover:bg-white/5"
                onClick={onNavLinkClick}
              >
                O nás
              </a>
              <a
                href="#menu"
                className="rounded-xl px-3 py-3 text-sm font-semibold text-cream transition-all duration-300 hover:bg-white/5"
                onClick={onNavLinkClick}
              >
                Menu
              </a>
              <a
                href="#gallery"
                className="rounded-xl px-3 py-3 text-sm font-semibold text-cream transition-all duration-300 hover:bg-white/5"
                onClick={onNavLinkClick}
              >
                Galerie
              </a>
              <a
                href="#hours"
                className="rounded-xl px-3 py-3 text-sm font-semibold text-cream transition-all duration-300 hover:bg-white/5"
                onClick={onNavLinkClick}
              >
                Otevírací doba
              </a>
              <a
                href="#contact"
                className="rounded-xl px-3 py-3 text-sm font-semibold text-cream transition-all duration-300 hover:bg-white/5"
                onClick={onNavLinkClick}
              >
                Kontakt
              </a>
              <a
                href="#menu"
                className="mt-2 rounded-xl bg-gold px-4 py-3 text-center text-sm font-bold text-noir transition-all duration-300 hover:bg-beige"
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
