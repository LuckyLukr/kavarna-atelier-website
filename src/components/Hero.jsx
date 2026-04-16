import React from 'react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-noir">
      <div className="absolute inset-0">
        <img
          src="/images/hero-1.jpg"
          alt="Hero fotografie kavárny sklep kafe s útulnou atmosférou"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="hero-overlay absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/30 to-noir/10" />

      <div className="relative mx-auto grid min-h-[100svh] max-w-7xl items-end gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-20">
        <div className="max-w-3xl py-10 sm:py-16 lg:py-24">
          <span className="mb-5 inline-flex items-center rounded-full border border-gold/25 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-gold">
            Výběrová káva • Brunch • Dolní Věstonice
          </span>

          <h1 className="font-display text-5xl font-black leading-[0.9] text-cream sm:text-6xl lg:text-7xl xl:text-[5.4rem]">
            sklep kafe. Místo v Dolních Věstonicích, kam se chodí na skvělou kávu a krásnou atmosféru.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-cream/75 sm:text-lg">
            Zastavte se na espresso, pomalý brunch i sladkou tečku dne. sklep kafe spojuje útulnost, přírodní tóny a lehce luxusní náladu, ve které se dobře sedí ještě o chvíli déle.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#menu"
              className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3.5 text-sm font-bold text-noir shadow-luxe transition-all duration-300 hover:-translate-y-0.5 hover:bg-beige focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-noir"
            >
              Zobrazit menu
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-bold text-cream transition-all duration-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-noir"
            >
              Kontakt
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-soft" style={{ backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)' }}>
              <p className="text-2xl font-extrabold text-gold">Každý den</p>
              <p className="mt-1 text-sm text-cream/65">Káva, pohoda a chvíle jen pro vás</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-soft" style={{ backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)' }}>
              <p className="text-2xl font-extrabold text-gold">Signature mood</p>
              <p className="mt-1 text-sm text-cream/65">Teplý interiér a prémiový detail</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-soft col-span-2 sm:col-span-1" style={{ backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)' }}>
              <p className="text-2xl font-extrabold text-gold">Dolní Věstonice</p>
              <p className="mt-1 text-sm text-cream/65">Krásné místo pro zastavení i setkání</p>
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="gold-ring lux-dots brown-surface rounded-[2rem] border border-white/10 p-5">
            <div className="rounded-[1.5rem] border border-gold/15 bg-noir/45 p-6">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold">Signature mood</p>
              <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-cream">
                Útulné místo s charakterem, kam se hodí ranní káva i pomalé odpoledne.
              </h2>
              <p className="mt-4 text-sm leading-7 text-cream/70">
                sklep kafe staví na silné atmosféře, pečlivém servisu a vizuálu, který působí elegantně, přirozeně a zapamatovatelně od prvního pohledu.
              </p>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-gold/0 via-gold/40 to-gold/0" />
              <div className="mt-6 flex items-center justify-between text-sm text-cream/70">
                <span>Káva</span>
                <span>Brunch</span>
                <span>Dezerty</span>
                <span>Atmosféra</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
