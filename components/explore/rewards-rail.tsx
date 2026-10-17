import Link from 'next/link'
import { Gift } from 'lucide-react'
import { stores } from '@/lib/stores'
import { cn } from '@/lib/utils'
import { ProgressRing } from './progress-ring'

export function RewardsRail() {
  const withRewards = stores
    .filter((s) => s.reward)
    .sort((a, b) => b.reward!.points / b.reward!.goal - a.reward!.points / a.reward!.goal)

  return (
    <section aria-labelledby="wallet-heading">
      <div className="flex items-end justify-between">
        <h2 id="wallet-heading" className="font-display text-2xl font-bold text-ink">
          Your wallet
        </h2>
        <p className="text-sm text-muted-foreground">{withRewards.length} loyalty cards</p>
      </div>
      <ul className="-mx-5 mt-4 flex snap-x gap-3 overflow-x-auto px-5 pb-2 [scrollbar-width:none]">
        {withRewards.map((s) => {
          const r = s.reward!
          const ready = r.points >= r.goal
          return (
            <li key={s.id} className="snap-start">
              <Link
                href={`/explore/${s.id}`}
                className={cn(
                  'group flex w-56 flex-col gap-4 rounded-3xl p-4 ring-1 transition-transform hover:-translate-y-1',
                  ready
                    ? 'bg-ink text-white ring-ink shadow-[0_12px_32px_-12px_rgba(200,241,105,0.8)]'
                    : 'bg-white text-ink ring-ink/5',
                )}
              >
                <div className="flex items-center justify-between">
                  <span className="truncate text-sm font-bold">{s.name}</span>
                  {ready && (
                    <span className="rounded-full bg-lime px-2 py-0.5 text-[10px] font-extrabold uppercase text-ink">
                      Ready
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  <ProgressRing
                    value={r.points / r.goal}
                    size={58}
                    trackClassName={ready ? 'stroke-white/15' : 'stroke-ink/10'}
                    barClassName={ready ? 'stroke-lime' : 'stroke-brand-bright'}
                  >
                    <Gift className={cn('size-5', ready ? 'text-lime' : 'text-brand')} aria-hidden="true" />
                  </ProgressRing>
                  <div className="min-w-0">
                    <p className="font-display text-lg font-extrabold leading-tight">{r.label}</p>
                    <p className={cn('text-xs', ready ? 'text-white/70' : 'text-muted-foreground')}>
                      {ready ? 'Tap to claim at checkout' : `${r.points} / ${r.goal} points`}
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
