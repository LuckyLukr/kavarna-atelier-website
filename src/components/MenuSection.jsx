import React from 'react'

export default function MenuSection() {
  return (
    <section id="menu" className="section-anchor bg-gradient-to-b from-[#eadfce] to-[#f5efe6] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.24em] text-bronze">Menu / nabídka</span>
          <h2 className="mt-3 font-display text-4xl font-black text-ink sm:text-5xl">
            Silná nabídka pro celý den — káva, dezerty i signature nápoje.
          </h2>
          <p className="mt-5 text-base leading-8 text-ink/75">
            Menu je navržené tak, aby bylo čitelné, elegantní a použitelné pro reálný provoz. Jasná hierarchie, výrazné názvy a přehledné ceny podporují rychlou orientaci i prémiový dojem.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-mocha/10 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-warm sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-display text-3xl font-extrabold text-ink">Káva</h3>
              <span className="rounded-full bg-cream px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-bronze">
                Výběrová
              </span>
            </div>

            <div className="mt-6 space-y-5">
              {[
                { name: 'Espresso', desc: 'Krátké, intenzivní a čisté, s elegantní sladkostí a plným tělem.', price: '62 Kč' },
                { name: 'Cappuccino', desc: 'Jemně našlehané mléko a espresso v dokonale vyváženém poměru.', price: '84 Kč' },
                { name: 'Flat White', desc: 'Plnější chuťový profil, hebká textura a výraznější kávový charakter.', price: '92 Kč' },
                { name: 'Batch Brew', desc: 'Čistá a lehká filtrovaná káva s delším, elegantním dozníváním.', price: '89 Kč' },
              ].map((it, idx, arr) => (
                <div
                  key={it.name}
                  className={
                    idx !== arr.length - 1
                      ? 'flex items-start justify-between gap-4 border-b border-mocha/10 pb-4'
                      : 'flex items-start justify-between gap-4'
                  }
                >
                  <div>
                    <h4 className="font-bold text-ink">{it.name}</h4>
                    <p className="mt-1 text-sm text-ink/65">{it.desc}</p>
                  </div>
                  <span className="whitespace-nowrap text-sm font-extrabold text-bronze">{it.price}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[2rem] border border-mocha/10 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-warm sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-display text-3xl font-extrabold text-ink">Dezerty</h3>
              <span className="rounded-full bg-cream px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-bronze">
                Denně čerstvé
              </span>
            </div>

            <div className="mt-6 space-y-5">
              {[
                { name: 'Pistáciový cheesecake', desc: 'Krémová textura, jemná sladkost a prémiový pistáciový akcent.', price: '109 Kč' },
                { name: 'Čokoládový dort', desc: 'Intenzivní kakao, hebký krém a elegantní, nevtíravá sladkost.', price: '104 Kč' },
                { name: 'Citronová tartaletka', desc: 'Křehké těsto, svěží citronový krém a čisté zakončení chuti.', price: '99 Kč' },
                { name: 'Medovník SklepKafe', desc: 'Vrstvený dezert s jemným krémem a teplým medovým tónem.', price: '96 Kč' },
              ].map((it, idx, arr) => (
                <div
                  key={it.name}
                  className={
                    idx !== arr.length - 1
                      ? 'flex items-start justify-between gap-4 border-b border-mocha/10 pb-4'
                      : 'flex items-start justify-between gap-4'
                  }
                >
                  <div>
                    <h4 className="font-bold text-ink">{it.name}</h4>
                    <p className="mt-1 text-sm text-ink/65">{it.desc}</p>
                  </div>
                  <span className="whitespace-nowrap text-sm font-extrabold text-bronze">{it.price}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[2rem] border border-mocha/10 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-warm sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-display text-3xl font-extrabold text-ink">Nápoje</h3>
              <span className="rounded-full bg-cream px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-bronze">
                Signature selection
              </span>
            </div>

            <div className="mt-6 space-y-5">
              {[
                { name: 'Domácí limonáda yuzu', desc: 'Lehká citrusová svěžest s jemnou perlivostí a čistým profilem.', price: '82 Kč' },
                { name: 'Matcha tonic', desc: 'Moderní osvěžení s lehkou hořkostí, tonikem a citrusovým tónem.', price: '98 Kč' },
                { name: 'Horká čokoláda deluxe', desc: 'Plná čokoládová chuť, sametová textura a bohatý závěr.', price: '92 Kč' },
                { name: 'Sklenka prosecca', desc: 'Lehký elegantní doplněk k dezertu i klidnému odpolednímu setkání.', price: '125 Kč' },
              ].map((it, idx, arr) => (
                <div
                  key={it.name}
                  className={
                    idx !== arr.length - 1
                      ? 'flex items-start justify-between gap-4 border-b border-mocha/10 pb-4'
                      : 'flex items-start justify-between gap-4'
                  }
                >
                  <div>
                    <h4 className="font-bold text-ink">{it.name}</h4>
                    <p className="mt-1 text-sm text-ink/65">{it.desc}</p>
                  </div>
                  <span className="whitespace-nowrap text-sm font-extrabold text-bronze">{it.price}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[2rem] border border-gold/15 bg-noir p-6 text-cream shadow-luxe sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-display text-3xl font-extrabold">SklepKafe mood</h3>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-gold">
                Bez rezervací
              </span>
            </div>

            <div className="mt-6 space-y-5">
              {[
                {
                  title: 'Přijďte kdykoliv během dne',
                  desc: 'Kavárna funguje bez rezervační sekce a bez rezervací — jednoduše přijďte na kávu, dezert nebo chvíli klidu.',
                },
                {
                  title: 'Stylová a snadná orientace',
                  desc: 'Přehledné kategorie, výrazné názvy a kontrastní ceny podporují rychlé rozhodnutí i luxusní dojem.',
                },
                {
                  title: 'Vhodné pro reálný provoz',
                  desc: 'Web je připravený na další rozvoj značky, sezónní nabídku, eventy nebo budoucí obsahové rozšíření.',
                },
              ].map((b) => (
                <div key={b.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <h4 className="font-bold text-cream">{b.title}</h4>
                  <p className="mt-2 text-sm leading-7 text-cream/75">{b.desc}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
