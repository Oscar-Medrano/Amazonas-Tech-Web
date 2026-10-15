import Reveal from './Reveal'

const LOGOS = [
  { src: '/img/pdvsa.webp', alt: 'PDVSA' },
  { src: '/img/schlumberger.png', alt: 'Schlumberger' },
  { src: '/img/nabep.webp', alt: 'North American Blue Energy Partners' },
  { src: '/img/slb-logo.png', alt: 'SLB' },
  { src: '/img/chevron-logo.png', alt: 'Chevron' },
]

export default function Clients() {
  return (
    <section className="relative overflow-hidden border-t border-slate-200 bg-gradient-to-b from-emerald-100/80 via-emerald-50/50 to-emerald-50/50 py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-300/50 blur-[130px] animate-pulse-glow" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald-600">Confianza de la Industria</p>
          <h2 className="mt-5 text-2xl font-semibold leading-[1.15] tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Operadores y contratistas que <span className="text-gradient-eco">confían en nuestra operación</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            Más de dos décadas prestando servicios a las principales empresas de la industria petrolera nacional.
          </p>
        </Reveal>
      </div>

      <Reveal delay={140} className="mt-12">
        <div className="marquee-mask overflow-hidden">
          <div className="marquee-track gap-4 sm:gap-6">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex shrink-0 gap-4 sm:gap-6" aria-hidden={copy === 1}>
                {LOGOS.map((logo) => (
                  <figure
                    key={`${copy}-${logo.src}`}
                    className="group flex h-28 w-60 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white p-7 shadow-soft transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-emerald-200 hover:shadow-soft-lg sm:h-32 sm:w-72"
                  >
                    <img
                      src={logo.src}
                      alt={copy === 0 ? logo.alt : ''}
                      loading="lazy"
                      decoding="async"
                      className="max-h-full max-w-full object-contain transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                  </figure>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
