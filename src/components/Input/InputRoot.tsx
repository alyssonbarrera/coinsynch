import { tv } from 'tailwind-variants'
import { ComponentProps, ElementType } from 'react'

const input = tv({
  base: 'relative max-h-12 w-full md:text-base text-sm leading-5 max-w-sm rounded-md p-4 outline-none selection:bg-secondary-300 placeholder:md:text-base placeholder:text-sm placeholder:leading-5 placeholder:text-secondary-400 placeholder:text-opacity-50',
  variants: {
    type: {
      primary: 'bg-white shadow-input-shadow',
      secondary: 'border border-secondary-300 pl-10',
    },
    error: {
      true: 'text-quaternary-500 outline-2 -outline-offset-2 outline-quaternary-500',
      false: '',
    },
  },
  defaultVariants: {
    type: 'primary',
  },
})

type InputRootProps = ComponentProps<'input'> & {
  isInvalid?: boolean
  icon?: ElementType
  variant?: keyof typeof input.variants.type
}

export function InputRoot({
  isInvalid,
  icon: Icon,
  variant,
  ...props
}: InputRootProps) {
  return (
    <div className="relative">
      {Icon && (
        <div className="absolute top-1/2 z-10 flex -translate-y-1/2 items-center pl-4">
          <Icon />
        </div>
      )}
      <input
        {...props}
        className={input({
          type: Icon ? 'secondary' : variant,
          error: isInvalid,
          className: props.className,
        })}
      />
    </div>
  )
}
