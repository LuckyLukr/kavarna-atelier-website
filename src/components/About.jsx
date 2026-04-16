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
              sklep kafe je kavárna s útulnou duší, krásným světlem a chutí zůstat déle.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-ink/75">
              Tvoříme místo, kam se chodí nejen na dobrou kávu, ale i na příjemný pocit. V sklep kafe se potkává výběrová káva, poctivý brunch, milý servis a prostředí, které působí klidně, teple a přirozeně elegantně.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-8 text-ink/75">
              V Dolních Věstonicích chceme nabídnout kavárenský zážitek, který má styl, ale zároveň zůstává srdečný a neokázalý. Přijďte si posedět, dát si něco dobrého a užít si místo, kam se člověk rád vrací.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <article className="rounded-3xl border border-mocha/10 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-warm">
                <h3 className="font-display text-2xl font-bold text-ink">Výběrová káva</h3>
                <p className="mt-3 text-sm leading-7 text-ink/70">
                  Espresso i mléčné klasiky připravujeme s důrazem na čistou chuť, vyváženost a radost z každého šálku.
                </p>
              </article>
              <article className="rounded-3xl border border-mocha/10 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-warm">
                <h3 className="font-display text-2xl font-bold text-ink">Útulná elegance</h3>
                <p className="mt-3 text-sm leading-7 text-ink/70">
                  Přírodní paleta, teplé tóny a jemné detaily vytváří prostor, který působí luxusně a zároveň pohodově.
                </p>
              </article>
              <article className="rounded-3xl border border-mocha/10 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-warm">
                <h3 className="font-display text-2xl font-bold text-ink">Poctivé dezerty</h3>
                <p className="mt-3 text-sm leading-7 text-ink/70">
                  Sladká nabídka doplňuje kávu přesně tak, jak má — elegantně, čerstvě a s chutí na další sousto.
                </p>
              </article>
              <article className="rounded-3xl border border-mocha/10 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-warm">
                <h3 className="font-display text-2xl font-bold text-ink">Místo pro moment</h3>
                <p className="mt-3 text-sm leading-7 text-ink/70">
                  Na rychlé zastavení, klidnou schůzku i dlouhé odpoledne s kávou, vínem nebo brunchem.
                </p>
              </article>
            </div>
          </div>

          <aside className="grid gap-5">
            <article className="overflow-hidden rounded-[2rem] border border-mocha/10 bg-white shadow-warm">
              <img
                src="/images/tiles-1.png"
                alt="Detail kávy a servisu v kavárně sklep kafe"
                className="h-64 w-full object-cover transition-all duration-500 hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="font-display text-3xl font-bold text-ink">Servis s lehkostí</h3>
                <p className="mt-3 text-sm leading-7 text-ink/70">
                  Milý přístup, pečlivá prezentace a atmosféra, díky které se host cítí vítaný hned po příchodu.
                </p>
              </div>
            </article>

            <article className="lux-dots brown-surface overflow-hidden rounded-[2rem] border border-gold/15 text-cream shadow-luxe">
              <img
                src="/images/tiles-2.png"
                alt="Atmosférický detail interiéru kavárny sklep kafe"
                className="h-64 w-full object-cover opacity-90 transition-all duration-500 hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="p-6 relative">
                <h3 className="font-display text-3xl font-bold">Interiér s charakterem</h3>
                <p className="mt-3 text-sm leading-7 text-cream/80">
                  Kombinace hnědých tónů, jemných světlých akcentů a měkkého světla vytváří sofistikovaný coffee-house mood.
                </p>
              </div>
            </article>
          </aside>
        </div>
      </div>
    </section>
  )
}
