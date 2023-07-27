import { tv } from 'tailwind-variants'
import { ScaleLoader } from 'react-spinners'
import { ComponentProps, ReactNode } from 'react'

const button = tv({
  base: 'flex h-12 w-full items-center justify-center gap-[0.625rem] rounded-[2rem] px-4 transition-colors',
  variants: {
    color: {
      primary: 'bg-primary-500 hover:bg-primary-600',
      secondary: 'bg-secondary-500 hover:bg-secondary-600',
      tertiary: 'bg-tertiary-700 hover:bg-tertiary-800',
      quaternary: 'bg-quaternary-500 hover:bg-quaternary-600',
      transparent: 'text-color-base bg-transparent hover:bg-gray-50',
    },
    isLoading: {
      true: 'cursor-not-allowed hover:bg-opacity-[100%]',
      false: 'cursor-pointer',
    },
  },
  defaultVariants: {
    color: 'primary',
    isLoading: false,
  },
})

export type ButtonRootProps = ComponentProps<'button'> & {
  children: ReactNode
  isLoading?: boolean
  variant?: keyof typeof button.variants.color
}

export function ButtonRoot({
  children,
  variant,
  isLoading,
  className,
  ...props
}: ButtonRootProps) {
  return (
    <button
      {...props}
      className={button({
        color: variant,
        isLoading,
        className,
      })}
      disabled={isLoading}
    >
      {isLoading ? <ScaleLoader height={12} width={2} /> : children}
    </button>
  )
}
