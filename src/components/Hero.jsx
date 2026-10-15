import { IconArrowRight, IconMapPin } from './icons'

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pb-24 pt-28 sm:pt-36 lg:pb-36 lg:pt-48">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <img
          src="/background-torre.jpg"
          alt=""
          className="h-full w-full object-cover object-center opacity-[0.06] [mix-blend-mode:multiply]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/70 via-white/70 to-slate-50" />
        <div className="absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-200/40 blur-[130px] animate-pulse-glow" />
        <div className="absolute bottom-[-14rem] left-1/2 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-emerald-200/30 blur-[130px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.25em] text-emerald-700 shadow-sm animate-fade-in">
            Amazonas Tech, C.A. · RIF: J-311095225-5
          </p>

          <h1 className="mt-8 text-4xl font-semibold leading-[1.08] tracking-tight sm:mt-10 sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
            <span className="block text-slate-900 animate-fade-up [animation-delay:100ms]">Ingeniería de Sólidos.</span>
            <span className="block text-gradient-eco animate-fade-up [animation-delay:220ms]">Eficiencia Operativa.</span>
            <span className="block text-slate-900 animate-fade-up [animation-delay:340ms]">Compromiso Ambiental.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-slate-600 animate-fade-up [animation-delay:440ms] sm:text-lg lg:text-xl">
            Desde 2004, liderando la gestión integral de fluidos, separación de sólidos y manejo de desechos en la
            Faja Petrolífera del Orinoco y la industria nacional.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 animate-fade-up [animation-delay:560ms] sm:flex-row">
            <a href="#servicios" className="btn-primary w-full !px-8 !py-4 text-[15px] sm:w-auto">
              Explorar Capacidades Técnicas
              <IconArrowRight className="h-4 w-4" />
            </a>
            <a href="#ubicaciones" className="btn-secondary w-full !px-8 !py-4 text-[15px] sm:w-auto">
              <IconMapPin className="h-4 w-4" />
              Contactar Sede Operativa
            </a>
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[11px] font-medium uppercase tracking-[0.25em] text-slate-400 animate-fade-up [animation-delay:700ms] sm:text-xs">
            <span>Maturín</span>
            <span className="h-1 w-1 rounded-full bg-emerald-500" />
            <span>El Tigre</span>
            <span className="h-1 w-1 rounded-full bg-emerald-500" />
            <span>Faja Petrolífera del Orinoco</span>
          </div>
        </div>
      </div>
    </section>
  )
}
