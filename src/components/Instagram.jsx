import Reveal from './Reveal'

export default function Instagram() {
  return (
    <section
      id="instagram"
      className="relative overflow-hidden border-t border-slate-200 bg-gradient-to-b from-green-100/80 via-green-50/50 to-green-50/50 py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-300/50 blur-[130px] animate-pulse-glow" />
        <img src="/background-torre.jpg" alt="" className="h-full w-full object-cover opacity-[0.05] [mix-blend-mode:multiply]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-green-600">Síguenos</p>
          <h2 className="mt-5 text-3xl font-semibold leading-[1.12] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Nuestra comunidad en <span className="text-gradient-eco">Instagram</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Únete a nuestra comunidad en Instagram para ver detrás de cámaras, proyectos destacados,
            y momentos de nuestro trabajo diario en la Faja Petrolífera del Orinoco.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://www.instagram.com/amazonas_tech?mdxt=MTB6aGowaDZzbnV0dA=="
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full !px-8 !py-4 text-[15px] sm:w-auto"
            >
              Visitar Instagram
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}