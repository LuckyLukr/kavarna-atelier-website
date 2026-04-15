import React from 'react'

export default function ContactSection() {
  return (
    <section id="contact" className="section-anchor bg-ink py-20 text-cream sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sand">Kontakt</span>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl">Přijďte na kávu, brunch nebo jen na chvíli zpomalit.</h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-cream/75">
              Snadno dostupná adresa, jasné otevírací hodiny a kontakt, který je na webu okamžitě k nalezení. Přesně tak vypadá web, který podporuje reálný provoz kavárny.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                { h: 'Adresa', p: 'Masarykova 24\n602 00 Brno' },
                { h: 'Telefon', p: '+420 777 123 456' },
                { h: 'E-mail', p: 'ahoj@ateliercafe.cz' },
                { h: 'Instagram', p: '@ateliercafe.brno' },
              ].map((it) => (
                <div key={it.h} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-sand">{it.h}</h3>
                  <p className="mt-3 text-base leading-7 text-cream/85" style={{ whiteSpace: 'pre-line' }}>
                    {it.p}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <h3 className="font-serif text-3xl">Otevírací doba</h3>
              <div className="mt-5 space-y-3 text-sm text-cream/80">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span>Pondělí – Pátek</span>
                  <span>7:30 – 21:00</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span>Sobota</span>
                  <span>8:00 – 22:00</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Neděle</span>
                  <span>8:00 – 20:00</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-warm">
              <div className="aspect-[16/10] w-full">
                <iframe
                  title="Mapa kavárny Atelier Café"
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=Brno%20Masarykova%2024&z=15&output=embed"
                />
              </div>
            </div>

            <form
              className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-warm"
              action="#"
              method="post"
              onSubmit={(e) => e.preventDefault()}
            >
              <h3 className="font-serif text-3xl">Napište nám</h3>
              <p className="mt-2 text-sm leading-7 text-cream/75">Jednoduchý kontaktní formulář pro dotazy, soukromé akce nebo spolupráci.</p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-cream">
                    Jméno
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Vaše jméno"
                    className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-cream placeholder:text-cream/45 outline-none transition-all duration-200 focus:border-sand focus:ring-2 focus:ring-sand"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-cream">
                    E-mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="vas@email.cz"
                    className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-cream placeholder:text-cream/45 outline-none transition-all duration-200 focus:border-sand focus:ring-2 focus:ring-sand"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="subject" className="mb-2 block text-sm font-medium text-cream">
                  Předmět
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Např. soukromá akce, catering, spolupráce"
                  className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-cream placeholder:text-cream/45 outline-none transition-all duration-200 focus:border-sand focus:ring-2 focus:ring-sand"
                />
              </div>

              <div className="mt-4">
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-cream">
                  Zpráva
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Dobrý den, rádi bychom se zeptali na..."
                  className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-cream placeholder:text-cream/45 outline-none transition-all duration-200 focus:border-sand focus:ring-2 focus:ring-sand"
                />
              </div>

              <button
                type="submit"
                className="mt-5 inline-flex items-center justify-center rounded-full bg-cream px-6 py-3.5 text-sm font-semibold text-forest transition-all duration-200 hover:bg-white focus:outline-none focus:ring-2 focus:ring-sand focus:ring-offset-2 focus:ring-offset-ink"
              >
                Odeslat zprávu
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
