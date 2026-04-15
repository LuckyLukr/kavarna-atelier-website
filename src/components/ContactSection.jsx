import React from 'react'

export default function ContactSection() {
  return (
    <section id="contact" className="section-anchor bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-bronze">Kontakt</span>
            <h2 className="mt-3 font-display text-4xl font-black text-ink sm:text-5xl">
              Přijďte na kávu, brunch a atmosféru, která má styl.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-ink/75">
              Kontakt je navržený přehledně a prakticky. Host okamžitě najde adresu, telefon, e-mail, sociální sítě i mapu lokace bez zbytečných kroků.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-mocha/10 bg-white p-5 shadow-soft">
                <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-bronze">Adresa</h3>
                <p className="mt-3 text-base leading-7 text-ink/85">
                  Masarykova 24
                  <br />
                  602 00 Brno
                </p>
              </div>

              <div className="rounded-3xl border border-mocha/10 bg-white p-5 shadow-soft">
                <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-bronze">Telefon</h3>
                <p className="mt-3 text-base leading-7 text-ink/85">
                  <a href="tel:+420777123456" className="transition-all duration-300 hover:text-bronze">
                    +420 777 123 456
                  </a>
                </p>
              </div>

              <div className="rounded-3xl border border-mocha/10 bg-white p-5 shadow-soft">
                <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-bronze">E-mail</h3>
                <p className="mt-3 text-base leading-7 text-ink/85">
                  <a href="mailto:ahoj@kavarnaatelier.cz" className="transition-all duration-300 hover:text-bronze">
                    ahoj@kavarnaatelier.cz
                  </a>
                </p>
              </div>

              <div className="rounded-3xl border border-mocha/10 bg-white p-5 shadow-soft">
                <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-bronze">Instagram</h3>
                <p className="mt-3 text-base leading-7 text-ink/85">
                  <a href="#" className="transition-all duration-300 hover:text-bronze">
                    @kavarnaatelier
                  </a>
                  <br />
                  <a href="#" className="transition-all duration-300 hover:text-bronze">
                    facebook.com/kavarnaatelier
                  </a>
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-[2rem] border border-mocha/10 bg-white p-6 shadow-soft">
              <h3 className="font-display text-3xl font-bold text-ink">Provozní informace</h3>
              <p className="mt-3 text-sm leading-7 text-ink/70">
                Pro větší návštěvu, focení nebo spolupráci nás kontaktujte předem telefonicky nebo e-mailem. Rádi vám pomůžeme s individuální domluvou.
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="overflow-hidden rounded-[2rem] border border-mocha/10 bg-white shadow-warm">
              <div className="aspect-[16/10] w-full">
                <iframe
                  title="Mapa kavárny Atelier"
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=Brno%20Masarykova%2024&z=15&output=embed"
                />
              </div>
            </div>

            <div className="rounded-[2rem] border border-mocha/10 bg-white p-6 shadow-soft">
              <h3 className="font-display text-3xl font-bold text-ink">Sledujte nás online</h3>
              <p className="mt-2 text-sm leading-7 text-ink/70">
                Sociální sítě jsou důležitou součástí prezentace značky — sdílíme novinky, brunch menu, dezerty, denní atmosféru i vizuální momenty z kavárny.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <a href="#" className="rounded-2xl border border-mocha/10 bg-cream px-5 py-4 text-sm font-bold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-beige">
                  Instagram
                </a>
                <a href="#" className="rounded-2xl border border-mocha/10 bg-cream px-5 py-4 text-sm font-bold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-beige">
                  Facebook
                </a>
                <a href="mailto:ahoj@kavarnaatelier.cz" className="rounded-2xl border border-mocha/10 bg-cream px-5 py-4 text-sm font-bold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-beige">
                  E-mail
                </a>
                <a href="tel:+420777123456" className="rounded-2xl border border-mocha/10 bg-cream px-5 py-4 text-sm font-bold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-beige">
                  Zavolat
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
