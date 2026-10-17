import { Award, Lock } from 'lucide-react'
import type { getPlayer } from '@/lib/player'
import { cn } from '@/lib/utils'

export function BadgeShelf({ badges }: { badges: ReturnType<typeof getPlayer>['badges'] }) {
  return (
    <section aria-labelledby="badges-heading" className="rounded-[2rem] border border-ink/5 bg-white p-5">
      <div className="flex items-baseline justify-between">
        <h2 id="badges-heading" className="font-display text-lg font-bold text-ink">
          Badges
        </h2>
        <p className="text-xs font-semibold text-muted-foreground">
          {badges.filter((b) => b.earned).length} of {badges.length}
        </p>
      </div>
      <ul className="mt-4 grid grid-cols-3 gap-3">
        {badges.map((b) => (
          <li key={b.id} className="flex flex-col items-center gap-1.5 text-center" title={b.hint}>
            <span
              className={cn(
                'grid size-12 place-items-center rounded-2xl',
                b.earned ? 'rotate-3 bg-lime text-ink shadow-sm' : 'bg-muted text-ink/30',
              )}
            >
              {b.earned ? <Award className="size-5" aria-hidden="true" /> : <Lock className="size-4" aria-hidden="true" />}
            </span>
            <span className={cn('text-[11px] font-bold leading-tight', b.earned ? 'text-ink' : 'text-muted-foreground')}>
              {b.label}
            </span>
            <span className="sr-only">{b.earned ? 'Earned' : `Locked: ${b.hint}`}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
