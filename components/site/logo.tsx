import Link from 'next/link'
import { cn } from '@/lib/utils'

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={cn('size-8', className)}>
      <rect width="32" height="32" rx="10" fill="var(--brand)" />
      <path
        d="M21.5 11.2A7 7 0 1 0 23 16h-6.5"
        fill="none"
        stroke="#fff"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="23" cy="9" r="2.4" fill="var(--lime)" />
    </svg>
  )
}

export function Logo({ className, inverted = false }: { className?: string; inverted?: boolean }) {
  return (
    <Link
      href="/"
      className={cn('inline-flex items-center gap-2 rounded-lg', className)}
      aria-label="Gimme home"
    >
      <LogoMark />
      <span
        className={cn(
          'font-display text-xl font-bold tracking-tight',
          inverted ? 'text-white' : 'text-ink',
        )}
      >
        gimme
      </span>
    </Link>
  )
}
