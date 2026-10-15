import { useEffect, useState } from 'react'
import { IconCheck, IconClose, IconPhone } from './icons'

const SERVICE_OPTIONS = [
  'Control de Sólidos en Perforación',
  'Servicios Ambientales Integrales',
  'Flota Especializada y Transporte',
  'Obras Civiles Petroleras',
  'Soldadura y Metalmecánica Industrial',
  'Otro / No está seguro',
]

const INITIAL_FORM = {
  nombre: '',
  empresa: '',
  email: '',
  telefono: '',
  servicio: SERVICE_OPTIONS[0],
  mensaje: '',
}

export default function ContactModal({ open, onClose }) {
  const [form, setForm] = useState(INITIAL_FORM)
  const [status, setStatus] = useState('idle')

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  useEffect(() => {
    if (open) return
    const timer = setTimeout(() => {
      setStatus('idle')
      setForm(INITIAL_FORM)
    }, 300)
    return () => clearTimeout(timer)
  }, [open])

  const update = (key) => (event) => {
    setForm((prev) => ({ ...prev, [key]: event.target.value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (status === 'sending') return
    setStatus('sending')
    try {
      const response = await fetch('https://formsubmit.co/ajax/mercadeo@amazonastech.com.ve', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          nombre: form.nombre,
          empresa: form.empresa || 'No especificada',
          email: form.email,
          telefono: form.telefono || 'No especificado',
          servicio: form.servicio,
          mensaje: form.mensaje || '(Sin mensaje)',
          _subject: 'Nueva solicitud de propuesta técnica — Amazonas Tech Web',
          _captcha: 'false',
          _template: 'table',
        }),
      })
      if (!response.ok) throw new Error('Error al enviar')
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Solicitar propuesta técnica"
    >
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-md animate-fade-in" onClick={() => status !== 'sending' && onClose()} />

      <div className="scrollbar-thin glass-panel relative max-h-[92dvh] w-full max-w-lg overflow-y-auto p-7 shadow-soft-lg animate-scale-in sm:p-9">
        <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-emerald-200/50 blur-3xl" aria-hidden="true" />

        <button
          type="button"
          onClick={onClose}
          disabled={status === 'sending'}
          className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-all duration-300 ease-in-out hover:border-emerald-300 hover:text-emerald-600 disabled:opacity-50"
          aria-label="Cerrar"
        >
          <IconClose />
        </button>

        {status === 'sent' ? (
          <div className="relative py-8 text-center animate-fade-up">
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50 text-emerald-600 shadow-soft">
              <IconCheck className="h-7 w-7" />
            </span>
            <h2 className="mt-6 text-2xl font-semibold tracking-tight text-slate-900">Solicitud registrada</h2>
            <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-slate-600">
              Gracias por contactar a Amazonas Tech, C.A. Nuestro equipo técnico se comunicará con usted a la brevedad
              posible para evaluar los requerimientos de su operación.
            </p>
            <button type="button" onClick={onClose} className="btn-primary mt-8 !px-7 !py-3.5">
              Finalizar
            </button>
          </div>
        ) : (
          <>
            <p className="relative text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald-600">
              Contacto Corporativo
            </p>
            <h2 className="relative mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Solicitar Propuesta Técnica
            </h2>
            <p className="relative mt-2.5 text-sm leading-relaxed text-slate-600">
              Complete el formulario y un especialista diseñará una propuesta ajustada a los requerimientos técnicos,
              normativos y de cronograma de su proyecto.
            </p>

            <form className="relative mt-7 grid gap-5 sm:grid-cols-2" onSubmit={handleSubmit}>
              <div className="sm:col-span-2">
                <label className="field-label" htmlFor="contact-nombre">Nombre y apellido</label>
                <input
                  id="contact-nombre"
                  type="text"
                  required
                  value={form.nombre}
                  onChange={update('nombre')}
                  placeholder="Ej. Carlos Rodríguez"
                  className="field-input"
                />
              </div>

              <div>
                <label className="field-label" htmlFor="contact-empresa">Empresa</label>
                <input
                  id="contact-empresa"
                  type="text"
                  value={form.empresa}
                  onChange={update('empresa')}
                  placeholder="Nombre de la empresa"
                  className="field-input"
                />
              </div>

              <div>
                <label className="field-label" htmlFor="contact-telefono">Teléfono</label>
                <input
                  id="contact-telefono"
                  type="tel"
                  value={form.telefono}
                  onChange={update('telefono')}
                  placeholder="(0xxx) xxx.xx.xx"
                  className="field-input"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="field-label" htmlFor="contact-email">Correo electrónico</label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={update('email')}
                  placeholder="nombre@empresa.com"
                  className="field-input"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="field-label" htmlFor="contact-servicio">Servicio de interés</label>
                <select id="contact-servicio" value={form.servicio} onChange={update('servicio')} className="field-input">
                  {SERVICE_OPTIONS.map((option) => (
                    <option key={option} value={option} className="text-slate-900">
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="field-label" htmlFor="contact-mensaje">Mensaje</label>
                <textarea
                  id="contact-mensaje"
                  rows={4}
                  value={form.mensaje}
                  onChange={update('mensaje')}
                  placeholder="Describa brevemente el alcance del servicio, ubicación y cronograma estimado."
                  className="field-input resize-none"
                />
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary w-full !py-4 text-[15px] disabled:cursor-wait disabled:opacity-70"
                >
                  {status === 'sending' ? 'Enviando solicitud…' : 'Enviar solicitud'}
                </button>
                {status === 'error' && (
                  <p className="mt-3 text-center text-xs font-medium text-red-600">
                    No pudimos enviar su solicitud. Por favor intente nuevamente o llame al (0291) 315.17.12.
                  </p>
                )}
                <div className="mt-5 flex items-center justify-center gap-2 text-xs text-slate-600">
                  <IconPhone className="h-3.5 w-3.5" />
                  Atención directa: (0291) 315.17.12 · (0283) 241.76.94
                </div>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
