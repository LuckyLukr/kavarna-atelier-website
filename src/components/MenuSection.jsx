import React from 'react'

const MenuBlock = ({ title, badge, items }) => {
  return (
    <article className="rounded-[2rem] border border-espresso/10 bg-white p-6 shadow-soft sm:p-8">
      <div className="flex items-center justify-between gap-4">
        <h3 className="font-serif text-3xl text-ink">{title}</h3>
        <span className="rounded-full bg-cream px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-mocha">
          {badge}
        </span>
      </div>
      <div className="mt-6 space-y-5">
        {items.map((it, idx) => (
          <div
            key={idx}
            className={
              idx !== items.length - 1 ? 'flex items-start justify-between gap-4 border-b border-espresso/10 pb-4' : 'flex items-start justify-between gap-4'
            }
          >
            <div>
              <h4 className="font-semibold text-ink">{it.name}</h4>
              <p className="mt-1 text-sm text-ink/65">{it.desc}</p>
            </div>
            <span className="whitespace-nowrap text-sm font-semibold text-forest">{it.price}</span>
          </div>
        ))}
      </div>
    </article>
  )
}

export default function MenuSection() {
  return (
    <section id="menu" className="section-anchor bg-beige/45 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">Menu</span>
          <h2 className="mt-3 font-serif text-4xl text-ink sm:text-5xl">Jednoduché menu, které zve k návratu.</h2>
          <p className="mt-5 text-base leading-8 text-ink/75">
            Nabídka je přehledná, čitelná a postavená na oblíbených položkách, které fungují v reálném provozu kavárny. Od ranní kávy přes brunch až po dezert a večerní sklenku.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-espresso/10 bg-white p-6 shadow-soft sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-serif text-3xl text-ink">Coffee</h3>
              <span className="rounded-full bg-cream px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-mocha">
                Výběrová
              </span>
            </div>
            <div className="mt-6 space-y-5">
              {[
                { name: 'Espresso', desc: 'Krátké, sladké, s čistým zakončením a výraznou vůní.', price: '59 Kč' },
                { name: 'Flat White', desc: 'Dvojité espresso a jemně našlehané mléko v ideální rovnováze.', price: '89 Kč' },
                { name: 'Cappuccino', desc: 'Klasika s plnou chutí, hebkou pěnou a elegantním profilem.', price: '79 Kč' },
                { name: 'V60 Filtr', desc: 'Lehčí šálek s čistotou, ovocností a delším dozníváním.', price: '95 Kč' },
              ].map((it, idx, arr) => (
                <div
                  key={it.name}
                  className={idx !== arr.length - 1 ? 'flex items-start justify-between gap-4 border-b border-espresso/10 pb-4' : 'flex items-start justify-between gap-4'}
                >
                  <div>
                    <h4 className="font-semibold text-ink">{it.name}</h4>
                    <p className="mt-1 text-sm text-ink/65">{it.desc}</p>
                  </div>
                  <span className="whitespace-nowrap text-sm font-semibold text-forest">{it.price}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[2rem] border border-espresso/10 bg-white p-6 shadow-soft sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-serif text-3xl text-ink">Breakfast / Brunch</h3>
              <span className="rounded-full bg-cream px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-mocha">
                Denně do 14:00
              </span>
            </div>
            <div className="mt-6 space-y-5">
              {[
                { name: 'Croissant se šunkou a sýrem', desc: 'Máslový croissant, kvalitní šunka, sýr Comté a zelený salát.', price: '149 Kč' },
                { name: 'Vejce na toastu', desc: 'Ztracená vejce, kváskový chléb, bylinkové máslo a mikrogreens.', price: '179 Kč' },
                { name: 'Ricotta lívance', desc: 'Nadýchané lívance s ovocem, vanilkovým krémem a javorovým sirupem.', price: '189 Kč' },
                { name: 'Granola bowl', desc: 'Domácí granola, řecký jogurt, kompotované ovoce a semínka.', price: '159 Kč' },
              ].map((it, idx, arr) => (
                <div
                  key={it.name}
                  className={idx !== arr.length - 1 ? 'flex items-start justify-between gap-4 border-b border-espresso/10 pb-4' : 'flex items-start justify-between gap-4'}
                >
                  <div>
                    <h4 className="font-semibold text-ink">{it.name}</h4>
                    <p className="mt-1 text-sm text-ink/65">{it.desc}</p>
                  </div>
                  <span className="whitespace-nowrap text-sm font-semibold text-forest">{it.price}</span>
                </div>
              ))}
            </div>
          </article>

          <MenuBlock
            title="Desserts"
            badge="Čerstvě připravené"
            items={[
              { name: 'Cheesecake s vanilkou', desc: 'Jemný, lehký a vyvážený dezert s máslovým korpusem.', price: '95 Kč' },
              { name: 'Čokoládový fondant', desc: 'Intenzivní čokoláda, tekutý střed a smetanový doprovod.', price: '109 Kč' },
              { name: 'Mrkvový dort', desc: 'Kořeněný korpus, lehký krém a jemná citrusová nota.', price: '89 Kč' },
              { name: 'Sezónní tartaletka', desc: 'Křehké těsto, ovocná složka a decentní sladkost.', price: '99 Kč' },
            ]}
          />

          <article className="rounded-[2rem] border border-espresso/10 bg-white p-6 shadow-soft sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-serif text-3xl text-ink">Wine / Drinks</h3>
              <span className="rounded-full bg-cream px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-mocha">
                Odpoledne & večer
              </span>
            </div>
            <div className="mt-6 space-y-5">
              {[
                { name: 'Prosecco Brut', desc: 'Svěží a lehké, ideální k dezertu nebo odpolednímu setkání.', price: '115 Kč' },
                { name: 'Bílé víno — sklenka', desc: 'Suché, čisté a ovocné víno z menšího vinařství.', price: '125 Kč' },
                { name: 'Domácí limonáda', desc: 'Citrus, bylinky a jemná perlivost bez zbytečné sladkosti.', price: '79 Kč' },
                { name: 'Matcha tonic', desc: 'Osvěžující kombinace matchy, toniku a citrusové svěžesti.', price: '95 Kč' },
              ].map((it, idx, arr) => (
                <div
                  key={it.name}
                  className={idx !== arr.length - 1 ? 'flex items-start justify-between gap-4 border-b border-espresso/10 pb-4' : 'flex items-start justify-between gap-4'}
                >
                  <div>
                    <h4 className="font-semibold text-ink">{it.name}</h4>
                    <p className="mt-1 text-sm text-ink/65">{it.desc}</p>
                  </div>
                  <span className="whitespace-nowrap text-sm font-semibold text-forest">{it.price}</span>
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="mt-10 rounded-[2rem] border border-espresso/10 bg-forest px-6 py-6 text-cream shadow-warm sm:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-serif text-3xl">Menu je snadno rozšiřitelné.</h3>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-cream/80">
                Struktura webu je připravená na budoucí doplnění sezónních nabídek, eventů, blogu i online rezervace nebo objednávek.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-cream px-5 py-3 text-sm font-semibold text-forest transition-all duration-200 hover:bg-white"
            >
              Napsat nám
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
