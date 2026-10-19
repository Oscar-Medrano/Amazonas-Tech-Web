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
    text: 'Tecnología avanzada para la remoción eficiente de fases sólidas en fluidos de perforación, reduciendo costos operativos y minimizando el impacto en fosa.',
    equipos: ['Mallas Zarandas (Shakers)', 'Desarenadores', 'Deslimadores', 'Centrífugas de alta velocidad', 'Unidades de Vaciado (Vacuum Trucks)'],
    specs: [
      'Recuperación y re-acondicionamiento continuo del lodo de perforación.',
      'Protección de la sarta de perforación y reducción del desgaste en mechas/barrenas.',
      'Disminución significativa del volumen total de desechos generados.',
      'Mantenimiento de las propiedades reológicas óptimas en pozo.',
    ],
  },
  {
    id: 'ambiental',
    label: 'Servicios Ambientales',
    image: '/img/servicios-ambientales.jpg',
    alt: 'Operaciones de manejo ambiental y tratamiento de desechos de Amazonas Tech',
    title: 'Servicios Ambientales',
    text: 'Gestión ecológica e integral de desechos petroleros bajo estrictos estándares internacionales y cumplimiento normativo legal vigente.',
    equipos: ['Centro de Manejo de Desechos', 'Centro Palmoriche', 'Mud Cleaners', 'Tratamiento de Ripios y Lodos', 'Remediación de Zonas Afectadas', 'Inyección Controlada'],
    specs: [
      'Disposición final y neutralización segura de efluentes e hidrocarburos.',
      'Reintegración y restauración de suelos intervenidos por la actividad operacional.',
      'Operaciones avaladas por permisos y regulaciones del Ministerio del Poder Popular para el Ecosocialismo (MINEC).',
      'Inyección segura en formaciones profundas autorizadas sin riesgo de contaminación.',
    ],
  },
  {
    id: 'flota',
    label: 'Flota Especializada',
    image: '/img/flota.jpeg',
    alt: 'Flota de unidades vacuum y camiones de Amazonas Tech en base operativa',
    title: 'Flota Especializada',
    text: 'Flota pesada propia y equipamiento de última generación que garantizan capacidad de respuesta inmediata en cada locación.',
    equipos: ['Distribuidores de Fluidos', 'Unidades Vacuum', 'Camiones Cisterna', 'Volquetas'],
    specs: [
      'Equipos propios listos para movilización',
      'Distribución y control de fluidos en locación',
      'Capacidad de respuesta en tiempo récord',
      'Mantenimiento y respaldo metrológico propio',
    ],
  },
  {
    id: 'tratamientofinal',
    label: 'Tratamiento Final',
    image: '/img/acondicionamiento-terreno.jpg',
    alt: 'Acondicionamiento de terreno para localización petrolera ejecutado por Amazonas Tech',
    title: 'Tratamiento Final',
    text: 'Infraestructura y preparación de terrenos con ingeniería de precisión para garantizar la operatividad de los campos petroleros.',
    equipos: ['Adecuación de localizaciones', 'Saneamiento de fosas', 'Acondicionamiento de accesos', 'Movimiento de tierra', 'Cuadrillas especializadas'],
    specs: [
      'Preparación de locaciones para perforación',
      'Mantenimiento de fosas',
      'Acondicionamiento de vías de acceso',
      'Movimiento de tierra con equipos propios',
    ],
  },
  {
    id: 'dewatering',
    label: 'Dewatering',
    image: '/img/dewatering.jpeg',
    alt: 'Unidades de deshidratación de lodos (Dewatering) en operación',
    title: 'Unidad de Dewatering (Palmoriche C.A.)',
    text: 'Optimizamos la recuperación de fase líquida y reducimos significativamente el volumen de desechos enviados a disposición final, ejecutado en alianza estratégica con Palmoriche C.A.',
    equipos: [
      'Unidades Mecánicas de Deshidratación (Dewatering Units)',
      'Sistemas de Dosificación y Floculación Química',
      'Separación Sólido-Líquido de Alto Rendimiento',
      'Clarificación y Acondicionamiento de Efluentes',
      'Reducción Volumétrica de Desechos en Sitio',
      'Alineación con Normativa Ambiental Vigente',
    ],
    specs: [
      'Manejo Ambiental e Industrial',
      'Deshidratación de Lodos (Dewatering)',
      'Optimización en la recuperación de la fase líquida',
      'Ejecución bajo estrictos controles ambientales',
    ],
  },
  {
    id: 'soldadura',
    label: 'Soldadura Especializada',
    image: '/img/soldadura-industrial.jpg',
    alt: 'Trabajos de soldadura especializada en tuberías y estructuras metálicas de Amazonas Tech',
    title: 'Soldadura Especializada',
    text: 'Servicios de soldadura de alta precisión para la industria energética, garantizando máxima integridad estructural en tuberías y recipientes bajo condiciones críticas de presión.',
    equipos: ['Procedimientos WPS / PQR', 'Soldadores Calificados y Certificados', 'Tuberías de Alta Presión', 'Ensayos No Destructivos (NDT)', 'Equipos de Soldadura TIG / MIG / SMAW'],
    specs: [
      'Calificación formal de procedimientos de soldadura (WPS/PQR) respaldada por normas internacionales.',
      'Ejecución de uniones de alta exigencia en spools, líneas de flujo y sistemas de tuberías.',
      'Inspección de calidad mediante ensayos no destructivos (tintas penetrantes, ultrasonido, radiografía).',
      'Trazabilidad documental detallada y dossiers técnicos listos para auditoría de campo.',
    ],
  },
]

