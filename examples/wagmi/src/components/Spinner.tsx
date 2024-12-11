import { cn } from '@/lib/utils'
import type { StatusT } from './LoadingIndicator'

export function Spinner({
  status,
  className,
}: { status: StatusT; className?: string }) {
  if (status === 'pending') {
    return (
      <span
        className={cn(
          'w-8 h-8 border-[2px] border-border border-l-primary bg-transparent rounded-full animate-spin',
          className,
        )}
      />
    )
  }
}
