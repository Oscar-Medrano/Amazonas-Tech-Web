import Reveal from './Reveal'
import { IconArrowUpRight, IconMapPin, IconPhone } from './icons'

const LOCATIONS = [
  {
    id: 'maturin',
    name: 'Sede Maturín',
    region: 'Monagas',
    badge: 'Sede Principal',
    address: ['Calle 6, Parcela 6, Manzana 8, Galpón 4', 'Zona Industrial de Maturín, Monagas'],
    phone: '(0291) 315.17.12',
    phoneHref: 'tel:+582913151712',
    mapUrl: 'https://maps.app.goo.gl/USJQJJpsFnYNshuy9',
    mapEmbed: 'https://maps.google.com/maps?q=9.7088193,-63.2769186&hl=es&z=17&output=embed',
  },
  {
    id: 'tigre',
    name: 'Base El Tigre',
    region: 'Anzoátegui',
    badge: 'Base Operativa',
    address: ['Centro Comercial Rahme, Av. Internacional', 'Local G 05-06, El Tigre, Anzoátegui'],
    phone: '(0283) 241.76.94',
    phoneHref: 'tel:+582832417694',
    mapUrl: 'https://maps.app.goo.gl/kYuruF3Dg2A7qS7Q6',
    mapEmbed: 'https://maps.google.com/maps?q=8.8947046,-64.1976717&hl=es&z=17&output=embed',
  },
]

export default function Locations() {
  return (
    <section id="ubicaciones" className="relative overflow-hidden border-t border-slate-200 bg-gradient-to-b from-green-100/80 via-green-50/50 to-green-50/50 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-300/50 blur-[130px] animate-pulse-glow" />
      </div>
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-green-600">Red Operativa</p>
          <h2 className="mt-5 text-3xl font-semibold leading-[1.12] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Presencia estratégica en el <span className="text-gradient-eco">corazón del Orinoco</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            Dos bases operativas que garantizan cobertura, logística y tiempos de respuesta en la Faja Petrolífera del
            Orinoco.
          </p>
        </Reveal>

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-2 lg:gap-10">
          {LOCATIONS.map((location, index) => (
            <Reveal key={location.id} delay={index * 140}>
              <article className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-soft transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:shadow-soft-lg">
                <div className="flex items-center justify-between gap-3 border-b border-slate-100 px-6 py-5 sm:px-8">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-green-200 bg-green-50 text-green-600">
                      <IconMapPin className="h-4 w-4" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">{location.name}</h3>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-green-600">
                        {location.region}
                      </p>
                    </div>
                  </div>
                  <span className="hidden rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.15em] text-slate-600 sm:block">
                    {location.badge}
                  </span>
                </div>

                <div className="relative">
                  <iframe
                    title={`Mapa de ${location.name} — ${location.region}`}
                    src={location.mapEmbed}
                    width="100%"
                    height="280"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                    className="block h-[280px] w-full border-0 grayscale-[15%] transition-all duration-500 ease-in-out group-hover:grayscale-0"
                  />
                </div>

                <div className="px-6 py-7 text-center sm:px-8">
                  <address className="space-y-1 text-[15px] not-italic leading-relaxed text-slate-600">
                    {location.address.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </address>
                  <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <a href={location.phoneHref} className="btn-primary w-full !px-6 !py-3 !text-[13px] sm:w-auto">
                      <IconPhone className="h-4 w-4" />
                      {location.phone}
                    </a>
                    <a
                      href={location.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary w-full !px-6 !py-3 !text-[13px] sm:w-auto"
                    >
                      ¿Cómo llegar?
                      <IconArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
