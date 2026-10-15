import Reveal from './Reveal'

export default function Clients() {
  return (
    <section className="relative border-t border-slate-200 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald-600">Confianza de la Industria</p>
          <h2 className="mt-5 text-2xl font-semibold leading-[1.15] tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Operadores y contratistas que <span className="text-gradient-eco">confían en nuestra operación</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-500 sm:text-base">
            Más de dos décadas prestando servicios a las principales empresas de la industria petrolera nacional.
          </p>
        </Reveal>

        <Reveal delay={140} className="mt-12">
          <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-soft sm:p-10">
            <img
              src="/img/empresas-aliadas.png"
              alt="Empresas aliadas y clientes de Amazonas Tech: PDVSA y sus filiales, Chevron, Halliburton, SLB, CNPC, Oryx, Petrosema, Precision Drilling, Fides, Perforosven, Evergreen Service, North American Blue Energy Partners, BHDC y Servicios Ambientales Oriente"
              width={1700}
              height={780}
              loading="lazy"
              decoding="async"
              className="mx-auto w-full max-w-5xl"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
