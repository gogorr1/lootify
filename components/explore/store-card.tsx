import Image from 'next/image'
import Link from 'next/link'
import { Bike, Gift, MapPin, ShoppingBag, Sparkles, Utensils } from 'lucide-react'
import type { Store } from '@/lib/stores'
import { formatDistance } from '@/lib/stores'
import { cn } from '@/lib/utils'

const statusStyles = {
  open: { label: 'Open now', className: 'bg-emerald-500 text-white' },
  closed: { label: 'Closed', className: 'bg-ink/80 text-white' },
  vacation: { label: 'On vacation', className: 'bg-amber-400 text-ink' },
} as const

const fulfilmentIcon = { 'Dine in': Utensils, Takeaway: ShoppingBag, Delivery: Bike } as const

export function StoreCard({
  store,
  active,
  onActivate,
}: {
  store: Store
  active: boolean
  onActivate: (id: string | null) => void
}) {
  const status = statusStyles[store.status]
  const r = store.reward
  const ready = r && r.points >= r.goal
  const unavailable = store.status !== 'open'

  return (
    <article
      onMouseEnter={() => onActivate(store.id)}
      onMouseLeave={() => onActivate(null)}
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-[1.75rem] bg-white ring-1 transition-all duration-300',
        active ? '-translate-y-1 ring-brand-bright shadow-[0_20px_40px_-20px_rgba(60,30,133,0.5)]' : 'ring-ink/5',
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={store.image || '/placeholder.svg'}
          alt={`${store.name} storefront`}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
          className={cn(
            'object-cover transition-transform duration-500 group-hover:scale-105',
            unavailable && 'grayscale-[60%]',
          )}
        />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/60 to-transparent" aria-hidden="true" />
        <span className={cn('absolute left-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-extrabold', status.className)}>
          {status.label}
        </span>
        {store.offer && (
          <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-lime px-2.5 py-1 text-[11px] font-extrabold text-ink">
            <Sparkles className="size-3" aria-hidden="true" />
            {store.offer}
          </span>
        )}
        <span className="absolute bottom-3 left-3 inline-flex items-center gap-1 text-xs font-bold text-white">
          <MapPin className="size-3.5" aria-hidden="true" />
          {formatDistance(store.distanceKm)}
        </span>
        {store.visits >= 10 && (
          <span className="absolute bottom-3 right-3 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-extrabold uppercase text-brand">
            You&apos;re a regular
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="truncate font-display text-lg font-bold text-ink">
              <Link
                href={`/explore/${store.id}`}
                onFocus={() => onActivate(store.id)}
                onBlur={() => onActivate(null)}
                className="after:absolute after:inset-0 focus-visible:outline-none"
              >
                {store.name}
              </Link>
            </h3>
            <p className="text-sm text-muted-foreground">{store.type}</p>
          </div>
          <ul className="flex shrink-0 gap-1" aria-label="Fulfilment options">
            {store.fulfilment.map((f) => {
              const Icon = fulfilmentIcon[f]
              return (
                <li key={f} title={f} className="grid size-8 place-items-center rounded-full bg-lavender text-brand">
                  <Icon className="size-3.5" aria-hidden="true" />
                  <span className="sr-only">{f}</span>
                </li>
              )
            })}
          </ul>
        </div>

        {r ? (
          <div className={cn('mt-auto rounded-2xl p-3', ready ? 'bg-lime' : 'bg-cream')}>
            <div className="flex items-center justify-between text-xs font-bold text-ink">
              <span className="inline-flex items-center gap-1.5">
                <Gift className="size-3.5" aria-hidden="true" />
                {r.label}
              </span>
              <span>{ready ? 'Ready to claim' : `${r.goal - r.points} to go`}</span>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-ink/10">
              <div
                className={cn('h-full rounded-full', ready ? 'bg-ink' : 'bg-brand-bright')}
                style={{ width: `${Math.min(r.points / r.goal, 1) * 100}%` }}
              />
            </div>
          </div>
        ) : (
          <p className="mt-auto rounded-2xl border border-dashed border-ink/15 p-3 text-xs font-semibold text-muted-foreground">
            New to you. Order once to unlock the Explorer badge.
          </p>
        )}
      </div>
    </article>
  )
}
