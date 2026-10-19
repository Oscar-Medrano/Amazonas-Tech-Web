export default function Logo({ className = '', onNavigate, compact = false }) {
  return (
    <a
      href="#inicio"
      onClick={onNavigate}
      className={`group flex items-center gap-3 ${className}`}
      aria-label="Amazonas Tech C.A. — Inicio"
    >
      <span className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 ease-in-out group-hover:border-green-300">
        <img src="/icon.png" alt="" width={42} height={42} className="h-10 w-10 sm:h-11 sm:w-11 lg:h-12 lg:w-12 object-contain" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-[15px] font-semibold tracking-[0.14em] text-slate-900 transition-colors duration-300 group-hover:text-green-700 sm:text-lg">
          AMAZONAS TECH
        </span>
        {!compact && <span className="mt-1.5 text-[13px] font-bold tracking-[0.3em] text-green-600">C.A.</span>}
      </span>
    </a>
  )
}
