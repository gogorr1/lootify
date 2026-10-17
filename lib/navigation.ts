import { features, industries } from './site-data'

export type NavLink = { label: string; href: string; description?: string; badge?: string }
export type NavGroup = { label: string; links: NavLink[] }

export const navGroups: NavGroup[] = [
  {
    label: 'Platform',
    links: [
      { label: 'Overview', href: '/platform', description: 'How everything fits together' },
      ...features.map((f) => ({
        label: f.name,
        href: `/features/${f.slug}`,
        description: f.tagline,
        badge: f.status === 'soon' ? 'Coming soon' : undefined,
      })),
    ],
  },
  {
    label: 'Industries',
    links: industries.map((i) => ({
      label: i.name,
      href: `/industries/${i.slug}`,
      description: i.short,
    })),
  },
  {
    label: 'Resources',
    links: [
      { label: 'Blog', href: '/blog', description: 'Guides for running a modern business' },
      { label: 'FAQs', href: '/faq', description: 'Straight answers to common questions' },
      { label: 'Explore stores', href: '/explore', description: 'See Gimme from the customer side' },
    ],
  },
]
