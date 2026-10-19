import Reveal from './Reveal'
import { IconGauge, IconLeaf, IconRecycle, IconShield } from './icons'

const PILLARS = [
  {
    icon: IconShield,
    title: 'Seguridad y Salud Laboral',
    text: 'Protección sistemática de nuestro personal en cada locación: permisos de trabajo, análisis de riesgo, EPP certificado y entrenamiento continuo.',
  },
  {
    icon: IconLeaf,
    title: 'Compromiso Ambiental',
    text: 'Manejo técnico de desechos, remediación de áreas intervenidas y operaciones alineadas con las normativas ambientales vigentes.',
  },
  {
    icon: IconGauge,
    title: 'Cumplimiento Legal',
    text: 'Observancia estricta de los requisitos legales y normativos aplicables a cada servicio, con trazabilidad documental completa.',
  },
  {
    icon: IconRecycle,
    title: 'Mejora Continua',
    text: 'Revisión permanente de procesos, indicadores y lecciones aprendidas para elevar el desempeño en cada pozo intervenido.',
  },
]

export default function SafetyHSE() {
  return (
    <section id="hse" className="relative overflow-hidden border-t border-slate-200 bg-gradient-to-b from-green-100/80 via-green-50/50 to-green-50/50 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-300/50 blur-[130px] animate-pulse-glow" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-green-600">Calidad, Seguridad y Ambiente</p>
          <h2 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            <span className="text-gradient-eco">Ambientalmente Comprometidos</span>
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Implementamos un estricto Sistema de Gestión de Calidad (SGC) que garantiza la seguridad y salud laboral de
            nuestro personal, el cumplimiento estricto de los requisitos legales y la mejora continua en cada pozo
            intervenido.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 100} className="h-full">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white p-7 shadow-soft transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:border-green-200 hover:shadow-soft-lg">
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-green-100 blur-2xl transition-all duration-500 ease-in-out group-hover:bg-green-200/80" aria-hidden="true" />
                <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-green-200 bg-green-50 text-green-600 transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:border-green-300">
                  <pillar.icon className="h-6 w-6" />
                </span>
                <h3 className="relative mt-6 text-base font-semibold tracking-tight text-slate-900 sm:text-lg">
                  {pillar.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-slate-600">{pillar.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
