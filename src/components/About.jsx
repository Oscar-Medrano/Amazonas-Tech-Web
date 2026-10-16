import Reveal from './Reveal'
import { IconGauge, IconLayer, IconShield } from './icons'

const PILLARS = [
  {
    icon: IconGauge,
    title: 'Misión',
    text: 'Proveer servicios especializados con los más altos estándares de calidad de la industria petrolera, enfocados en la satisfacción de nuestros clientes, con un equipo altamente capacitado; comprometidos con la generación de valor agregado, responsabilidad social, un ambiente de trabajo seguro y la preservación del ambiente.',
  },
  {
    icon: IconLayer,
    title: 'Visión',
    text: 'Ser una organización nacional líder con proyección internacional, con niveles de calidad de excelencia en la prestación de servicios especializados. Mantener una gestión de vanguardia y tecnologías innovadoras para contribuir a un mayor desarrollo económico y social de la industria petrolera.',
  },
  {
    icon: IconShield,
    title: 'Política de Calidad',
    text: 'Operar al más alto nivel exige el cumplimiento estricto de las normas de seguridad, calidad y ambiente. Amazonas Tech, C.A. ha sido validada exhaustivamente bajo los rigurosos criterios globales de nuestros clientes, demostrando la capacidad técnica y documental requerida para liderar proyectos de gran escala en la industria petrolera.',
  },
]

export default function About() {
  return (
    <section id="nosotros" className="relative overflow-hidden border-t border-slate-200 bg-gradient-to-b from-emerald-100/80 via-emerald-50/50 to-emerald-50/50 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-300/50 blur-[130px] animate-pulse-glow" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald-600">Nosotros</p>
              <h2 className="mt-5 text-3xl font-semibold leading-[1.12] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Dos décadas al servicio de la{' '}
                <span className="text-gradient-eco">industria petrolera nacional</span>
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Amazonas Tech, C.A. es una organización venezolana líder en la prestación de servicios a pozos,
                control de sólidos y soluciones ambientales para la industria petrolera. Operando desde Maturín
                (Monagas) y El Tigre (Anzoátegui), servimos al desarrollo estratégico de la Faja Petrolífera del
                Orinoco con los más altos estándares de calidad, seguridad e ingeniería.
              </p>
            </Reveal>

            <Reveal delay={140} className="mt-10">
              <div className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-soft">
                <img
                  src="/img/equipo-especializado.jpg"
                  alt="Equipamiento especializado de Amazonas Tech: unidad de zarandas vibratorias en planta de procesos"
                  width={587}
                  height={543}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                <p className="absolute bottom-5 left-6 text-xs font-medium uppercase tracking-[0.25em] text-white">
                  Equipamiento propio · Campo verificable
                </p>
              </div>
            </Reveal>
          </div>

          <div className="flex flex-col gap-6">
            {PILLARS.map((pillar, index) => (
              <Reveal key={pillar.title} delay={index * 120}>
                <article className="group rounded-[1.75rem] border border-slate-200/80 bg-white p-7 shadow-soft transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-emerald-200 hover:shadow-soft-lg sm:p-9">
                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-600 transition-all duration-300 ease-in-out group-hover:border-emerald-300 group-hover:bg-emerald-100">
                      <pillar.icon />
                    </span>
                    <h3 className="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">{pillar.title}</h3>
                  </div>
                  <p className="mt-5 text-[15px] leading-relaxed text-slate-600">{pillar.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
