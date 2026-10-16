import { IconArrowUpRight, IconMapPin, IconPhone } from './icons'
import Logo from './Logo'

const CURRENT_YEAR = new Date().getFullYear()

const SERVICES_LINKS = [
  { label: 'Control de Sólidos', href: '#servicios' },
  { label: 'Servicios Ambientales', href: '#servicios' },
  { label: 'Flota Especializada', href: '#servicios' },
  { label: 'Obras Civiles Petroleras', href: '#servicios' },
  { label: 'Soldadura y Metalmecánica', href: '#servicios' },
]

const COMPANY_LINKS = [
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'HSEQ', href: '#hse' },
  { label: 'Ubicaciones', href: '#ubicaciones' },
  { label: 'Empleo', href: '#empleo' },
]

export default function Footer() {
  return (
    <footer id="contacto" className="relative border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-10">
            <div>
              <Logo />
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-600">
                Ingeniería de sólidos, servicios a pozos y gestión ambiental para la industria petrolera venezolana desde
                2004.
              </p>
            </div>

          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald-600">Servicios</h3>
            <ul className="mt-5 space-y-3">
              {SERVICES_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-600 transition-colors duration-300 ease-in-out hover:text-emerald-600"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald-600">Empresa</h3>
            <ul className="mt-5 space-y-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-600 transition-colors duration-300 ease-in-out hover:text-emerald-600"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

            <div>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald-600">Contacto</h3>
              <ul className="mt-5 space-y-4 text-sm text-slate-600">
                <li className="flex gap-3">
                  <IconMapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                  <span className="leading-relaxed">
                    Sede Maturín: Calle 6, Parcela 6, Mz. 8, Galpón 4, Zona Industrial, Monagas.
                  </span>
                </li>
                <li className="flex gap-3">
                  <IconMapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                  <span className="leading-relaxed">
                    Base El Tigre: C.C. Rahme, Av. Internacional, Local G 05-06, Anzoátegui.
                  </span>
                </li>
                <li className="flex gap-3">
                  <IconPhone className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                  <span className="leading-relaxed">
                    <a href="tel:+582913151712" className="transition-colors hover:text-emerald-600">(0291) 315.17.12</a>
                    {' · '}
                    <a href="tel:+582832417694" className="transition-colors hover:text-emerald-600">(0283) 241.76.94</a>
                  </span>
                </li>
              </ul>
            </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-slate-200 pt-8 sm:flex-row">
          <p className="text-xs text-slate-600">
            © {CURRENT_YEAR} Amazonas Tech, C.A. · RIF: J-311095225-5 · Todos los derechos reservados.
          </p>
          <p className="inline-flex items-center gap-2 rounded-2xl border border-emerald-200/70 bg-white/10 px-4 py-2 text-sm font-medium text-emerald-700 backdrop-blur-lg shadow-sm">Ambientalmente Comprometidos</p>
        </div>
      </div>
    </footer>
  )
}
