import { cn } from '@/lib/utils'

const Page = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return <main className={cn('flex flex-col h-full', className)} {...props} />
}

export default Page
