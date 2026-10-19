const IMAGES = [
  { src: '/img/eficacia.jpg', alt: 'Equipo de Amazonas Tech instalando tuberías en campo' },
  { src: '/img/mud-cleaner.jpg', alt: 'Mud Cleaner — separación fina de sólidos' },
  { src: '/img/maquinaria-pesada.jpg', alt: 'Maquinaria pesada en operación' },
  { src: '/img/maquinaria-especializada.jpg', alt: 'Maquinaria especializada en planta de procesos' },
  { src: '/img/camionetas.jpeg', alt: 'Camionetas de Amazonas Tech' },
  { src: '/img/camion rojo.jpeg', alt: 'Camión de Amazonas Tech' },
]

export default function Marquee() {
  return (
    <section aria-label="Galería de operaciones" className="relative border-y border-slate-200 bg-white py-10 sm:py-14">
      <div className="marquee-mask overflow-hidden">
        <div className="marquee-track gap-4 sm:gap-6">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 gap-4 sm:gap-6" aria-hidden={copy === 1}>
              {IMAGES.map((image) => (
                <figure
                  key={`${copy}-${image.src}`}
                  className="group relative h-40 w-64 shrink-0 overflow-hidden rounded-2xl border border-slate-200 shadow-soft transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-green-200 hover:shadow-soft-lg sm:h-52 sm:w-80"
                >
                  <img
                    src={image.src}
                    alt={copy === 0 ? image.alt : ''}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  />
                </figure>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
