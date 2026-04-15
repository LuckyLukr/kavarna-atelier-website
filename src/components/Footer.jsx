import React from 'react'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-noir text-cream">
      <div className="absolute inset-0 opacity-20">
        <img
          src="/images/footer-1.png"
          alt="Dekorativní footer fotografie kavárny SklepKafe"
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <a
              href="#home"
              className="inline-flex items-center gap-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-noir"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-gold">
                <span className="font-display text-xl font-black">S</span>
              </div>
              <div>
                <p className="font-display text-3xl font-extrabold leading-none">SklepKafe</p>
                <p className="mt-1 text-sm text-cream/75">
                  Luxusní, útulná a moderní kavárna s výraznou atmosférou.
                </p>
              </div>
            </a>
            <p className="mt-6 max-w-xl text-sm leading-7 text-cream/75">
              Web prezentuje SklepKafe jako stylovou prémiovou značku s důrazem na vizuální kvalitu, přehlednost, emoci a profesionální použití v reálném provozu kavárny.
            </p>
          </div>

          <nav aria-label="Rychlé odkazy" className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-gold">Rychlé odkazy</h3>
            <a href="#about" className="block text-sm text-cream/75 transition-all duration-300 hover:text-white">
              O nás
            </a>
            <a href="#menu" className="block text-sm text-cream/75 transition-all duration-300 hover:text-white">
              Menu
            </a>
            <a href="#gallery" className="block text-sm text-cream/75 transition-all duration-300 hover:text-white">
              Galerie
            </a>
            <a href="#hours" className="block text-sm text-cream/75 transition-all duration-300 hover:text-white">
              Otevírací doba
            </a>
            <a href="#contact" className="block text-sm text-cream/75 transition-all duration-300 hover:text-white">
              Kontakt
            </a>
          </nav>

          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-gold">Sociální sítě</h3>
            <a href="#" className="block text-sm text-cream/75 transition-all duration-300 hover:text-white">
              Instagram
            </a>
            <a href="#" className="block text-sm text-cream/75 transition-all duration-300 hover:text-white">
              Facebook
            </a>
            <a href="mailto:ahoj@sklepkafe.cz" className="block text-sm text-cream/75 transition-all duration-300 hover:text-white">
              ahoj@sklepkafe.cz
            </a>
            <a href="tel:+420777123456" className="block text-sm text-cream/75 transition-all duration-300 hover:text-white">
              +420 777 123 456
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-6 text-sm text-cream/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 SklepKafe. Všechna práva vyhrazena.</p>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="transition-all duration-300 hover:text-white">
              Privacy
            </a>
            <a href="#" className="transition-all duration-300 hover:text-white">
              Terms
            </a>
            <a href="#" className="transition-all duration-300 hover:text-white">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
