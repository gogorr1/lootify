import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Breadcrumbs, Eyebrow } from '@/components/site/primitives'
import { formatDate, posts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Practical guides on ordering, loyalty, catering and AI for local businesses.',
  alternates: { canonical: '/blog' },
}

export default function BlogPage() {
  const [lead, ...rest] = posts
  return (
    <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8 lg:py-14">
      <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }]} />
      <Eyebrow className="mt-10">Blog</Eyebrow>
      <h1 className="mt-4 font-display text-5xl font-bold text-ink md:text-6xl">Running a modern local business</h1>

      <Link href={`/blog/${lead.slug}`} className="group mt-12 block rounded-[2.5rem] bg-brand p-8 text-white md:p-12">
        <p className="text-sm font-bold text-lime">{lead.category}</p>
        <h2 className="mt-3 max-w-3xl text-balance font-display text-3xl font-bold md:text-5xl">{lead.title}</h2>
        <p className="mt-4 max-w-2xl text-white/75">{lead.description}</p>
        <p className="mt-6 text-sm text-white/60">
          {formatDate(lead.date)} · {lead.readMinutes} min read
        </p>
      </Link>

      <ul className="mt-6 grid gap-4 md:grid-cols-3">
        {rest.map((p) => (
          <li key={p.slug}>
            <Link href={`/blog/${p.slug}`} className="group flex h-full flex-col rounded-[2rem] bg-white p-6 ring-1 ring-ink/5 transition-transform hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-bright">{p.category}</span>
                <ArrowUpRight className="size-4 opacity-40 group-hover:opacity-100" aria-hidden="true" />
              </div>
              <h2 className="mt-3 font-display text-xl font-bold text-ink">{p.title}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              <p className="mt-5 text-xs text-muted-foreground">
                {formatDate(p.date)} · {p.readMinutes} min read
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
