import React from 'react'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest text-cream">
      <div className="absolute inset-0 opacity-15">
        <img
          src="/images/footer-1.png"
          alt="Dekorativní footer fotografie kavárny"
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <a
              href="#home"
              className="inline-flex items-center gap-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-sand focus:ring-offset-2 focus:ring-offset-forest"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cream text-forest">
                <span className="font-serif text-xl font-semibold">A</span>
              </div>
              <div>
                <p className="font-serif text-3xl leading-none">Atelier Café</p>
                <p className="mt-1 text-sm text-cream/75">Útulná, elegantní a moderní kavárna pro každý den.</p>
              </div>
            </a>
            <p className="mt-6 max-w-xl text-sm leading-7 text-cream/75">
              Web je navržený jako silná a rozšiřitelná prezentační stránka pro reálný provoz kavárny — s důrazem na atmosféru, konverzi, čitelnost a mobilní použití.
            </p>
          </div>

          <nav aria-label="Rychlé odkazy" className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-sand">Rychlé odkazy</h3>
            <a href="#about" className="block text-sm text-cream/75 transition-all duration-200 hover:text-white">
              O kavárně
            </a>
            <a href="#menu" className="block text-sm text-cream/75 transition-all duration-200 hover:text-white">
              Menu
            </a>
            <a href="#gallery" className="block text-sm text-cream/75 transition-all duration-200 hover:text-white">
              Galerie
            </a>
            <a href="#contact" className="block text-sm text-cream/75 transition-all duration-200 hover:text-white">
              Kontakt
            </a>
          </nav>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-sand">Sledujte nás</h3>
            <a href="#" className="block text-sm text-cream/75 transition-all duration-200 hover:text-white">
              Instagram
            </a>
            <a href="#" className="block text-sm text-cream/75 transition-all duration-200 hover:text-white">
              Facebook
            </a>
            <a href="mailto:ahoj@ateliercafe.cz" className="block text-sm text-cream/75 transition-all duration-200 hover:text-white">
              ahoj@ateliercafe.cz
            </a>
            <a href="tel:+420777123456" className="block text-sm text-cream/75 transition-all duration-200 hover:text-white">
              +420 777 123 456
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-6 text-sm text-cream/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Atelier Café. Všechna práva vyhrazena.</p>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="transition-all duration-200 hover:text-white">
              Privacy
            </a>
            <a href="#" className="transition-all duration-200 hover:text-white">
              Terms
            </a>
            <a href="#" className="transition-all duration-200 hover:text-white">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
