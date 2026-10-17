import type { Metadata } from 'next'
import { ActiveOrder } from '@/components/explore/active-order'
import { BadgeShelf } from '@/components/explore/badge-shelf'
import { PlayerCard } from '@/components/explore/player-card'
import { RewardsRail } from '@/components/explore/rewards-rail'
import { StoreExplorer } from '@/components/explore/store-explorer'
import { CtaLink } from '@/components/site/cta-link'
import { getPlayer } from '@/lib/player'

export const metadata: Metadata = {
  title: 'Explore stores',
  description: 'See Gimme from the customer side: discover nearby stores, track orders and collect rewards in one wallet.',
  alternates: { canonical: '/explore' },
}

export default function ExplorePage() {
  const player = getPlayer()
  return (
    <div className="mx-auto max-w-7xl px-5 py-8 lg:px-8 lg:py-10">
      <p className="mb-6 rounded-full bg-lavender px-4 py-2 text-center text-xs font-semibold text-brand md:text-sm">
        Interactive preview of the customer experience with sample stores. Points, levels and badges are illustrative.
      </p>
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className="flex min-w-0 flex-col gap-5">
          <PlayerCard player={player} />
          <ActiveOrder />
          <RewardsRail />
        </div>
        <div className="flex flex-col gap-5">
          <BadgeShelf badges={player.badges} />
          <div className="rounded-[2rem] bg-ink p-6 text-white">
            <p className="text-xs font-bold uppercase tracking-widest text-lime">For businesses</p>
            <p className="mt-2 font-display text-xl font-bold">Want your store in here?</p>
            <p className="mt-2 text-sm text-white/70">
              Give your customers a storefront, live orders and a loyalty wallet — no app download needed.
            </p>
            <CtaLink href="/demo" variant="lime" className="mt-5">
              Book a demo
            </CtaLink>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <StoreExplorer />
      </div>
    </div>
  )
}
