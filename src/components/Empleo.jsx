import Reveal from './Reveal'
import { IconArrowUpRight, IconLinkedIn } from './icons'

const LINKEDIN_URL = 'https://www.linkedin.com/company/amazonas-tech-c-a/'

export default function Empleo() {
  return (
    <section
      id="empleo"
      className="relative overflow-hidden border-t border-slate-200 bg-gradient-to-b from-emerald-100/80 via-emerald-50/50 to-emerald-50/50 py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-300/50 blur-[130px] animate-pulse-glow" />
        <img src="/background-torre.jpg" alt="" className="h-full w-full object-cover opacity-[0.05] [mix-blend-mode:multiply]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald-600">Empleo</p>
          <h2 className="mt-5 text-3xl font-semibold leading-[1.12] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Construye tu carrera en la <span className="text-gradient-eco">industria energética</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            En Amazonas Tech, C.A. crecemos con talento comprometido con la excelencia operativa, la seguridad y el
            cuidado del ambiente. Si buscan nuevos desafíos profesionales, los invitamos a seguir nuestra red
            profesional, donde publicamos nuestras vacantes activas y novedades de la organización.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full !px-8 !py-4 text-[15px] sm:w-auto"
            >
              <IconLinkedIn className="h-5 w-5" />
              Ver vacantes en LinkedIn
            </a>
            <a href="#servicios" className="btn-secondary w-full !px-8 !py-4 text-[15px] sm:w-auto">
              Conocer nuestros servicios
              <IconArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <p className="mt-8 text-sm text-slate-600">
            Síguenos en{' '}
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-600 underline decoration-emerald-300 underline-offset-4 transition-colors hover:text-emerald-700"
            >
              linkedin.com/company/amazonas-tech-c-a
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
