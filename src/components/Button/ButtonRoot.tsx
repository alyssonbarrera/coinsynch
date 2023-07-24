import { twMerge } from 'tailwind-merge'
import { ScaleLoader } from 'react-spinners'
import { ButtonHTMLAttributes, ReactNode } from 'react'

export type ButtonRootProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  isLoading?: boolean
}

export function ButtonRoot({ children, isLoading, ...props }: ButtonRootProps) {
  return (
    <button
      {...props}
      className={twMerge(
        'flex h-12 w-full items-center justify-center gap-[0.625rem] rounded-[2rem] bg-primary-500 px-4',
        isLoading
          ? 'cursor-not-allowed bg-opacity-70'
          : 'cursor-pointer transition-colors hover:bg-primary-600',
        props.className,
      )}
      disabled={isLoading}
    >
      {isLoading ? (
        <ScaleLoader color="#FFF" height={12} width={2} />
      ) : (
        children
      )}
    </button>
  )
}
