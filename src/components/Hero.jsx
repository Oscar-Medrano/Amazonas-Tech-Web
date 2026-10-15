import { useState } from 'react'
import { IconArrowRight, IconMapPin } from './icons'

export default function Hero() {
  const [glow, setGlow] = useState(null)

  const handleMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    setGlow({ x: event.clientX - rect.left, y: event.clientY - rect.top })
  }

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-br from-[#10254A] via-[#0A192F] to-[#081426] pb-24 pt-28 sm:pt-36 lg:pb-36 lg:pt-48"
      onMouseMove={handleMove}
      onMouseLeave={() => setGlow(null)}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Base azul profundo corporativo */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#10254A] via-[#0A192F] to-[#081426]" />
        {/* Banda especular metálica */}
        <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_12%,rgba(255,255,255,0.06)_35%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.06)_65%,transparent_88%)]" />
        {/* Textura cepillada metalizada */}
        <div className="absolute inset-0 bg-[repeating-linear-gradient(115deg,rgba(255,255,255,0.028)_0px,rgba(255,255,255,0.028)_1px,transparent_1px,transparent_8px)]" />
        {/* Degradados de luz */}
        <div className="absolute -top-24 left-[18%] h-[28rem] w-[28rem] rounded-full bg-sky-400/18 blur-[120px]" />
        <div className="absolute bottom-[-10rem] right-[12%] h-[26rem] w-[26rem] rounded-full bg-emerald-400/18 blur-[120px]" />
        <div className="absolute left-1/2 top-1/3 h-[22rem] w-[22rem] -translate-x-1/2 rounded-full bg-blue-400/12 blur-[130px]" />
        {/* Textura torre de perforación */}
        <img
          src="/background-torre.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center opacity-[0.12] mix-blend-overlay"
        />
        {/* Brillo que sigue al cursor */}
        {glow && (
          <div
            className="absolute inset-0 transition-opacity duration-500"
            style={{
              background:
                'radial-gradient(540px circle at ' +
                glow.x +
                'px ' +
                glow.y +
                'px, rgba(52, 211, 153, 0.30), rgba(56, 189, 248, 0.12) 45%, transparent 68%)',
            }}
          />
        )}
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-medium uppercase tracking-[0.25em] text-emerald-100 shadow-sm backdrop-blur-md animate-fade-in sm:text-[13px]">
            Amazonas Tech, C.A. · RIF: J-311095225-5
          </p>

          <h1 className="mt-8 text-4xl font-semibold leading-[1.08] tracking-tight sm:mt-10 sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
            <span className="block text-white animate-fade-up [animation-delay:100ms]">Ingeniería de Sólidos.</span>
            <span className="block animate-fade-up [animation-delay:220ms] bg-gradient-to-r from-emerald-300 via-emerald-200 to-sky-200 bg-clip-text text-transparent">
              Eficiencia Operativa.
            </span>
            <span className="block text-white animate-fade-up [animation-delay:340ms]">Compromiso Ambiental.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-emerald-50/90 animate-fade-up [animation-delay:440ms] sm:text-lg lg:text-xl">
            Desde 2004, liderando la gestión integral de fluidos, separación de sólidos y manejo de desechos en la
            Faja Petrolífera del Orinoco y la industria nacional.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 animate-fade-up [animation-delay:560ms] sm:flex-row">
            <a href="#servicios" className="btn-primary w-full !px-8 !py-4 text-[15px] sm:w-auto">
              Explorar Capacidades Técnicas
              <IconArrowRight className="h-4 w-4" />
            </a>
            <a href="#ubicaciones" className="btn-glass w-full !px-8 !py-4 text-[15px] sm:w-auto">
              <IconMapPin className="h-4 w-4" />
              Contactar Sede Operativa
            </a>
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[11px] font-medium uppercase tracking-[0.25em] text-white/70 animate-fade-up [animation-delay:700ms] sm:text-xs">
            <span>Maturín</span>
            <span className="h-1 w-1 rounded-full bg-emerald-300" />
            <span>El Tigre</span>
            <span className="h-1 w-1 rounded-full bg-emerald-300" />
            <span>Faja Petrolífera del Orinoco</span>
          </div>
        </div>
      </div>
    </section>
  )
}
