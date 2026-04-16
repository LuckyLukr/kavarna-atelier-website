import React from 'react'

export default function GallerySection() {
  return (
    <section id="gallery" className="section-anchor bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-bronze">Galerie</span>
            <h2 className="mt-3 font-display text-4xl font-black text-ink sm:text-5xl">
              Atmosféra, káva a detail, kvůli kterým dostane návštěva vlastní náladu.
            </h2>
            <p className="mt-5 text-base leading-8 text-ink/75">
              Nahlédněte do prostoru sklep kafe — od interiéru přes šálky kávy až po dezerty a momenty, které dělají z obyčejné pauzy malý zážitek.
            </p>
          </div>
          <a href="#contact" className="inline-flex items-center text-sm font-bold text-bronze transition-all duration-300 hover:text-espresso">
            Stavte se za námi
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.75 21 12m0 0-3.75 3.25M21 12H3" />
            </svg>
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-12">
          <figure className="group overflow-hidden rounded-[2rem] border border-mocha/10 bg-cream shadow-soft lg:col-span-7">
            <img
              src="/images/gallery-1.jpg"
              alt="Elegantní interiér kavárny sklep kafe"
              className="h-80 w-full object-cover transition-all duration-500 group-hover:scale-[1.03] sm:h-[28rem]"
              loading="lazy"
            />
            <figcaption className="p-5">
              <h3 className="font-display text-2xl font-bold text-ink">Interiér s emocí</h3>
              <p className="mt-2 text-sm leading-7 text-ink/70">Teplý a kultivovaný prostor s důrazem na detail, světlo a pohodovou náladu.</p>
            </figcaption>
          </figure>

          <figure className="group overflow-hidden rounded-[2rem] border border-mocha/10 bg-cream shadow-soft lg:col-span-5">
            <img
              src="/images/gallery-2.jpg"
              alt="Detail výběrové kávy v kavárně sklep kafe"
              className="h-80 w-full object-cover transition-all duration-500 group-hover:scale-[1.03] sm:h-[28rem]"
              loading="lazy"
            />
            <figcaption className="p-5">
              <h3 className="font-display text-2xl font-bold text-ink">Káva v hlavní roli</h3>
              <p className="mt-2 text-sm leading-7 text-ink/70">Fotografie, které voní po espressu, klidu a pomalém posezení u dobrého šálku.</p>
            </figcaption>
          </figure>

          <figure className="group overflow-hidden rounded-[2rem] border border-mocha/10 bg-cream shadow-soft lg:col-span-4">
            <img
              src="/images/gallery-3.png"
              alt="Prémiový dezert v kavárně sklep kafe"
              className="h-72 w-full object-cover transition-all duration-500 group-hover:scale-[1.03]"
              loading="lazy"
            />
            <figcaption className="p-5">
              <h3 className="font-display text-2xl font-bold text-ink">Dezerty</h3>
              <p className="mt-2 text-sm leading-7 text-ink/70">Sladké detaily, které skvěle doplní kávu i chvíli, kdy si chcete udělat radost.</p>
            </figcaption>
          </figure>

          <figure className="group overflow-hidden rounded-[2rem] border border-mocha/10 bg-cream shadow-soft lg:col-span-4">
            <img
              src="/images/gallery-4.jpg"
              alt="Atmosférický detail posezení a designu kavárny sklep kafe"
              className="h-72 w-full object-cover transition-all duration-500 group-hover:scale-[1.03]"
              loading="lazy"
            />
            <figcaption className="p-5">
              <h3 className="font-display text-2xl font-bold text-ink">Posezení a detail</h3>
              <p className="mt-2 text-sm leading-7 text-ink/70">Materiály, tóny a jemné kontrasty tvoří prostředí, které působí útulně a stylově.</p>
            </figcaption>
          </figure>

          <figure className="group overflow-hidden rounded-[2rem] border border-mocha/10 bg-cream shadow-soft lg:col-span-4">
            <img
              src="/images/gallery-1.jpg"
              alt="Další prémiová fotografie kávy a servisu"
              className="h-72 w-full object-cover transition-all duration-500 group-hover:scale-[1.03]"
              loading="lazy"
            />
            <figcaption className="p-5">
              <h3 className="font-display text-2xl font-bold text-ink">Coffee house mood</h3>
              <p className="mt-2 text-sm leading-7 text-ink/70">Přesně ten typ atmosféry, kvůli kterému se z rychlé zastávky stane oblíbený rituál.</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
