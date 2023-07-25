import { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export type HomeCardRootProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode
}

export function HomeCardRoot({ children, ...props }: HomeCardRootProps) {
  return (
    <article
      {...props}
      className={twMerge(
        'home-carddd inline-flex h-[16.25rem] w-[12.5rem] flex-col items-start gap-4 rounded-md bg-white p-6 shadow-home-card md:min-h-[16.75rem] md:min-w-[17.5rem]',
        props.className,
      )}
    >
      {children}
    </article>
  )
}
