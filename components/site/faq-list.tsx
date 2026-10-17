import Link from 'next/link'
import { Plus } from 'lucide-react'

export function FaqList({ items }: { items: { q: string; a: string; href?: string }[] }) {
  return (
    <div className="divide-y divide-ink/10 rounded-3xl border border-ink/10 bg-white">
      {items.map((item) => (
        <details key={item.q} className="group px-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left font-display text-lg font-semibold text-ink [&::-webkit-details-marker]:hidden">
            {item.q}
            <span className="grid size-8 shrink-0 place-items-center rounded-full bg-lavender text-brand transition-transform duration-300 group-open:rotate-45">
              <Plus className="size-4" aria-hidden="true" />
            </span>
          </summary>
          <div className="pb-6 pr-12 text-pretty leading-relaxed text-muted-foreground">
            <p>{item.a}</p>
            {item.href && (
              <Link href={item.href} className="mt-2 inline-block font-semibold text-brand underline-offset-4 hover:underline">
                Learn more
              </Link>
            )}
          </div>
        </details>
      ))}
    </div>
  )
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a },
    })),
  }
}
