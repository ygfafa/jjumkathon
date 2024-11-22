import { cn } from '@/lib/utils'

export const PageBody = ({
  className,
  ...props
}: React.ComponentProps<'div'>) => {
  return <div className={cn('px-20', className)} {...props} />
}
