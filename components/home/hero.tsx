import Image from 'next/image'
import { Check, Gift, Sparkles } from 'lucide-react'
import { CtaLink } from '@/components/site/cta-link'
import { Eyebrow } from '@/components/site/primitives'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-14 lg:grid-cols-2 lg:px-8 lg:pb-28 lg:pt-20">
        <div className="animate-rise">
          <Eyebrow>The all-in-one platform for local business</Eyebrow>
          <h1 className="mt-5 text-balance font-display text-5xl font-bold leading-[0.98] text-ink md:text-7xl">
            Sell, book and reward. <span className="text-brand-bright">All from one place.</span>
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Gimme gives restaurants, cafés, salons, gyms and shops a digital storefront, online ordering, bookings and
            a loyalty wallet — managed from a single dashboard.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CtaLink href="/demo" size="lg">
              Book a demo
            </CtaLink>
            <CtaLink href="/explore" size="lg" variant="secondary">
              Try the customer app
            </CtaLink>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-ink/70">
            {['No app download for customers', 'Works with QR codes and links', 'One dashboard for every channel'].map(
              (t) => (
                <li key={t} className="flex items-center gap-2">
                  <Check className="size-4 text-brand-bright" aria-hidden="true" />
                  {t}
                </li>
              ),
            )}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-2xl ring-1 ring-ink/5">
            <Image
              src="/stores/bakery.png"
              alt="Customer ordering at a local bakery"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" aria-hidden="true" />
          </div>

          <div className="absolute -left-4 top-10 w-56 animate-float rounded-3xl bg-white p-4 shadow-xl ring-1 ring-ink/5 md:-left-10">
            <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">New order #1882</p>
            <p className="mt-1 font-display font-bold text-ink">2× Croissant, 1× Latte</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="rounded-full bg-orange-100 px-2 py-0.5 text-[11px] font-bold text-orange-700">Preparing</span>
              <span className="text-sm font-extrabold text-ink">€9.40</span>
            </div>
          </div>

          <div
            className="absolute -right-3 bottom-24 w-52 animate-float rounded-3xl bg-ink p-4 text-white shadow-xl md:-right-8"
            style={{ animationDelay: '1.2s' }}
          >
            <div className="flex items-center gap-2 text-xs font-bold text-lime">
              <Gift className="size-4" aria-hidden="true" />
              Loyalty
            </div>
            <p className="mt-1 font-display text-lg font-bold">Free pastry</p>
            <div className="mt-2 grid grid-cols-10 gap-1" aria-hidden="true">
              {Array.from({ length: 10 }).map((_, i) => (
                <span key={i} className={i < 7 ? 'h-2 rounded-full bg-lime' : 'h-2 rounded-full bg-white/15'} />
              ))}
            </div>
            <p className="mt-2 text-xs text-white/70">7 of 10 stamps</p>
          </div>

          <div className="absolute -bottom-5 left-8 flex items-center gap-2 rounded-full bg-lime px-4 py-2 text-sm font-extrabold text-ink shadow-lg">
            <Sparkles className="size-4" aria-hidden="true" />
            Level up: Regular
          </div>
        </div>
      </div>
    </section>
  )
}
