import type { Metadata } from 'next'
import { FinalCta } from '@/components/home/sections'
import { FaqList, faqJsonLd } from '@/components/site/faq-list'
import { Breadcrumbs, Eyebrow, JsonLd } from '@/components/site/primitives'
import { faqs } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'FAQs',
  description: 'Straight answers about Gimme storefronts, ordering, payments, loyalty and AI.',
  alternates: { canonical: '/faq' },
}

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <div className="mx-auto max-w-3xl px-5 py-10 lg:py-14">
        <Breadcrumbs items={[{ label: 'FAQs', href: '/faq' }]} />
        <Eyebrow className="mt-10">FAQs</Eyebrow>
        <h1 className="mt-4 font-display text-5xl font-bold text-ink">Questions, answered</h1>
        <div className="mt-10">
          <FaqList items={faqs} />
        </div>
      </div>
      <FinalCta />
    </>
  )
}
