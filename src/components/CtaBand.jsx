import Reveal from './Reveal'
import { IconArrowRight, IconMail } from './icons'

export default function CtaBand({ onOpenContact }) {
  return (
    <section className="relative overflow-hidden border-t border-slate-200 py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 h-[32rem] w-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-200/40 blur-[130px] animate-pulse-glow" />
        <img src="/background-torre.jpg" alt="" className="h-full w-full object-cover opacity-[0.05] [mix-blend-mode:multiply]" />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/70 via-slate-50/70 to-slate-50" />
      </div>

      <Reveal className="mx-auto max-w-3xl px-5 text-center sm:px-6">
        <h2 className="text-3xl font-semibold leading-[1.12] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          Hablemos de su próxima <span className="text-gradient-eco">operación</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
          Nuestro equipo técnico diseña una propuesta a la medida de los requerimientos de su proyecto: alcance,
          normativa, cronograma y presupuesto.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button type="button" onClick={onOpenContact} className="btn-primary w-full !px-8 !py-4 text-[15px] sm:w-auto">
            Solicitar Propuesta Técnica
            <IconArrowRight className="h-4 w-4" />
          </button>
          <a href="mailto:contacto@amazonastech.com.ve" className="btn-secondary w-full !px-8 !py-4 text-[15px] sm:w-auto">
            <IconMail className="h-4 w-4" />
            contacto@amazonastech.com.ve
          </a>
        </div>
      </Reveal>
    </section>
  )
}
