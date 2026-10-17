import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Gift, MapPin } from 'lucide-react'
import { ProgressRing } from '@/components/explore/progress-ring'
import { CtaLink } from '@/components/site/cta-link'
import { formatDistance, stores } from '@/lib/stores'

export function generateStaticParams() {
  return stores.map((s) => ({ id: s.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const store = stores.find((s) => s.id === id)
  return { title: store ? `${store.name} — sample store` : 'Store', robots: { index: false } }
}

const statusLabel = { open: 'Open now', closed: 'Closed', vacation: 'On vacation' } as const

export default async function StorePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const store = stores.find((s) => s.id === id)
  if (!store) notFound()
  const r = store.reward
  const ready = r && r.points >= r.goal

  return (
    <div className="mx-auto max-w-4xl px-5 py-8 lg:py-12">
      <Link href="/explore" className="inline-flex items-center gap-2 text-sm font-bold text-ink/70 hover:text-ink">
        <ArrowLeft className="size-4" aria-hidden="true" />
        Back to explore
      </Link>
      <div className="relative mt-5 aspect-[16/8] overflow-hidden rounded-[2rem]">
        <Image src={store.image || '/placeholder.svg'} alt={`${store.name} storefront`} fill priority sizes="(min-width: 896px) 896px, 100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 p-6 text-white md:p-8">
          <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold backdrop-blur">{statusLabel[store.status]}</span>
          <h1 className="mt-3 font-display text-4xl font-bold md:text-5xl">{store.name}</h1>
          <p className="mt-1 flex items-center gap-1.5 text-white/80">
            {store.type} · <MapPin className="size-4" aria-hidden="true" /> {formatDistance(store.distanceKm)} · {store.fulfilment.join(', ')}
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-[1fr_280px]">
        <div className="rounded-[2rem] bg-white p-6 ring-1 ring-ink/5">
          <h2 className="font-display text-xl font-bold text-ink">This is a sample store</h2>
          <p className="mt-2 leading-relaxed text-muted-foreground">
            In a live Gimme storefront, customers browse the menu or product range here, choose dine-in, takeaway or
            delivery, and follow their order in real time. Points land in their wallet automatically.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <CtaLink href="/features/digital-storefronts">How storefronts work</CtaLink>
            <CtaLink href="/demo" variant="secondary">
              Book a demo
            </CtaLink>
          </div>
        </div>
        <div className={ready ? 'rounded-[2rem] bg-lime p-6' : 'rounded-[2rem] bg-white p-6 ring-1 ring-ink/5'}>
          {r ? (
            <div className="flex flex-col items-center text-center">
              <ProgressRing value={r.points / r.goal} size={110} stroke={10} barClassName={ready ? 'stroke-ink' : 'stroke-brand-bright'}>
                <Gift className="size-8 text-ink" aria-hidden="true" />
              </ProgressRing>
              <p className="mt-4 font-display text-xl font-bold text-ink">{r.label}</p>
              <p className="text-sm text-ink/70">{ready ? 'Ready to claim' : `${r.points} of ${r.goal} points`}</p>
            </div>
          ) : (
            <p className="text-sm font-semibold text-muted-foreground">No loyalty card yet. Your first order starts one.</p>
          )}
        </div>
      </div>
    </div>
  )
}
