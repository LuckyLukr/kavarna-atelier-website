import React from 'react'

export default function HoursSection() {
  return (
    <section id="hours" className="section-anchor lux-dots brown-surface py-20 text-cream sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-gold">Otevírací doba</span>
            <h2 className="mt-3 font-display text-4xl font-black sm:text-5xl">
              Když dostanete chuť na dobrou kávu, sklep kafe je připravené.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-cream/75">
              Ať už se stavíte ráno pro svůj oblíbený šálek, nebo si chcete udělat delší pauzu během dne, rádi vás přivítáme v pohodové a elegantní atmosféře.
            </p>
          </div>

          <div className="rounded-[2rem] border border-gold/15 bg-white/5 p-6 shadow-luxe sm:p-8" style={{ backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)' }}>
            <div className="space-y-4 text-sm sm:text-base">
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                <span className="font-semibold text-cream/85">Pondělí – Pátek</span>
                <span className="font-extrabold text-gold">7:30 – 21:00</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                <span className="font-semibold text-cream/85">Sobota</span>
                <span className="font-extrabold text-gold">8:00 – 22:00</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                <span className="font-semibold text-cream/85">Neděle</span>
                <span className="font-extrabold text-gold">8:00 – 20:00</span>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-gold/15 bg-gold/10 p-5">
              <p className="text-sm leading-7 text-cream/80">
                Nejhezčí je to u nás na ranní kávu, klidný brunch i pomalé odpoledne se sladkou tečkou. Prostě kdykoliv máte chuť se na chvíli zastavit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
