import { useState } from 'react'
import Reveal from './Reveal'
import { IconCheck } from './icons'

const TABS = [
  {
    id: 'solidos',
    label: 'Control de Sólidos',
    image: '/img/control-de-solidos.jpg',
    alt: 'Zarandas vibradoras y línea de control de sólidos operando en locación petrolera',
    title: 'Control de Sólidos en Perforación',
    text: 'Sistemas mecánicos de alta eficiencia para la separación de fase sólida-líquida. Optimización del fluido de perforación, reducción del desgaste de barrenas y minimización del volumen de desechos en fosa.',
    equipos: ['Mallas Zarandas (Shakers)', 'Desarenadores', 'Deslimadores', 'Centrífugas de alta velocidad', 'Unidades de Vaciado (Vacuum Trucks)'],
    specs: [
      'Separación sólido-líquido de alta eficiencia',
      'Optimización continua del fluido de perforación',
      'Reducción del desgaste de barrenas y herramienta de fondo',
      'Minimización del volumen de desechos en fosa',
    ],
  },
  {
    id: 'ambiental',
    label: 'Servicios Ambientales',
    image: '/img/servicios-ambientales.jpg',
    alt: 'Operaciones de manejo ambiental y tratamiento de desechos de Amazonas Tech',
    title: 'Servicios Ambientales Integrales',
    text: 'Tratamiento, remediación e inyección de ripios y lodos de perforación cumpliendo con las normativas ambientales técnicas y legales vigentes.',
    equipos: ['Centro de Manejo de Desechos', 'Centro Palmoriche', 'Tratamiento de ripios y lodos', 'Remediación de zonas afectadas', 'Inyección controlada'],
    specs: [
      'Tratamiento técnico de ripios y lodos de perforación',
      'Remediación de áreas intervenidas',
      'Inyección en formaciones autorizadas',
      'Cumplimiento normativo ambiental verificable',
    ],
  },
  {
    id: 'flota',
    label: 'Flota Especializada',
    image: '/img/flota.jpg',
    alt: 'Flota de unidades vacuum y camiones de Amazonas Tech en base operativa',
    title: 'Flota Especializada',
    text: 'Flota pesada propia y equipamiento de última generación —mud cleaners, distribuidores de fluidos y unidades de vacío— que garantizan capacidad de respuesta inmediata en cada locación.',
    equipos: ['Mud Cleaners', 'Distribuidores de Fluidos', 'Unidades Vacuum', 'Camiones Cisterna', 'Volquetas'],
    specs: [
      'Equipos propios listos para movilización',
      'Distribución y control de fluidos en locación',
      'Capacidad de respuesta en tiempo récord',
      'Mantenimiento y respaldo metrológico propio',
    ],
  },
  {
    id: 'obras',
    label: 'Obras Civiles',
    image: '/img/acondicionamiento-terreno.jpg',
    alt: 'Acondicionamiento de terreno para localización petrolera ejecutado por Amazonas Tech',
    title: 'Obras Civiles Petroleras',
    text: 'Adecuación de localizaciones, construcción de fosas, acondicionamiento de accesos y movimiento de tierra con maquinaria propia y cuadrillas especializadas.',
    equipos: ['Adecuación de localizaciones', 'Construcción de fosas', 'Acondicionamiento de accesos', 'Movimiento de tierra', 'Cuadrillas especializadas'],
    specs: [
      'Preparación de locaciones para perforación',
      'Construcción y mantenimiento de fosas',
      'Acondicionamiento de vías de acceso',
      'Movimiento de tierra con equipos propios',
    ],
  },
  {
    id: 'soldadura',
    label: 'Soldadura y Metalmecánica',
    image: '/img/soldadura-industrial.jpg',
    alt: 'Trabajos de soldadura industrial en tuberías y estructuras metálicas de Amazonas Tech',
    title: 'Soldadura y Metalmecánica Industrial',
    text: 'Calificación formal de procedimientos de soldadura (WPS/PQR) aplicada a tuberías, tanques y estructuras de alta presión, con trazabilidad documental completa.',
    equipos: ['Procedimientos WPS / PQR', 'Tuberías de alta presión', 'Tanques', 'Estructuras metálicas', 'Soldadores calificados'],
    specs: [
      'Calificación de procedimientos de soldadura',
      'Instalación de tuberías y spools en campo',
      'Fabricación y reparación de tanques',
      'Estructuras metálicas de alta exigencia',
    ],
  },
]

export default function TechSpecs() {
  const [active, setActive] = useState(0)
  const tab = TABS[active]

  return (
    <section id="servicios" className="relative overflow-hidden border-t border-slate-200 bg-gradient-to-b from-emerald-50/70 via-slate-50 to-slate-50 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 grid-lines opacity-40" />
        <div className="absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-200/40 blur-[130px] animate-pulse-glow" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald-600">Portafolio</p>
          <h2 className="mt-5 text-3xl font-semibold leading-[1.12] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Servicios <span className="text-gradient-titanium">Integrales</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            Control de sólidos, gestión ambiental, flota especializada, obras civiles y soldadura industrial:
            tecnología propietaria, procesos técnicamente controlados y cumplimiento ambiental en cada etapa de la
            operación de perforación.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-12 flex justify-center">
          <div className="w-full max-w-3xl rounded-2xl border border-slate-200 bg-slate-100 p-2 shadow-inner sm:rounded-full sm:p-1.5">
            <div className="grid grid-cols-2 gap-1.5 sm:flex sm:flex-wrap sm:items-center sm:justify-center">
              {TABS.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActive(index)}
                  aria-pressed={active === index}
                  className={`whitespace-nowrap rounded-xl px-4 py-3 text-center text-[13px] font-semibold transition-all duration-300 ease-in-out sm:rounded-full sm:px-5 sm:py-2.5 ${
                    index === TABS.length - 1 ? 'col-span-2 sm:col-span-1' : ''
                  } ${
                    active === index
                      ? 'bg-white text-emerald-700 shadow-sm ring-1 ring-slate-200'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div key={tab.id} className="mt-10 grid animate-fade-up gap-8 lg:mt-12 lg:grid-cols-2 lg:gap-12">
          <div className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-soft">
            <img
              src={tab.image}
              alt={tab.alt}
              width={1254}
              height={1254}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald-300">{tab.label}</p>
              <p className="mt-2 text-lg font-semibold tracking-tight text-white sm:text-xl">{tab.title}</p>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-base leading-relaxed text-slate-600 sm:text-lg">{tab.text}</p>

            <h3 className="mt-9 text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald-600">
              {tab.id === 'ambiental' ? 'Instalaciones & Capacidades' : 'Equipos & Tecnología'}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {tab.equipos.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-[13px] font-medium text-slate-700 shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:border-emerald-300 hover:text-emerald-700"
                >
                  {item}
                </li>
              ))}
            </ul>

            <ul className="mt-9 grid gap-3.5 sm:grid-cols-2">
              {tab.specs.map((spec) => (
                <li key={spec} className="flex items-start gap-3 text-[15px] leading-relaxed text-slate-600">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 text-emerald-600">
                    <IconCheck className="h-3 w-3" />
                  </span>
                  {spec}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