export default function TechSpecs() {
  const [active, setActive] = useState(0)
  const tab = TABS[active]

  return (
    <section id="servicios" className="relative overflow-hidden border-t border-slate-200 bg-gradient-to-b from-green-100/80 via-green-50/50 to-green-50/50 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 grid-lines opacity-40" />
        <div className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-300/50 blur-[130px] animate-pulse-glow" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-green-600">Portafolio</p>
          <h2 className="mt-5 text-3xl font-semibold leading-[1.12] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Servicios <span className="text-gradient-titanium">Integrales</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            Control de sólidos, gestión ambiental, flota especializada, tratamiento final y soldadura industrial:
            tecnología propietaria, procesos técnicamente controlados y cumplimiento ambiental en cada etapa de la
            operación de perforación.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-12 flex justify-center">
          <div className="w-full max-w-4xl rounded-2xl border border-slate-200 bg-slate-100 p-2 shadow-inner sm:rounded-full sm:p-1.5">
            <div className="grid max-sm:grid-cols-1 grid-cols-2 gap-1.5 sm:flex sm:flex-wrap sm:items-center sm:justify-center">
              {TABS.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActive(index)}
                  aria-pressed={active === index}
                  className={`whitespace-nowrap rounded-xl px-4 py-3 text-center text-[13px] font-semibold transition-all duration-300 ease-in-out sm:rounded-full sm:px-5 sm:py-2.5 ${
                    index === TABS.length - 1 ? 'max-sm:col-span-1 col-span-2 sm:col-span-1' : ''
                  } ${
                    active === index
                      ? 'bg-white text-green-700 shadow-sm ring-1 ring-slate-200'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div key={tab.id} className="mt-10 grid animate-fade-up gap-8 lg:mt-12 lg:grid-cols-2 lg:gap-12">
          <div className="group relative min-h-[20rem] overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-900 shadow-soft sm:min-h-[24rem] lg:min-h-[30rem]">
            <img
              src={tab.image}
              alt={tab.alt}
              width={1254}
              height={1254}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
              <p className="mt-2 text-lg font-semibold tracking-tight text-white sm:text-xl">{tab.title}</p>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-base leading-relaxed text-slate-600 sm:text-lg">{tab.text}</p>

            <h3 className="mt-9 text-[11px] font-semibold uppercase tracking-[0.3em] text-green-600">
              {tab.id === 'ambiental' ? 'Instalaciones & Capacidades' : 'Equipos & Tecnología'}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {tab.equipos.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-[13px] font-medium text-slate-700 shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:border-green-300 hover:text-green-700"
                >
                  {item}
                </li>
              ))}
            </ul>

            <ul className="mt-9 grid gap-3.5 sm:grid-cols-2">
              {tab.specs.map((spec) => (
                <li key={spec} className="flex items-start gap-3.5 text-[15px] leading-relaxed text-slate-600">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-green-600 to-green-500 text-white shadow-soft transition-all duration-300 ease-in-out hover:from-green-500 hover:to-green-400">
                    <IconCheck className="h-3.5 w-3.5" />
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
