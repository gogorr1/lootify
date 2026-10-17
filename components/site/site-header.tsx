'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useId, useRef, useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { navGroups } from '@/lib/navigation'
import { cn } from '@/lib/utils'
import { CtaLink } from './cta-link'
import { Logo } from './logo'

export function SiteHeader() {
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const pathname = usePathname()
  const navRef = useRef<HTMLElement>(null)
  const baseId = useId()

  useEffect(() => {
    setOpenMenu(null)
    setDrawerOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!openMenu && !drawerOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenMenu(null)
        setDrawerOpen(false)
      }
    }
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenMenu(null)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onClick)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onClick)
    }
  }, [openMenu, drawerOpen])

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
  }, [drawerOpen])

  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-cream/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 lg:px-8">
        <Logo />

        <nav ref={navRef} aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navGroups.map((group) => {
              const id = `${baseId}-${group.label}`
              const isOpen = openMenu === group.label
              return (
                <li key={group.label} className="relative">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={id}
                    onClick={() => setOpenMenu(isOpen ? null : group.label)}
                    className={cn(
                      'inline-flex h-9 items-center gap-1 rounded-full px-3.5 text-sm font-semibold text-ink/80 transition-colors hover:bg-ink/5 hover:text-ink',
                      isOpen && 'bg-ink/5 text-ink',
                    )}
                  >
                    {group.label}
                    <ChevronDown className={cn('size-3.5 transition-transform', isOpen && 'rotate-180')} />
                  </button>
                  {isOpen && (
                    <div
                      id={id}
                      className="absolute left-1/2 top-full mt-2 w-[min(640px,90vw)] -translate-x-1/2 animate-rise rounded-3xl border border-ink/5 bg-white p-3 shadow-[0_24px_64px_-16px_rgba(20,17,31,0.25)]"
                    >
                      <ul className="grid grid-cols-2 gap-1">
                        {group.links.map((link) => (
                          <li key={link.href}>
                            <Link
                              href={link.href}
                              className="flex flex-col rounded-2xl p-3 transition-colors hover:bg-lavender"
                            >
                              <span className="flex items-center gap-2 text-sm font-bold text-ink">
                                {link.label}
                                {link.badge && (
                                  <span className="rounded-full bg-lime px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-ink">
                                    {link.badge}
                                  </span>
                                )}
                              </span>
                              {link.description && (
                                <span className="mt-0.5 text-[13px] leading-snug text-muted-foreground">
                                  {link.description}
                                </span>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <CtaLink href="/explore" variant="ghost">
            Explore Gimme
          </CtaLink>
          <CtaLink href="/demo">Book a demo</CtaLink>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-full text-ink hover:bg-ink/5 lg:hidden"
          aria-expanded={drawerOpen}
          aria-controls={`${baseId}-drawer`}
          onClick={() => setDrawerOpen((v) => !v)}
        >
          {drawerOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          <span className="sr-only">{drawerOpen ? 'Close menu' : 'Open menu'}</span>
        </button>
      </div>

      {drawerOpen && (
        <div
          id={`${baseId}-drawer`}
          className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-cream px-5 pb-32 pt-4 lg:hidden"
        >
          <nav aria-label="Mobile">
            {navGroups.map((group) => (
              <details key={group.label} className="group border-b border-ink/10 py-2" open={group.label === 'Platform'}>
                <summary className="flex cursor-pointer list-none items-center justify-between py-3 font-display text-xl font-bold text-ink">
                  {group.label}
                  <ChevronDown className="size-5 transition-transform group-open:rotate-180" />
                </summary>
                <ul className="flex flex-col pb-2">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="flex items-center gap-2 py-2.5 text-base font-semibold text-ink/80">
                        {link.label}
                        {link.badge && (
                          <span className="rounded-full bg-lime px-2 py-0.5 text-[10px] font-bold uppercase text-ink">
                            {link.badge}
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </nav>
          <div className="fixed inset-x-0 bottom-0 flex gap-3 border-t border-ink/10 bg-cream p-4">
            <CtaLink href="/explore" variant="secondary" className="flex-1">
              Explore Gimme
            </CtaLink>
            <CtaLink href="/demo" className="flex-1">
              Book a demo
            </CtaLink>
          </div>
        </div>
      )}
    </header>
  )
}
