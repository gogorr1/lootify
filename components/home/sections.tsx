import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, CalendarDays, ChefHat, Gift, LayoutDashboard, ShoppingBag, Sparkles, Store, UtensilsCrossed } from 'lucide-react'
import { CtaLink } from '@/components/site/cta-link'
import { FaqList } from '@/components/site/faq-list'
import { SectionHeading, SoonBadge } from '@/components/site/primitives'
import { faqs, features, industries } from '@/lib/site-data'
import { stores } from '@/lib/stores'

const featureIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'digital-storefronts': Store,
  'online-ordering': ShoppingBag,
  bookings: CalendarDays,
  operations: LayoutDashboard,
  catering: UtensilsCrossed,
  loyalty: Gift,
  ai: Sparkles,
}

export function FeatureGrid() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <SectionHeading
        eyebrow="Platform"
        title="Everything a local business runs on"
        description="Start with a storefront and switch on what you need. Every part shares the same customers, orders and products."
      />
      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => {
          const Icon = featureIcons[f.slug] ?? Store
          const featured = i === 0
          return (
            <li key={f.slug} className={featured ? 'sm:col-span-2 lg:row-span-2' : ''}>
              <Link
                href={`/features/${f.slug}`}
                className={
                  featured
                    ? 'group flex h-full flex-col justify-between gap-8 rounded-[2rem] bg-brand p-7 text-white transition-transform hover:-translate-y-1'
                    : 'group flex h-full flex-col gap-4 rounded-[2rem] bg-white p-6 ring-1 ring-ink/5 transition-all hover:-translate-y-1 hover:ring-brand-bright/40'
                }
              >
                <div className="flex items-start justify-between">
                  <span
                    className={
                      featured
                        ? 'grid size-12 place-items-center rounded-2xl bg-lime text-ink'
                        : 'grid size-11 place-items-center rounded-2xl bg-lavender text-brand'
                    }
                  >
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  {f.status === 'soon' ? (
                    <SoonBadge />
                  ) : (
                    <ArrowUpRight className="size-5 opacity-40 transition-opacity group-hover:opacity-100" aria-hidden="true" />
                  )}
                </div>
                <div>
                  <h3 className={featured ? 'font-display text-3xl font-bold md:text-4xl' : 'font-display text-lg font-bold text-ink'}>
                    {f.name}
                  </h3>
                  <p className={featured ? 'mt-3 max-w-md text-white/80' : 'mt-1.5 text-sm leading-relaxed text-muted-foreground'}>
                    {featured ? f.summary : f.tagline}
                  </p>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export function HowItWorks() {
  const steps = [
    { icon: Store, title: 'Set up your store', body: 'Add your menu, products or services, opening hours and fulfilment options.' },
    { icon: ShoppingBag, title: 'Share one link', body: 'Customers order or book from a QR code, your website or social profiles.' },
    { icon: ChefHat, title: 'Run it live', body: 'Orders and bookings arrive in one queue. Update statuses with a tap.' },
    { icon: Gift, title: 'Bring them back', body: 'Points collect automatically and rewards show up in the customer wallet.' },
  ]
  return (
    <section className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-lime">How it works</p>
          <h2 className="mt-3 font-display text-4xl font-bold leading-[1.05] md:text-5xl">From first scan to loyal regular</h2>
        </div>
        <ol className="mt-12 grid gap-4 md:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="relative rounded-[2rem] bg-white/5 p-6 ring-1 ring-white/10">
              <span className="font-display text-5xl font-extrabold text-white/10">0{i + 1}</span>
              <s.icon className="mt-4 size-6 text-lime" aria-hidden="true" />
              <h3 className="mt-3 font-display text-lg font-bold">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-white/70">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function IndustriesRow() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <SectionHeading eyebrow="Industries" title="Shaped around how you work" />
      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((ind) => (
          <li key={ind.slug}>
            <Link href={`/industries/${ind.slug}`} className="group relative block aspect-[4/3] overflow-hidden rounded-[2rem]">
              <Image
                src={ind.image || '/placeholder.svg'}
                alt=""
                fill
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" aria-hidden="true" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-6 text-white">
                <div>
                  <h3 className="font-display text-2xl font-bold">{ind.name}</h3>
                  <p className="text-sm text-white/80">{ind.short}</p>
                </div>
                <span className="grid size-10 place-items-center rounded-full bg-white text-ink transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export function ExploreTeaser() {
  const preview = stores.slice(0, 4)
  return (
    <section className="px-5 lg:px-8">
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 overflow-hidden rounded-[2.5rem] bg-lavender p-8 md:p-12 lg:grid-cols-2">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-bright">For your customers</p>
          <h2 className="mt-3 font-display text-4xl font-bold leading-[1.05] text-ink md:text-5xl">
            One wallet. Every local favourite.
          </h2>
          <p className="mt-4 max-w-lg text-lg text-ink/70">
            Customers discover nearby stores, follow orders live and level up as they collect rewards. Try the
            interactive preview.
          </p>
          <CtaLink href="/explore" size="lg" className="mt-7">
            Explore stores
          </CtaLink>
        </div>
        <ul className="grid grid-cols-2 gap-3">
          {preview.map((s, i) => {
            const r = s.reward
            return (
              <li
                key={s.id}
                className={`rounded-3xl bg-white p-3 shadow-sm ${i % 2 === 1 ? 'translate-y-6' : ''}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image src={s.image || '/placeholder.svg'} alt="" fill sizes="200px" className="object-cover" />
                </div>
                <p className="mt-2 truncate px-1 text-sm font-bold text-ink">{s.name}</p>
                {r && (
                  <div className="mx-1 mt-1.5 h-1.5 overflow-hidden rounded-full bg-ink/10" aria-hidden="true">
                    <div className="h-full rounded-full bg-brand-bright" style={{ width: `${Math.min(r.points / r.goal, 1) * 100}%` }} />
                  </div>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export function HomeFaq() {
  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[1fr_1.4fr] lg:px-8 lg:py-28">
      <div>
        <SectionHeading eyebrow="FAQ" title="Questions, answered" />
        <CtaLink href="/faq" variant="secondary" className="mt-6">
          All FAQs
        </CtaLink>
      </div>
      <FaqList items={faqs.slice(0, 5)} />
    </section>
  )
}

export function FinalCta() {
  return (
    <section className="px-5 pb-20 lg:px-8 lg:pb-28">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-brand px-8 py-14 text-center text-white md:py-20">
        <div className="bg-grid-dark pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="relative">
          <h2 className="mx-auto max-w-2xl text-balance font-display text-4xl font-bold leading-[1.05] md:text-6xl">
            Ready to give your customers more?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-white/75">
            We&apos;ll walk through how your business works and set up a store that fits it.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CtaLink href="/demo" size="lg" variant="lime">
              Book a demo
            </CtaLink>
            <CtaLink href="/platform" size="lg" variant="light">
              See the platform
            </CtaLink>
          </div>
        </div>
      </div>
    </section>
  )
}
