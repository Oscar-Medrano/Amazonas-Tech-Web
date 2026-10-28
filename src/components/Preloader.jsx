import { useEffect, useState } from 'react'

export default function Preloader({ onComplete }) {
  const [phase, setPhase] = useState('start')
  const [target, setTarget] = useState({ x: 0, y: 0, scale: 1 })

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('glow'), 200)
    const t2 = setTimeout(() => {
      const heroLogo = document.querySelector('img[alt="Amazonas Tech, C.A."]')
      if (heroLogo) {
        const rect = heroLogo.getBoundingClientRect()
        setTarget({
          x: rect.left + rect.width / 2 - window.innerWidth / 2,
          y: rect.top + rect.height / 2 - window.innerHeight / 2,
          scale: rect.width / 120,
        })
      }
      setPhase('move')
    }, 700)
    const t3 = setTimeout(() => setPhase('fade'), 1300)
    const t4 = setTimeout(() => {
      if (onComplete) onComplete()
    }, 1700)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
      clearTimeout(t4)
    }
  }, [onComplete])

  const transform =
    phase === 'move' || phase === 'fade'
      ? `translate(${target.x}px, ${target.y}px) scale(${target.scale})`
      : 'translateY(0) scale(1)'

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-500 ${
        phase === 'fade' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div
        className={`transition-all duration-700 ease-out ${transform} ${
          phase === 'glow'
            ? 'rounded-2xl shadow-[0_0_120px_30px_rgba(22,163,74,0.35)]'
            : ''
        }`}
      >
        <div
          className={`inline-flex items-center justify-center rounded-2xl backdrop-blur-md px-6 py-3 transition-all duration-700 ease-out ${
            phase === 'glow'
              ? 'border border-green-400/70 bg-white/60 ring-2 ring-green-400/50'
              : 'border border-slate-200/70 bg-white/80'
          }`}
        >
          <img
            src="/logo-amazonas-tech.png"
            alt="Amazonas Tech, C.A."
            className="mx-auto h-24 w-auto sm:h-28 md:h-32 lg:h-36"
          />
        </div>
      </div>
    </div>
  )
}
