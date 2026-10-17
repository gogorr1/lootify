import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowUpRight } from 'lucide-react'
import { FinalCta } from '@/components/home/sections'
import { CtaLink } from '@/components/site/cta-link'
import { FaqList, faqJsonLd } from '@/components/site/faq-list'
import { Breadcrumbs, Eyebrow, JsonLd, LiveBadge, SoonBadge } from '@/components/site/primitives'
import { features, getFeature, getIndustry } from '@/lib/site-data'

export function generateStaticParams() {
  return features.map((f) => ({ slug: f.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const f = getFeature(slug)
  if (!f) return {}
  return { title: f.name, description: f.summary, alternates: { canonical: `/features/${f.slug}` } }
}

export default async function FeaturePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const f = getFeature(slug)
  if (!f) notFound()

  return (
    <>
      <JsonLd data={faqJsonLd(f.faqs)} />
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-5 pb-16 pt-10 lg:px-8 lg:pb-24">
          <Breadcrumbs items={[{ label: 'Platform', href: '/platform' }, { label: f.name, href: `/features/${f.slug}` }]} />
          <div className="mt-10 max-w-3xl">
            <div className="flex items-center gap-3">
              <Eyebrow>{f.name}</Eyebrow>
              {f.status === 'soon' ? <SoonBadge /> : <LiveBadge />}
            </div>
            <h1 className="mt-4 text-balance font-display text-5xl font-bold leading-[1] text-ink md:text-6xl">{f.tagline}</h1>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">{f.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaLink href="/demo" size="lg">Book a demo</CtaLink>
              <CtaLink href="/explore" size="lg" variant="secondary">See the customer side</CtaLink>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-16 lg:grid-cols-2 lg:px-8 lg:py-20">
        <div className="rounded-[2rem] bg-white p-7 ring-1 ring-ink/5">
          <h2 className="font-display text-xl font-bold text-ink">Who it&apos;s for</h2>
          <p className="mt-2 leading-relaxed text-muted-foreground">{f.forWho}</p>
        </div>
        <div className="rounded-[2rem] bg-lavender p-7">
          <h2 className="font-display text-xl font-bold text-ink">Why it matters</h2>
          <p className="mt-2 leading-relaxed text-ink/75">{f.why}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 lg:px-8 lg:pb-20">
        <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">How it works</h2>
        <ol className="mt-8 grid gap-4 md:grid-cols-3">
          {f.how.map((step, i) => (
            <li key={step.title} className="rounded-[2rem] bg-white p-6 ring-1 ring-ink/5">
              <span className="grid size-10 place-items-center rounded-full bg-ink font-display font-bold text-lime">{i + 1}</span>
              <h3 className="mt-4 font-display text-lg font-bold text-ink">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-20 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="font-display text-2xl font-bold text-ink">Works with</h2>
          <ul className="mt-5 flex flex-col gap-2">
            {f.connects.map(getFeature).filter(Boolean).map((c) => (
              <li key={c!.slug}>
                <Link href={`/features/${c!.slug}`} className="group flex items-center justify-between rounded-2xl bg-white px-5 py-4 font-bold text-ink ring-1 ring-ink/5 hover:ring-brand-bright/40">
                  {c!.name}
                  <ArrowUpRight className="size-4 opacity-40 group-hover:opacity-100" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
          <h2 className="mt-10 font-display text-2xl font-bold text-ink">Popular with</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {f.industries.map(getIndustry).filter(Boolean).map((ind) => (
              <li key={ind!.slug}>
                <Link href={`/industries/${ind!.slug}`} className="inline-block rounded-full bg-ink px-4 py-2 text-sm font-bold text-white hover:bg-brand">
                  {ind!.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-2xl font-bold text-ink">FAQ</h2>
          <div className="mt-5">
            <FaqList items={f.faqs} />
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  )
}
