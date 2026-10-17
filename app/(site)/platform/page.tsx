import type { Metadata } from 'next'
import { FeatureGrid, FinalCta, HowItWorks, IndustriesRow } from '@/components/home/sections'
import { Breadcrumbs, Eyebrow } from '@/components/site/primitives'

export const metadata: Metadata = {
  title: 'Platform',
  description: 'Storefronts, ordering, bookings, operations, catering, loyalty and AI — one connected platform for local business.',
  alternates: { canonical: '/platform' },
}

export default function PlatformPage() {
  return (
    <>
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-5 pb-6 pt-10 lg:px-8">
          <Breadcrumbs items={[{ label: 'Platform', href: '/platform' }]} />
          <Eyebrow className="mt-10">Platform overview</Eyebrow>
          <h1 className="mt-4 max-w-3xl text-balance font-display text-5xl font-bold leading-[1] text-ink md:text-6xl">
            One system, from first order to loyal regular.
          </h1>
        </div>
      </section>
      <FeatureGrid />
      <HowItWorks />
      <IndustriesRow />
      <FinalCta />
    </>
  )
}
