type PriceTrackerAvatarWrapperProps = Omit<
  React.ComponentProps<'div'>,
  'className'
>
export const PriceTrackerAvatarWrapper = (
  props: PriceTrackerAvatarWrapperProps
) => (
  <div
    className="w-[40px] h-[40px] bg-gray-100 flex-shrink-0 rounded-full flex justify-center items-center"
    {...props}
  />
)

type PriceTrackerRateWrapperProps = Omit<
  React.ComponentProps<'div'>,
  'className'
> & { up: boolean }
export const PriceTrackerRateWrapper = ({
  up,
  ...props
}: PriceTrackerRateWrapperProps) => (
  <span className={`${up ? 'text-red-600' : 'text-blue-600'}`} {...props} />
)

type PriceTrackerContentWrapperProps = Omit<
  React.ComponentProps<'div'>,
  'className'
>
export const PriceTrackerContentWrapper = (
  props: PriceTrackerContentWrapperProps
) => <div className="flex flex-col gap-y-32" {...props} />
