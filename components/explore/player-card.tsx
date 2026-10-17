import { Flame, Gift, MapPin, Sparkles, Target } from 'lucide-react'
import type { getPlayer } from '@/lib/player'
import { cn } from '@/lib/utils'

type Player = ReturnType<typeof getPlayer>

export function PlayerCard({ player }: { player: Player }) {
  return (
    <section
      aria-labelledby="player-heading"
      className="relative overflow-hidden rounded-[2rem] bg-brand p-6 text-white md:p-7"
    >
      <div className="bg-grid-dark pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-20 -top-24 size-72 rounded-full bg-brand-bright blur-3xl"
        aria-hidden="true"
      />
      <div className="relative flex flex-col gap-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-white/70">Welcome back</p>
            <h1 id="player-heading" className="mt-1 font-display text-3xl font-bold md:text-4xl">
              Hey {player.name}, hungry?
            </h1>
          </div>
          <div className="flex shrink-0 items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-sm font-bold ring-1 ring-white/15">
            <Flame className="size-4 text-orange-300" aria-hidden="true" />
            {player.weekStreak}-week streak
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="grid size-16 shrink-0 place-items-center rounded-2xl bg-lime font-display text-2xl font-extrabold text-ink shadow-[0_0_0_6px_rgba(200,241,105,0.18)]">
            {player.level}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-baseline justify-between gap-2">
              <p className="font-display text-lg font-bold">
                Level {player.level} · {player.title}
              </p>
              <p className="text-xs font-semibold text-white/70">{player.xp} XP</p>
            </div>
            <div
              className="mt-2 h-3 overflow-hidden rounded-full bg-white/15"
              role="progressbar"
              aria-label={`Progress to ${player.nextTitle}`}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(player.levelProgress * 100)}
            >
              <div
                className="relative h-full rounded-full bg-lime transition-[width] duration-1000"
                style={{ width: `${player.levelProgress * 100}%` }}
              >
                <span className="absolute inset-0 animate-pulse bg-white/30" aria-hidden="true" />
              </div>
            </div>
            <p className="mt-1.5 text-xs text-white/70">
              {player.xpToNext} XP until <span className="font-bold text-white">{player.nextTitle}</span>
            </p>
          </div>
        </div>

        <dl className="grid grid-cols-3 gap-2">
          <Stat icon={<MapPin className="size-4" />} label="Stores visited" value={player.storesVisited} />
          <Stat icon={<Gift className="size-4" />} label="Rewards ready" value={player.readyRewards} highlight />
          <Stat icon={<Sparkles className="size-4" />} label="Badges" value={player.badges.filter((b) => b.earned).length} />
        </dl>

        <div className="rounded-2xl bg-white p-4 text-ink">
          <div className="flex items-center gap-3">
            <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-lavender text-brand">
              <Target className="size-4" aria-hidden="true" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[11px] font-bold uppercase tracking-wider text-brand-bright">Weekly quest</p>
              <p className="truncate text-sm font-bold">{player.quest.label}</p>
            </div>
            <span className="rounded-full bg-lime px-2.5 py-1 text-xs font-extrabold">+{player.quest.rewardXp} XP</span>
          </div>
          <ol className="mt-3 grid grid-cols-3 gap-1.5" aria-label={`${player.quest.progress} of ${player.quest.goal} complete`}>
            {Array.from({ length: player.quest.goal }).map((_, i) => (
              <li
                key={i}
                className={cn('h-2 rounded-full', i < player.quest.progress ? 'bg-brand-bright' : 'bg-ink/10')}
              />
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

function Stat({
  icon,
  label,
  value,
  highlight,
}: {
  icon: React.ReactNode
  label: string
  value: number
  highlight?: boolean
}) {
  return (
    <div className={cn('rounded-2xl p-3 ring-1', highlight ? 'bg-lime text-ink ring-lime' : 'bg-white/10 ring-white/15')}>
      <dt className={cn('flex items-center gap-1.5 text-[11px] font-bold', highlight ? 'text-ink/70' : 'text-white/70')}>
        <span aria-hidden="true">{icon}</span>
        {label}
      </dt>
      <dd className="mt-1 font-display text-2xl font-extrabold">{value}</dd>
    </div>
  )
}
