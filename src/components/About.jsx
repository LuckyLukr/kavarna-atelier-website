import React from 'react'

export default function About() {
  return (
    <section id="about" className="section-anchor relative bg-white py-20 sm:py-24">
      <div className="absolute inset-0 grain opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">O kavárně</span>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-ink sm:text-5xl">
              Městská kavárna s klidem boutique prostoru.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-ink/75">
              V Atelier Café spojujeme poctivou výběrovou kávu, sezónní kuchyni a přirozeně útulný interiér. Nejsme jen místo na rychlé espresso — jsme prostor pro pracovní schůzky, pomalé snídaně, víkendové brunche i odpolední zastavení s dezertem.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-8 text-ink/75">
              Zakládáme si na detailech: kvalitním mléku, pečlivě laděném menu, příjemném světle, tichém designu a obsluze, která hosty vítá s lehkostí. Výsledek je jednoduchý — kavárna, která působí prémiově, ale vždy lidsky a přístupně.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <article className="rounded-3xl border border-espresso/10 bg-cream p-6 shadow-soft transition-all duration-200 hover:-translate-y-1">
                <h3 className="font-serif text-2xl text-ink">Výběrová káva</h3>
                <p className="mt-3 text-sm leading-7 text-ink/70">
                  Espresso, filtrovaná káva i sezónní signature nápoje připravované s důrazem na chuť a konzistenci.
                </p>
              </article>
              <article className="rounded-3xl border border-espresso/10 bg-cream p-6 shadow-soft transition-all duration-200 hover:-translate-y-1">
                <h3 className="font-serif text-2xl text-ink">Brunch bez spěchu</h3>
                <p className="mt-3 text-sm leading-7 text-ink/70">
                  Čerstvé pečivo, vejce, sladké i slané talíře a nabídka, která funguje pro pracovní den i víkend.
                </p>
              </article>
              <article className="rounded-3xl border border-espresso/10 bg-cream p-6 shadow-soft transition-all duration-200 hover:-translate-y-1">
                <h3 className="font-serif text-2xl text-ink">Atmosféra</h3>
                <p className="mt-3 text-sm leading-7 text-ink/70">
                  Teplé materiály, velké fotografie, tlumené tóny a prostor, ve kterém se dobře sedí i zůstává déle.
                </p>
              </article>
              <article className="rounded-3xl border border-espresso/10 bg-cream p-6 shadow-soft transition-all duration-200 hover:-translate-y-1">
                <h3 className="font-serif text-2xl text-ink">Večerní tón</h3>
                <p className="mt-3 text-sm leading-7 text-ink/70">
                  Kromě kávy nabízíme i víno a lehké drinky, takže kavárna plynule přechází z rána do pozdního odpoledne.
                </p>
              </article>
            </div>
          </div>

          <aside className="grid gap-5">
            <article className="overflow-hidden rounded-[2rem] border border-espresso/10 bg-white shadow-warm">
              <img
                src="/images/tiles-1.png"
                alt="Detail kávy a servisu v kavárně"
                className="h-64 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="font-serif text-3xl text-ink">Přirozený servis</h3>
                <p className="mt-3 text-sm leading-7 text-ink/70">
                  Hosté oceňují klidnou obsluhu, čisté prostředí a promyšlený rytmus prostoru během celého dne.
                </p>
              </div>
            </article>

            <article className="overflow-hidden rounded-[2rem] border border-espresso/10 bg-forest text-cream shadow-warm">
              <img
                src="/images/tiles-2.png"
                alt="Atmosférický detail interiéru kavárny"
                className="h-64 w-full object-cover opacity-90"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="font-serif text-3xl">Místo pro setkání</h3>
                <p className="mt-3 text-sm leading-7 text-cream/80">
                  Ať přijdete na rychlou kávu, pracovní schůzku nebo pomalý brunch, prostor je navržený tak, aby působil klidně a reprezentativně.
                </p>
              </div>
            </article>
          </aside>
        </div>
      </div>
    </section>
  )
}
