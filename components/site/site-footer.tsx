import Link from 'next/link'
import { navGroups } from '@/lib/navigation'
import { CtaLink } from './cta-link'
import { Logo } from './logo'

export function SiteFooter() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="flex flex-col gap-8 rounded-[2rem] bg-brand p-8 md:flex-row md:items-center md:justify-between md:p-12">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-bold md:text-4xl">Spend your day on the work you love.</h2>
            <p className="mt-3 text-white/75">
              We&apos;ll look at how your business runs today and show you what Gimme can take off your plate.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <CtaLink href="/demo" variant="lime" size="lg">
              Book a demo
            </CtaLink>
            <CtaLink href="/platform" variant="light" size="lg">
              Explore the platform
            </CtaLink>
          </div>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="flex flex-col gap-4">
            <Logo inverted />
            <p className="max-w-xs text-sm leading-relaxed text-white/60">
              The intelligent platform for modern businesses. Storefronts, orders, loyalty and operations in one place.
            </p>
          </div>
          {navGroups.map((group) => (
            <div key={group.label}>
              <h3 className="font-sans text-xs font-bold uppercase tracking-[0.14em] text-white/45">{group.label}</h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-white/75 transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/45 md:flex-row md:justify-between">
          <p>{`© ${new Date().getFullYear()} Gimme. All rights reserved.`}</p>
          <p>Features marked “Coming soon” are in development and not yet generally available.</p>
        </div>
      </div>
    </footer>
  )
}
