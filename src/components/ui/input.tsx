import * as React from 'react'
import { cn } from '@/lib/utils'

export function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return <input type={type} className={cn('flex h-10 w-full rounded-lg border border-input bg-card px-3 py-2 text-sm outline-none transition-shadow placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20 disabled:opacity-50', className)} {...props} />
}
