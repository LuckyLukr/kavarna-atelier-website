import React from 'react'

export default function About() {
  return (
    <section id="about" className="section-anchor relative bg-cream py-20 sm:py-24">
      <div className="absolute inset-0 grain opacity-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-bronze">O nás</span>
            <h2 className="mt-3 font-display text-4xl font-black leading-tight text-ink sm:text-5xl">
              Prémiová kavárna s útulnou duší a atmosférou, která zůstává v paměti.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-ink/75">
              SklepKafe vzniklo jako místo pro hosty, kteří hledají víc než jen dobrou kávu. Spojujeme elegantní prostředí, pečlivě vybraný servis, silný vizuální charakter a nabídku, která funguje od ranního espressa až po odpolední dezert.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-8 text-ink/75">
              Interiér staví na teplých tónech, jemných kontrastech a sofistikovaném detailu. Výsledkem je moderní coffee house, který působí luxusně, ale stále přirozeně a lidsky — přesně tak, jak má kvalitní kavárna působit.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <article className="rounded-3xl border border-mocha/10 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-warm">
                <h3 className="font-display text-2xl font-bold text-ink">Výběrová káva</h3>
                <p className="mt-3 text-sm leading-7 text-ink/70">
                  Každý šálek je postavený na přesnosti, čisté chuti a konzistentní připravě.
                </p>
              </article>
              <article className="rounded-3xl border border-mocha/10 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-warm">
                <h3 className="font-display text-2xl font-bold text-ink">Luxusní atmosféra</h3>
                <p className="mt-3 text-sm leading-7 text-ink/70">
                  Teplé světlo, měkké stíny a prostor, který působí elegantně i pohodlně.
                </p>
              </article>
              <article className="rounded-3xl border border-mocha/10 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-warm">
                <h3 className="font-display text-2xl font-bold text-ink">Poctivé dezerty</h3>
                <p className="mt-3 text-sm leading-7 text-ink/70">
                  Nabídka sladkého doplňuje kávový zážitek a podporuje prémiový charakter značky.
                </p>
              </article>
              <article className="rounded-3xl border border-mocha/10 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-warm">
                <h3 className="font-display text-2xl font-bold text-ink">Místo pro moment</h3>
                <p className="mt-3 text-sm leading-7 text-ink/70">
                  SklepKafe je ideální pro krátké zastavení, schůzku i pomalejší odpoledne.
                </p>
              </article>
            </div>
          </div>

          <aside className="grid gap-5">
            <article className="overflow-hidden rounded-[2rem] border border-mocha/10 bg-white shadow-warm">
              <img
                src="/images/tiles-1.png"
                alt="Detail kávy a servisu v kavárně SklepKafe"
                className="h-64 w-full object-cover transition-all duration-500 hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="font-display text-3xl font-bold text-ink">Servis s lehkostí</h3>
                <p className="mt-3 text-sm leading-7 text-ink/70">
                  Profesionální prezentace, klidná obsluha a detail, který host cítí na první pohled.
                </p>
              </div>
            </article>

            <article className="overflow-hidden rounded-[2rem] border border-gold/15 bg-noir text-cream shadow-luxe">
              <img
                src="/images/tiles-2.png"
                alt="Atmosférický detail interiéru kavárny SklepKafe"
                className="h-64 w-full object-cover opacity-90 transition-all duration-500 hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="font-display text-3xl font-bold">Interiér s charakterem</h3>
                <p className="mt-3 text-sm leading-7 text-cream/80">
                  Kombinace tmavých tónů, zlatých akcentů a měkkého světla vytváří exkluzivní coffee-house mood.
                </p>
              </div>
            </article>
          </aside>
        </div>
      </div>
    </section>
  )
}
