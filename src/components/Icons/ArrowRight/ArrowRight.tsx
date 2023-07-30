import { ComponentProps } from 'react'

type ArrowRightProps = ComponentProps<'svg'>

export function ArrowRight({ ...props }: ArrowRightProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      fill="none"
      viewBox="0 0 12 12"
    >
      <path
        fill={props.fill || '#FFF'}
        d="M7.138 1.67a.58.58 0 01.821 0l3.87 3.871a.578.578 0 010 .821l-3.87 3.871a.58.58 0 01-.821-.821l2.88-2.88H.58a.58.58 0 010-1.161h9.437l-2.88-2.88a.58.58 0 010-.82z"
      ></path>
    </svg>
  )
}
