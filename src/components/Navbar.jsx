import { useEffect, useState } from 'react'
import Logo from './Logo'
import { IconClose, IconMenu } from './icons'

const NAV_LINKS = [
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Certificaciones HSE', href: '#hse' },
  { label: 'Ubicaciones', href: '#ubicaciones' },
]

export default function Navbar({ onOpenContact }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-in-out ${
          scrolled
            ? 'border-b border-slate-200/80 bg-white/85 backdrop-blur-xl supports-[backdrop-filter]:bg-white/75'
            : 'border-b border-transparent bg-white/60 backdrop-blur-md'
        }`}
      >
        <nav
          className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-5 sm:h-20 sm:px-6 lg:px-8"
          aria-label="Navegación principal"
        >
          <Logo className="shrink-0" onNavigate={() => setMenuOpen(false)} />

          <ul className="hidden flex-1 items-center justify-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative rounded-full px-4 py-2 text-[13px] font-medium text-slate-600 transition-all duration-300 ease-in-out hover:bg-slate-100 hover:text-slate-900"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="ml-auto flex shrink-0 items-center lg:ml-0">
            <button
              type="button"
              onClick={onOpenContact}
              className="btn-primary hidden !px-6 !py-2.5 !text-[13px] sm:inline-flex"
            >
              Solicitar Propuesta Técnica
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-all duration-300 ease-in-out hover:border-emerald-300 hover:text-emerald-600 lg:hidden"
              aria-label="Abrir menú"
              aria-expanded={menuOpen}
            >
              <IconMenu />
            </button>
          </div>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-[60] transition-all duration-300 ease-in-out lg:hidden ${
          menuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
      >
        <div className="absolute inset-0 bg-slate-900/30 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
        <div className="scrollbar-thin relative flex h-full flex-col overflow-y-auto bg-white px-6 pb-safe pt-6">
          <div className="flex items-center justify-between">
            <Logo onNavigate={() => setMenuOpen(false)} />
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-all duration-300 ease-in-out hover:border-emerald-300 hover:text-emerald-600"
              aria-label="Cerrar menú"
            >
              <IconClose />
            </button>
          </div>

          <ul className="mt-12 flex flex-col gap-1">
            {NAV_LINKS.map((link, index) => (
              <li
                key={link.href}
                className={`transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
                style={{ transitionDelay: menuOpen ? `${80 + index * 55}ms` : '0ms' }}
              >
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block border-b border-slate-100 py-4 text-3xl font-semibold tracking-tight text-slate-900 transition-colors duration-300 hover:text-emerald-600"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-10">
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false)
                onOpenContact()
              }}
              className="btn-primary w-full !py-4 text-base"
            >
              Solicitar Propuesta Técnica
            </button>
            <div className="mt-6 flex flex-col gap-2 text-sm text-slate-500">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-400">Atención directa</p>
              <a href="tel:+582913151712" className="flex items-center gap-2.5 transition-colors hover:text-emerald-600">
                Sede Maturín — (0291) 315.17.12
              </a>
              <a href="tel:+582832417694" className="flex items-center gap-2.5 transition-colors hover:text-emerald-600">
                Base El Tigre — (0283) 241.76.94
              </a>
            </div>
            <p className="mt-6 text-xs tracking-widest text-slate-400">AMAZONAS TECH, C.A. · RIF: J-311095225-5</p>
          </div>
        </div>
      </div>
    </>
  )
}
