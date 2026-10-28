import { useState } from 'react'
import { IconArrowRight, IconMapPin } from './icons'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <video
          autoPlay
          muted
          loop
          playsInline
          src="/img/taladro.mp4"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 min-h-[100svh] flex items-center pt-24 sm:pt-32 lg:pt-40 pb-10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto inline-flex items-center justify-center rounded-2xl bg-white/70 px-4 py-2 sm:px-6 sm:py-3 animate-fade-up [animation-delay:100ms]">
            <img
              src="/logo-amazonas-tech.png"
              alt="Amazonas Tech, C.A."
              className="mx-auto h-16 w-auto sm:h-20 md:h-24 lg:h-28"
            />
          </div>

          <div className="relative mx-auto mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-3 text-2xl sm:text-3xl lg:text-4xl font-bold transition-all duration-300 ease-in-out sm:w-auto animate-fade-up [animation-delay:680ms] bg-gradient-to-r from-green-300 via-green-200 to-green-600 bg-clip-text text-transparent [text-shadow:0_2px_40px_rgba(0,168,0,0.45)]">
            Ambientalmente Comprometidos
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-lg leading-relaxed sm:text-xl lg:text-2xl text-white animate-fade-up [animation-delay:440ms] [text-shadow:0_2px_40px_rgba(0,0,0,0.6)]">
            Desde 2004, liderando el control integral de fluidos, separación de sólidos y manejo de desechos en la
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

          
        </div>
      </div>
    </section>
  )
}
