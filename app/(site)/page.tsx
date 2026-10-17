import { Hero } from '@/components/home/hero'
import { ExploreTeaser, FeatureGrid, FinalCta, HomeFaq, HowItWorks, IndustriesRow } from '@/components/home/sections'
import { faqJsonLd } from '@/components/site/faq-list'
import { JsonLd } from '@/components/site/primitives'
import { faqs, SITE_URL } from '@/lib/site-data'

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Gimme',
          url: SITE_URL,
          description: 'All-in-one platform for local businesses: storefronts, ordering, bookings and loyalty.',
        }}
      />
      <JsonLd data={faqJsonLd(faqs.slice(0, 5))} />
      <Hero />
      <FeatureGrid />
      <HowItWorks />
      <IndustriesRow />
      <ExploreTeaser />
      <HomeFaq />
      <FinalCta />
    </>
  )
}
