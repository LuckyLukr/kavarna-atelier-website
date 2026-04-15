import React from 'react'

function GalleryFigure({ src, alt, title, desc, className, loading = 'lazy' }) {
  return (
    <figure className={`group overflow-hidden rounded-[2rem] border border-espresso/10 bg-cream shadow-soft ${className}`}>
      <img
        src={src}
        alt={alt}
        className="h-72 w-full object-cover transition-all duration-300 group-hover:scale-[1.02]"
        loading={loading}
      />
      <figcaption className="p-5">
        <h3 className="font-serif text-2xl text-ink">{title}</h3>
        <p className="mt-2 text-sm leading-7 text-ink/70">{desc}</p>
      </figcaption>
    </figure>
  )
}

export default function GallerySection() {
  return (
    <section id="gallery" className="section-anchor bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">Galerie</span>
            <h2 className="mt-3 font-serif text-4xl text-ink sm:text-5xl">Interiér, káva, jídlo a atmosféra v detailu.</h2>
            <p className="mt-5 text-base leading-8 text-ink/75">
              Vizuálně silná galerie pomáhá hostům představit si návštěvu ještě před příchodem. Právě fotografie často rozhodují, zda si člověk vybere vaši kavárnu.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center text-sm font-semibold text-forest transition-all duration-200 hover:text-espresso"
          >
            Naplánovat návštěvu
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.75 21 12m0 0-3.75 3.25M21 12H3" />
            </svg>
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-12">
          <figure className="group overflow-hidden rounded-[2rem] border border-espresso/10 bg-cream shadow-soft lg:col-span-7">
            <img
              src="/images/gallery-1.jpg"
              alt="Elegantní interiér kavárny s přirozeným světlem"
              className="h-80 w-full object-cover transition-all duration-300 group-hover:scale-[1.02] sm:h-[28rem]"
              loading="lazy"
            />
            <figcaption className="p-5">
              <h3 className="font-serif text-2xl text-ink">Klidný interiér</h3>
              <p className="mt-2 text-sm leading-7 text-ink/70">Teplé tóny, přírodní materiály a prostor, který působí reprezentativně i uvolněně.</p>
            </figcaption>
          </figure>

          <figure className="group overflow-hidden rounded-[2rem] border border-espresso/10 bg-cream shadow-soft lg:col-span-5">
            <img
              src="/images/gallery-2.jpg"
              alt="Detail připravené kávy v keramickém šálku"
              className="h-80 w-full object-cover transition-all duration-300 group-hover:scale-[1.02] sm:h-[28rem]"
              loading="lazy"
            />
            <figcaption className="p-5">
              <h3 className="font-serif text-2xl text-ink">Káva v hlavní roli</h3>
              <p className="mt-2 text-sm leading-7 text-ink/70">Silný první dojem, čistý servis a fotografie, které podporují chuť přijít osobně.</p>
            </figcaption>
          </figure>

          <GalleryFigure
            src="/images/gallery-3.png"
            alt="Brunch talíř s čerstvými ingrediencemi"
            title="Brunch nabídka"
            desc="Jídlo je na webu prezentované stejně pečlivě jako v samotném provozu."
            className="lg:col-span-4"
            loading="lazy"
          />

          <GalleryFigure
            src="/images/gallery-4.jpg"
            alt="Atmosférický detail posezení a interiéru kavárny"
            title="Posezení s charakterem"
            desc="Každý detail podporuje prémiový, ale stále přístupný charakter značky."
            className="lg:col-span-4"
            loading="lazy"
          />

          <figure className="group overflow-hidden rounded-[2rem] border border-espresso/10 bg-cream shadow-soft lg:col-span-4">
            <img
              src="/images/gallery-3.png"
              alt="Dezert a káva servírované na elegantním stole"
              className="h-72 w-full object-cover transition-all duration-300 group-hover:scale-[1.02]"
              loading="lazy"
            />
            <figcaption className="p-5">
              <h3 className="font-serif text-2xl text-ink">Dezerty a momenty</h3>
              <p className="mt-2 text-sm leading-7 text-ink/70">
                Když chybí vlastní fotografie, web zůstává plný a vizuálně funkční díky kvalitním placeholderům.
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
