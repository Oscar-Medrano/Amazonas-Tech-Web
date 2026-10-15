import Reveal from './Reveal'

const STATS = [
  { value: '2004', label: 'Año de fundación', detail: 'Dos décadas de operación continua' },
  { value: '+20', label: 'Años de trayectoria', detail: 'Experiencia comprobada en campo' },
  { value: '02', label: 'Bases operativas', detail: 'Maturín y El Tigre, corazón del Orinoco' },
  { value: 'Orinoco', label: 'Cobertura estratégica', detail: 'Faja Petrolífera y territorio nacional' },
]

export default function Stats() {
  return (
    <section className="relative border-y border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-16 lg:px-8">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {STATS.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 90}>
              <div className="group relative transition-all duration-300 ease-in-out">
                <div className="absolute -inset-3 rounded-2xl bg-gradient-to-b from-emerald-50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
                <dt className="relative text-[11px] font-medium uppercase tracking-[0.25em] text-emerald-600">
                  {stat.label}
                </dt>
                <dd className="relative mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  {stat.value}
                </dd>
                <dd className="relative mt-2 text-sm leading-relaxed text-slate-600">{stat.detail}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  )
}
