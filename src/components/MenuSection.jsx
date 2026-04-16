import React from 'react'

export default function MenuSection() {
  const coffeeItems = [
    { name: 'Espresso', desc: 'Krátké, intenzivní a čisté, s elegantní sladkostí a plným tělem.', price: '62 Kč' },
    { name: 'Cappuccino', desc: 'Jemně našlehané mléko a espresso v dokonale vyváženém poměru.', price: '84 Kč' },
    { name: 'Flat White', desc: 'Plnější chuťový profil, hebká textura a výraznější kávový charakter.', price: '92 Kč' },
    { name: 'Batch Brew', desc: 'Čistá a lehká filtrovaná káva s delším, elegantním dozníváním.', price: '89 Kč' },
  ]

  const brunchItems = [
    { name: 'Avokádový toast', desc: 'Křupavý kváskový chléb, avokádo, bylinky a pošírované vejce.', price: '168 Kč' },
    { name: 'Croissant se šunkou a sýrem', desc: 'Máslový croissant, kvalitní šunka, sýr comté a zelený salát.', price: '152 Kč' },
    { name: 'Jogurt bowl granola', desc: 'Řecký jogurt, domácí granola, sezónní ovoce a med.', price: '146 Kč' },
    { name: 'Vejce Benedikt', desc: 'Dvě pošírovaná vejce, holandská omáčka a kváskový muffin.', price: '184 Kč' },
  ]

  const dessertItems = [
    { name: 'Pistáciový cheesecake', desc: 'Krémová textura, jemná sladkost a prémiový pistáciový akcent.', price: '109 Kč' },
    { name: 'Čokoládový dort', desc: 'Intenzivní kakao, hebký krém a elegantní, nevtíravá sladkost.', price: '104 Kč' },
    { name: 'Citronová tartaletka', desc: 'Křehké těsto, svěží citronový krém a čisté zakončení chuti.', price: '99 Kč' },
    { name: 'Medovník sklep kafe', desc: 'Vrstvený dezert s jemným krémem a teplým medovým tónem.', price: '96 Kč' },
  ]

  const drinkItems = [
    { name: 'Domácí limonáda yuzu', desc: 'Lehká citrusová svěžest s jemnou perlivostí a čistým profilem.', price: '82 Kč' },
    { name: 'Matcha tonic', desc: 'Moderní osvěžení s lehkou hořkostí, tonikem a citrusovým tónem.', price: '98 Kč' },
    { name: 'Sklenka prosecca', desc: 'Lehký elegantní doplněk k dezertu i klidnému odpolednímu setkání.', price: '125 Kč' },
    { name: 'Naturální víno', desc: 'Pečlivě vybraný sezónní výběr pro pomalý večer a sdílené chvíle.', price: '145 Kč' },
  ]

  const MenuRow = ({ item, isLast }) => (
    <div className={`flex items-start justify-between gap-4 ${!isLast ? 'border-b border-mocha/10 pb-4' : ''}`}>
      <div>
        <h4 className="font-bold text-ink">{item.name}</h4>
        <p className="mt-1 text-sm text-ink/65">{item.desc}</p>
      </div>
      <span className="whitespace-nowrap text-sm font-extrabold text-bronze">{item.price}</span>
    </div>
  )

  return (
    <section id="menu" className="section-anchor bg-gradient-to-b from-[#eadfce] to-[#f5efe6] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.24em] text-bronze">Menu / nabídka</span>
          <h2 className="mt-3 font-display text-4xl font-black text-ink sm:text-5xl">
            To nejlepší pro pohodové ráno, pomalý brunch i sladkou pauzu během dne.
          </h2>
          <p className="mt-5 text-base leading-8 text-ink/75">
            Přehledné menu, oblíbené klasiky i pár signature položek, které se skvěle hodí k atmosféře sklep kafe. Vyberte si podle chuti a klidně zůstaňte o chvíli déle.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-mocha/10 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-warm sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-display text-3xl font-extrabold text-ink">Coffee</h3>
              <span className="rounded-full bg-cream px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-bronze">
                Výběrová
              </span>
            </div>
            <div className="mt-6 space-y-5">
              {coffeeItems.map((item, idx) => (
                <MenuRow key={item.name} item={item} isLast={idx === coffeeItems.length - 1} />
              ))}
            </div>
          </article>

          <article className="rounded-[2rem] border border-mocha/10 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-warm sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-display text-3xl font-extrabold text-ink">Breakfast / brunch</h3>
              <span className="rounded-full bg-cream px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-bronze">
                Celý den
              </span>
            </div>
            <div className="mt-6 space-y-5">
              {brunchItems.map((item, idx) => (
                <MenuRow key={item.name} item={item} isLast={idx === brunchItems.length - 1} />
              ))}
            </div>
          </article>

          <article className="rounded-[2rem] border border-mocha/10 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-warm sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-display text-3xl font-extrabold text-ink">Desserts</h3>
              <span className="rounded-full bg-cream px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-bronze">
                Denně čerstvé
              </span>
            </div>
            <div className="mt-6 space-y-5">
              {dessertItems.map((item, idx) => (
                <MenuRow key={item.name} item={item} isLast={idx === dessertItems.length - 1} />
              ))}
            </div>
          </article>

          <article className="lux-dots brown-surface rounded-[2rem] border border-gold/15 p-6 text-cream shadow-luxe sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-display text-3xl font-extrabold">Wine / drinks</h3>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-gold">
                Signature selection
              </span>
            </div>
            <div className="mt-6 space-y-5 relative">
              {drinkItems.map((item) => (
                <div key={item.name} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-bold text-cream">{item.name}</h4>
                      <p className="mt-2 text-sm leading-7 text-cream/75">{item.desc}</p>
                    </div>
                    <span className="whitespace-nowrap text-sm font-extrabold text-gold">{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
