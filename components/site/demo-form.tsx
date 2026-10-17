'use client'

import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { industries } from '@/lib/site-data'

const field =
  'h-12 w-full rounded-2xl border border-ink/10 bg-white px-4 text-base text-ink outline-none focus:border-brand-bright focus:ring-4 focus:ring-brand-bright/15'

export function DemoForm() {
  const [sent, setSent] = useState(false)

  if (sent) {
    return (
      <div role="status" className="flex flex-col items-center justify-center rounded-[2rem] bg-lime p-10 text-center">
        <CheckCircle2 className="size-12 text-ink" aria-hidden="true" />
        <p className="mt-4 font-display text-2xl font-bold text-ink">Thanks — request noted</p>
        <p className="mt-2 max-w-sm text-ink/70">
          This preview doesn&apos;t send data yet. Connect a backend or email service to receive demo requests.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        if (e.currentTarget.checkValidity()) setSent(true)
      }}
      className="flex flex-col gap-4 rounded-[2rem] bg-white p-6 ring-1 ring-ink/5 md:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-sm font-bold text-ink">
          Name
          <input name="name" required autoComplete="name" className={field} />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-bold text-ink">
          Work email
          <input name="email" type="email" required autoComplete="email" className={field} />
        </label>
      </div>
      <label className="flex flex-col gap-1.5 text-sm font-bold text-ink">
        Business name
        <input name="business" required autoComplete="organization" className={field} />
      </label>
      <label className="flex flex-col gap-1.5 text-sm font-bold text-ink">
        Industry
        <select name="industry" required defaultValue="" className={field}>
          <option value="" disabled>Choose one</option>
          {industries.map((i) => (
            <option key={i.slug} value={i.slug}>{i.name}</option>
          ))}
          <option value="other">Other</option>
        </select>
      </label>
      <label className="flex flex-col gap-1.5 text-sm font-bold text-ink">
        What would you like to see? <span className="font-normal text-muted-foreground">(optional)</span>
        <textarea name="message" rows={4} className={`${field} h-auto py-3`} />
      </label>
      <button type="submit" className="mt-2 h-12 rounded-full bg-brand font-bold text-white transition-colors hover:bg-brand-bright">
        Request demo
      </button>
    </form>
  )
}
