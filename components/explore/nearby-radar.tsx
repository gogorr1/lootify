import Image from 'next/image'
import Link from 'next/link'
import type { Store } from '@/lib/stores'
import { formatDistance } from '@/lib/stores'
import { cn } from '@/lib/utils'

const MAX_KM = 5

export function NearbyRadar({
  stores,
  activeId,
  onActivate,
}: {
  stores: Store[]
  activeId: string | null
  onActivate: (id: string | null) => void
}) {
  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-[2rem] bg-ink">
      <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />
      {[1, 0.66, 0.33].map((scale) => (
        <div
          key={scale}
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
          style={{ width: `${scale * 90}%`, height: `${scale * 90}%` }}
        />
      ))}
      <div
        aria-hidden="true"
        className="absolute inset-[5%] animate-sweep rounded-full motion-reduce:hidden"
        style={{ background: 'conic-gradient(from 0deg, rgba(200,241,105,0.28), transparent 25%)' }}
      />
      <div aria-hidden="true" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <span className="block size-4 rounded-full bg-lime ring-8 ring-lime/20" />
      </div>
      <span className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-widest text-white/40">
        {MAX_KM} km radius
      </span>

      <ul aria-label="Stores near you">
        {stores.map((s, i) => {
          const r = Math.min(s.distanceKm / MAX_KM, 1) * 45
          const angle = ((i * 360) / Math.max(stores.length, 1) + 30) * (Math.PI / 180)
          const left = 50 + r * Math.cos(angle)
          const top = 50 + r * Math.sin(angle)
          const active = activeId === s.id
          const closed = s.status !== 'open'
          return (
            <li
              key={s.id}
              className={cn('absolute -translate-x-1/2 -translate-y-1/2 transition-transform', active && 'z-10 scale-110')}
              style={{ left: `${left}%`, top: `${top}%` }}
            >
              <Link
                href={`/explore/${s.id}`}
                onMouseEnter={() => onActivate(s.id)}
                onMouseLeave={() => onActivate(null)}
                onFocus={() => onActivate(s.id)}
                onBlur={() => onActivate(null)}
                className="group flex flex-col items-center gap-1"
              >
                <span
                  className={cn(
                    'relative block size-11 overflow-hidden rounded-full ring-[3px] transition-all',
                    active ? 'ring-lime' : 'ring-white/80',
                    closed && 'grayscale',
                  )}
                >
                  <Image src={s.image || '/placeholder.svg'} alt="" fill sizes="44px" className="object-cover" />
                </span>
                <span
                  className={cn(
                    'whitespace-nowrap rounded-full px-2 py-0.5 text-[10px] font-bold transition-colors',
                    active ? 'bg-lime text-ink' : 'bg-white/10 text-white',
                  )}
                >
                  {s.name} · {formatDistance(s.distanceKm)}
                </span>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
