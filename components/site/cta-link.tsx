import Link from 'next/link'
import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'ghost' | 'lime' | 'light'

const variants: Record<Variant, string> = {
  primary: 'bg-brand text-white hover:bg-brand-bright shadow-[0_8px_24px_-8px_rgba(60,30,133,0.6)]',
  secondary: 'bg-white text-ink ring-1 ring-ink/10 hover:ring-ink/25',
  ghost: 'text-ink hover:bg-ink/5',
  lime: 'bg-lime text-ink hover:brightness-95',
  light: 'bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/15',
}

export const ctaClasses = (variant: Variant = 'primary', size: 'md' | 'lg' = 'md') =>
  cn(
    'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 active:scale-[0.98]',
    size === 'lg' ? 'h-12 px-6 text-base' : 'h-10 px-4 text-sm',
    variants[variant],
  )

export function CtaLink({
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ComponentProps<typeof Link> & { variant?: Variant; size?: 'md' | 'lg' }) {
  return <Link className={cn(ctaClasses(variant, size), className)} {...props} />
}
