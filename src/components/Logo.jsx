export default function Logo({ className = '', onNavigate, compact = false }) {
  return (
    <a
      href="#inicio"
      onClick={onNavigate}
      className={`group flex items-center gap-3 ${className}`}
      aria-label="Amazonas Tech C.A. — Inicio"
    >
      <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 ease-in-out group-hover:border-emerald-300">
        <img src="/icon.png" alt="" width={28} height={28} className="h-7 w-7 object-contain" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-sm font-semibold tracking-[0.14em] text-slate-900 transition-colors duration-300 group-hover:text-emerald-700 sm:text-[15px]">
          AMAZONAS TECH
        </span>
        {!compact && <span className="mt-1 text-[10px] font-medium tracking-[0.3em] text-emerald-600">C.A.</span>}
      </span>
    </a>
  )
}
