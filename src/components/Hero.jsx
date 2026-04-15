import React from 'react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden" id="home">
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-cream/90 to-beige/60" />
      <div className="relative mx-auto grid min-h-[100svh] max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
        <div className="order-2 lg:order-1">
          <span className="mb-4 inline-flex items-center rounded-full border border-forest/15 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-forest">
            Výběrová káva • Klidné ráno • Večerní sklenka vína
          </span>
          <h1 className="font-serif text-5xl leading-[0.95] text-ink sm:text-6xl lg:text-7xl">
            Místo, kde káva chutná pomaleji a čas plyne příjemněji.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-ink/75 sm:text-lg">
            Atelier Café je útulná městská kavárna pro ranní espresso, dlouhé brunche i klidná odpoledne nad dezertem. Stavíme na poctivé surovině, přirozené atmosféře a servisu, kvůli kterému se hosté rádi vrací.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#menu"
              className="inline-flex items-center justify-center rounded-full bg-forest px-6 py-3.5 text-sm font-semibold text-cream shadow-warm transition-all duration-200 hover:-translate-y-0.5 hover:bg-espresso focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2 focus:ring-offset-cream"
            >
              Zobrazit menu
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-espresso/15 bg-white/70 px-6 py-3.5 text-sm font-semibold text-ink transition-all duration-200 hover:bg-white focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2 focus:ring-offset-cream"
            >
              Kontakt
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-espresso/10 bg-white/70 p-4 shadow-soft">
              <p className="text-2xl font-semibold text-forest">7:30–22:00</p>
              <p className="mt-1 text-sm text-ink/65">Otevřeno každý den</p>
            </div>
            <div className="rounded-2xl border border-espresso/10 bg-white/70 p-4 shadow-soft">
              <p className="text-2xl font-semibold text-forest">Brunch</p>
              <p className="mt-1 text-sm text-ink/65">Čerstvě každý den</p>
            </div>
            <div className="rounded-2xl border border-espresso/10 bg-white/70 p-4 shadow-soft col-span-2 sm:col-span-1">
              <p className="text-2xl font-semibold text-forest">Centrum města</p>
              <p className="mt-1 text-sm text-ink/65">Snadno dostupná adresa</p>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/40 shadow-warm">
            <img
              src="/images/hero-1.jpg"
              alt="Hero fotografie kavárny s útulnou atmosférou, kávou a elegantním interiérem"
              className="h-[420px] w-full object-cover sm:h-[560px] lg:h-[720px]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-cream/90 p-4 shadow-soft sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">Atmosféra, na kterou se těšíte</p>
              <p className="mt-2 text-sm leading-6 text-ink/75">
                Elegantní prostor, teplé materiály, velké světlo a servis, který je přirozený, ne strojený.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
