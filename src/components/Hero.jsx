import { useState } from 'react'
import { IconArrowRight, IconMapPin } from './icons'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pb-32 pt-24 sm:pt-32 lg:pb-48 lg:pt-40"
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

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <img
            src="/logo-amazonas-tech.png"
            alt="Amazonas Tech, C.A."
            className="mx-auto w-full max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl animate-fade-up [animation-delay:100ms]"
          />

          <div className="relative mx-auto mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-3 text-xl sm:text-2xl font-bold transition-all duration-300 ease-in-out sm:w-auto animate-fade-up [animation-delay:680ms] bg-gradient-to-r from-emerald-300 via-emerald-200 to-emerald-500 bg-clip-text text-transparent [text-shadow:0_2px_40px_rgba(16,185,129,0.45)]">
            Ambientalmente Comprometidos
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-xl leading-relaxed sm:text-2xl lg:text-3xl text-white font-bold animate-fade-up [animation-delay:440ms] [text-shadow:0_2px_40px_rgba(0,0,0,0.6)]">
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

          
        </div>
      </div>
    </section>
  )
}
