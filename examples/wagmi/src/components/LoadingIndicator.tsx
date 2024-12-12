import { useState } from 'react'
import { useInterval } from 'usehooks-ts'
import { cn } from '../lib/utils'

export const Status = {
  PENDING: 'pending',
  SUCCESS: 'success',
  IDLE: 'idle',
  ERROR: 'error',
} as const

export type StatusT = (typeof Status)[keyof typeof Status]

export type LoadingIndicatorProps = {
  status: StatusT
  className?: string
}

export function LoadingIndicator({
  status = Status.IDLE,
  className,
}: LoadingIndicatorProps) {
  const [position, setPosition] = useState<string>('translateX(-90%)')
  useInterval(
    () => {
      if (position === 'translateX(90%)') {
        setPosition('translateX(-90%)')
      } else {
        setPosition('translateX(90%)')
      }
    },
    status === Status.PENDING ? 1000 : null,
  )

  return (
    <div
      className={cn(
        'pointer-events-none relative h-2 w-full overflow-hidden rounded-full bg-input',
        className,
      )}
    >
      <span
        style={{
          transform: status === Status.PENDING ? position : 'translateX(0)',
        }}
        className={cn('absolute h-full w-full rounded-full transition', {
          'bg-foreground duration-1000': status === Status.PENDING,
          'bg-accent duration-500': status === Status.SUCCESS,
          'bg-destructive duration-500': status === Status.ERROR,
          'opacity-0': status === Status.IDLE,
        })}
      />
    </div>
  )
}
