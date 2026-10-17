import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Check, Sparkles, X } from 'lucide-react'
import { FinalCta } from '@/components/home/sections'
import { CtaLink } from '@/components/site/cta-link'
import { FaqList, faqJsonLd } from '@/components/site/faq-list'
import { Breadcrumbs, Eyebrow, JsonLd, SoonBadge } from '@/components/site/primitives'
import { getFeature, getIndustry, industries } from '@/lib/site-data'

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const ind = getIndustry(slug)
  if (!ind) return {}
  return { title: `Gimme for ${ind.name}`, description: ind.intro, alternates: { canonical: `/industries/${ind.slug}` } }
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const ind = getIndustry(slug)
  if (!ind) notFound()

  return (
    <>
      <JsonLd data={faqJsonLd(ind.faqs)} />
      <section className="bg-cream">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-10 lg:grid-cols-2 lg:px-8 lg:pb-24">
          <div>
            <Breadcrumbs items={[{ label: ind.name, href: `/industries/${ind.slug}` }]} />
            <Eyebrow className="mt-10">Gimme for {ind.name}</Eyebrow>
            <h1 className="mt-4 text-balance font-display text-5xl font-bold leading-[1] text-ink md:text-6xl">{ind.headline}</h1>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">{ind.intro}</p>
            <CtaLink href="/demo" size="lg" className="mt-8">Book a demo</CtaLink>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] shadow-xl">
            <Image src={ind.image || '/placeholder.svg'} alt={`${ind.name} using Gimme`} fill priority sizes="(min-width: 1024px) 45vw, 90vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-16 lg:grid-cols-2 lg:px-8 lg:py-20">
        <div className="rounded-[2rem] bg-white p-7 ring-1 ring-ink/5">
          <h2 className="font-display text-2xl font-bold text-ink">Sound familiar?</h2>
          <ul className="mt-5 flex flex-col gap-3">
            {ind.challenges.map((c) => (
              <li key={c} className="flex gap-3 text-ink/80">
                <X className="mt-0.5 size-5 shrink-0 text-red-500" aria-hidden="true" />
                {c}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-[2rem] bg-ink p-7 text-white">
          <h2 className="font-display text-2xl font-bold">With Gimme</h2>
          <ul className="mt-5 flex flex-col gap-3">
            {ind.outcomes.map((o) => (
              <li key={o} className="flex gap-3 text-white/85">
                <Check className="mt-0.5 size-5 shrink-0 text-lime" aria-hidden="true" />
                {o}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 lg:px-8">
        <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">The tools you&apos;ll use</h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ind.featureSlugs.map(getFeature).filter(Boolean).map((f) => (
            <li key={f!.slug}>
              <Link href={`/features/${f!.slug}`} className="flex h-full flex-col gap-2 rounded-[2rem] bg-white p-6 ring-1 ring-ink/5 transition-transform hover:-translate-y-1">
                <span className="font-display text-lg font-bold text-ink">{f!.name}</span>
                <span className="text-sm text-muted-foreground">{f!.tagline}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 lg:px-8">
        <div className="rounded-[2rem] bg-lavender p-7 md:p-10">
          <div className="flex items-center gap-3">
            <Sparkles className="size-5 text-brand" aria-hidden="true" />
            <h2 className="font-display text-2xl font-bold text-ink">Where Gimme AI will help</h2>
            <SoonBadge />
          </div>
          <ul className="mt-5 grid gap-3 md:grid-cols-2">
            {ind.aiUseCases.map((u) => (
              <li key={u} className="rounded-2xl bg-white p-4 text-sm font-semibold text-ink">{u}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-20 lg:px-8">
        <h2 className="font-display text-3xl font-bold text-ink">FAQ</h2>
        <div className="mt-6"><FaqList items={ind.faqs} /></div>
      </section>
      <FinalCta />
    </>
  )
}
