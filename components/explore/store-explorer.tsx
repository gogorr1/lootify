'use client'

import { useMemo, useState } from 'react'
import { Search, SlidersHorizontal } from 'lucide-react'
import { stores, storeTypes } from '@/lib/stores'
import { cn } from '@/lib/utils'
import { NearbyRadar } from './nearby-radar'
import { StoreCard } from './store-card'

type Sort = 'nearest' | 'reward'

export function StoreExplorer() {
  const [query, setQuery] = useState('')
  const [type, setType] = useState<(typeof storeTypes)[number]>('All')
  const [openOnly, setOpenOnly] = useState(false)
  const [sort, setSort] = useState<Sort>('nearest')
  const [activeId, setActiveId] = useState<string | null>(null)

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    const filtered = stores.filter(
      (s) =>
        (type === 'All' || s.type === type) &&
        (!openOnly || s.status === 'open') &&
        (!q || s.name.toLowerCase().includes(q) || s.type.toLowerCase().includes(q)),
    )
    const rewardScore = (s: (typeof stores)[number]) => (s.reward ? s.reward.points / s.reward.goal : -1)
    return [...filtered].sort((a, b) =>
      sort === 'nearest' ? a.distanceKm - b.distanceKm : rewardScore(b) - rewardScore(a),
    )
  }, [query, type, openOnly, sort])

  const openCount = results.filter((s) => s.status === 'open').length

  return (
    <section aria-labelledby="discover-heading" className="flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <h2 id="discover-heading" className="font-display text-2xl font-bold text-ink">
          Discover nearby
        </h2>
        <p className="text-sm text-muted-foreground" aria-live="polite">
          {results.length} stores · {openCount} open right now
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <label className="relative block">
          <span className="sr-only">Search stores</span>
          <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search stores, cafés, bakeries..."
            className="h-12 w-full rounded-full border border-ink/10 bg-white pl-11 pr-4 text-base text-ink outline-none transition-shadow placeholder:text-muted-foreground focus:border-brand-bright focus:ring-4 focus:ring-brand-bright/15"
          />
        </label>

        <div className="flex flex-wrap items-center gap-2">
          <div role="group" aria-label="Store type" className="flex flex-wrap gap-2">
            {storeTypes.map((t) => (
              <button
                key={t}
                type="button"
                aria-pressed={type === t}
                onClick={() => setType(t)}
                className={cn(
                  'h-9 rounded-full px-4 text-sm font-bold transition-all',
                  type === t ? 'bg-ink text-white' : 'bg-white text-ink ring-1 ring-ink/10 hover:ring-ink/25',
                )}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="ml-auto flex items-center gap-2">
            <button
              type="button"
              aria-pressed={openOnly}
              onClick={() => setOpenOnly((v) => !v)}
              className={cn(
                'inline-flex h-9 items-center gap-2 rounded-full px-3.5 text-sm font-bold transition-all',
                openOnly ? 'bg-emerald-500 text-white' : 'bg-white text-ink ring-1 ring-ink/10',
              )}
            >
              <span className={cn('size-2 rounded-full', openOnly ? 'bg-white' : 'bg-emerald-500')} aria-hidden="true" />
              Open now
            </button>
            <label className="inline-flex h-9 items-center gap-2 rounded-full bg-white px-3.5 text-sm font-bold text-ink ring-1 ring-ink/10">
              <SlidersHorizontal className="size-4" aria-hidden="true" />
              <span className="sr-only">Sort by</span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as Sort)}
                className="bg-transparent outline-none"
              >
                <option value="nearest">Nearest</option>
                <option value="reward">Closest to reward</option>
              </select>
            </label>
          </div>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_340px]">
        {results.length > 0 ? (
          <ul className="grid gap-4 sm:grid-cols-2">
            {results.map((s, i) => (
              <li key={s.id} className="animate-rise" style={{ animationDelay: `${i * 50}ms` }}>
                <StoreCard store={s} active={activeId === s.id} onActivate={setActiveId} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="grid place-items-center rounded-[2rem] border border-dashed border-ink/15 bg-white p-10 text-center">
            <div>
              <p className="font-display text-lg font-bold text-ink">Nothing here yet</p>
              <p className="mt-1 text-sm text-muted-foreground">Try a different search or turn off “Open now”.</p>
              <button
                type="button"
                onClick={() => {
                  setQuery('')
                  setType('All')
                  setOpenOnly(false)
                }}
                className="mt-4 rounded-full bg-ink px-4 py-2 text-sm font-bold text-white"
              >
                Reset filters
              </button>
            </div>
          </div>
        )}
        <aside className="order-first lg:order-none" aria-label="Map of nearby stores">
          <div className="lg:sticky lg:top-24">
            <NearbyRadar stores={results} activeId={activeId} onActivate={setActiveId} />
          </div>
        </aside>
      </div>
    </section>
  )
}
