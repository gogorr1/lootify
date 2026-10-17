import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { FinalCta } from '@/components/home/sections'
import { Breadcrumbs, JsonLd } from '@/components/site/primitives'
import { formatDate, getPost, posts } from '@/lib/blog'
import { SITE_URL } from '@/lib/site-data'

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const p = getPost(slug)
  if (!p) return {}
  return {
    title: p.title,
    description: p.description,
    alternates: { canonical: `/blog/${p.slug}` },
    openGraph: { type: 'article', title: p.title, description: p.description, publishedTime: p.date },
  }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const p = getPost(slug)
  if (!p) notFound()

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: p.title,
          description: p.description,
          datePublished: p.date,
          author: { '@type': 'Organization', name: p.author.name },
          mainEntityOfPage: `${SITE_URL}/blog/${p.slug}`,
        }}
      />
      <article className="mx-auto max-w-3xl px-5 py-10 lg:py-14">
        <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: p.title, href: `/blog/${p.slug}` }]} />
        <p className="mt-10 text-sm font-bold uppercase tracking-wider text-brand-bright">{p.category}</p>
        <h1 className="mt-3 text-balance font-display text-4xl font-bold leading-[1.05] text-ink md:text-5xl">{p.title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{p.description}</p>
        <p className="mt-6 text-sm text-muted-foreground">
          {p.author.name} · <time dateTime={p.date}>{formatDate(p.date)}</time> · {p.readMinutes} min read
        </p>
        <div className="mt-10 flex flex-col gap-10">
          {p.sections.map((s) => (
            <section key={s.heading}>
              <h2 className="font-display text-2xl font-bold text-ink">{s.heading}</h2>
              {s.paragraphs.map((para) => (
                <p key={para.slice(0, 32)} className="mt-4 leading-relaxed text-ink/80">{para}</p>
              ))}
              {s.bullets && (
                <ul className="mt-4 flex list-disc flex-col gap-2 pl-5 text-ink/80 marker:text-brand-bright">
                  {s.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              )}
            </section>
          ))}
        </div>
        {p.related.length > 0 && (
          <aside className="mt-12 rounded-[2rem] bg-lavender p-6">
            <h2 className="font-display text-lg font-bold text-ink">Related on Gimme</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {p.related.map((r) => (
                <li key={r.href}>
                  <Link href={r.href} className="inline-block rounded-full bg-white px-4 py-2 text-sm font-bold text-ink hover:bg-ink hover:text-white">
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        )}
      </article>
      <FinalCta />
    </>
  )
}
