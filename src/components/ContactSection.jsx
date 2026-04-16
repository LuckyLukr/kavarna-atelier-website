import React from 'react'

export default function ContactSection() {
  return (
    <section id="contact" className="section-anchor bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-bronze">Kontakt</span>
            <h2 className="mt-3 font-display text-4xl font-black text-ink sm:text-5xl">
              Najdete nás v Dolních Věstonicích. Přijďte na kávu, brunch i chvíli pohody.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-ink/75">
              Pokud máte cestu kolem, zastavte se na něco dobrého. A jestli se chcete na něco zeptat, napište nebo zavolejte — budeme rádi.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-mocha/10 bg-white p-5 shadow-soft">
                <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-bronze">Adresa</h3>
                <p className="mt-3 text-base leading-7 text-ink/85">
                  Dolní Věstonice
                  <br />
                  Jihomoravský kraj
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
                  <a href="mailto:ahoj@sklepkafe.cz" className="transition-all duration-300 hover:text-bronze">
                    ahoj@sklepkafe.cz
                  </a>
                </p>
              </div>

              <div className="rounded-3xl border border-mocha/10 bg-white p-5 shadow-soft">
                <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-bronze">Instagram</h3>
                <p className="mt-3 text-base leading-7 text-ink/85">
                  <a href="#" className="transition-all duration-300 hover:text-bronze">
                    @sklepkafe
                  </a>
                  <br />
                  <a href="#" className="transition-all duration-300 hover:text-bronze">
                    facebook.com/sklepkafe
                  </a>
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-[2rem] border border-mocha/10 bg-white p-6 shadow-soft">
              <h3 className="font-display text-3xl font-bold text-ink">Napište nebo se rovnou stavte</h3>
              <p className="mt-3 text-sm leading-7 text-ink/70">
                Rádi poradíme s dotazy, větší návštěvou i čímkoliv, co vás kolem sklep kafe zajímá. Nejlepší je ale přijít osobně a dát si něco výborného.
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="overflow-hidden rounded-[2rem] border border-mocha/10 bg-white shadow-warm">
              <div className="aspect-[16/10] w-full">
                <iframe
                  title="Mapa kavárny sklep kafe"
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=Doln%C3%AD%20V%C4%9Bstonice&z=15&output=embed"
                />
              </div>
            </div>

            <div className="rounded-[2rem] border border-mocha/10 bg-white p-6 shadow-soft">
              <h3 className="font-display text-3xl font-bold text-ink">Sledujte nás online</h3>
              <p className="mt-2 text-sm leading-7 text-ink/70">
                Na sociálních sítích sdílíme novinky z kavárny, sezónní nabídku, dezerty i každodenní atmosféru, která dělá sklep kafe tím, čím je.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <a href="#" className="rounded-2xl border border-mocha/10 bg-cream px-5 py-4 text-sm font-bold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-beige">
                  Instagram
                </a>
                <a href="#" className="rounded-2xl border border-mocha/10 bg-cream px-5 py-4 text-sm font-bold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-beige">
                  Facebook
                </a>
                <a href="mailto:ahoj@sklepkafe.cz" className="rounded-2xl border border-mocha/10 bg-cream px-5 py-4 text-sm font-bold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-beige">
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
