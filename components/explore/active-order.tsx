import { Check, ChefHat } from 'lucide-react'
import { activeOrder } from '@/lib/stores'
import { cn } from '@/lib/utils'

export function ActiveOrder() {
  const o = activeOrder
  return (
    <section aria-labelledby="order-heading" className="rounded-[2rem] border border-ink/5 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="relative grid size-11 place-items-center rounded-2xl bg-orange-100 text-orange-600">
          <ChefHat className="size-5" aria-hidden="true" />
          <span className="absolute -right-0.5 -top-0.5 size-3 animate-pulse-dot rounded-full bg-orange-500 ring-2 ring-white" />
        </span>
        <div className="min-w-0 flex-1">
          <h2 id="order-heading" className="font-display text-base font-bold text-ink">
            Order #{o.id} is being prepared
          </h2>
          <p className="text-sm text-muted-foreground">
            {o.storeName} · ready in about <span className="font-bold text-ink">{o.etaMinutes} min</span>
          </p>
        </div>
      </div>
      <ol className="mt-5 grid grid-cols-4 gap-2">
        {o.steps.map((step, i) => {
          const done = i < o.current
          const current = i === o.current
          return (
            <li key={step} className="flex flex-col gap-2" aria-current={current ? 'step' : undefined}>
              <div className="h-1.5 overflow-hidden rounded-full bg-ink/10">
                <div
                  className={cn(
                    'h-full rounded-full',
                    done && 'w-full bg-brand-bright',
                    current && 'w-1/2 animate-pulse bg-orange-500',
                  )}
                />
              </div>
              <span
                className={cn(
                  'flex items-center gap-1 text-[11px] font-bold',
                  done || current ? 'text-ink' : 'text-muted-foreground',
                )}
              >
                {done && <Check className="size-3 text-brand-bright" aria-hidden="true" />}
                {step}
              </span>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
