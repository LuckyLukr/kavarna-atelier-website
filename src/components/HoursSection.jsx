import React from 'react'

export default function HoursSection() {
  return (
    <section id="hours" className="section-anchor bg-noir py-20 text-cream sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-gold">Otevírací doba</span>
            <h2 className="mt-3 font-display text-4xl font-black sm:text-5xl">
              Kdykoliv máte chuť zpomalit, Atelier je připravený.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-cream/75">
              Přehledná otevírací doba pomáhá hostům plánovat návštěvu bez zbytečného hledání. Stačí přijít a užít si atmosféru, kávu i chvíli klidu.
            </p>
          </div>

          <div className="rounded-[2rem] border border-gold/15 bg-white/5 p-6 shadow-luxe sm:p-8">
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
                Nejlepší čas pro klidnější návštěvu bývá dopoledne a pozdní odpoledne. Ve špičce je prostor živější, ale stále příjemně komfortní.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
