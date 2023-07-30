import { ComponentProps } from 'react'

type ChevronDownIconProps = ComponentProps<'svg'>

export function ChevronDownIcon({ ...props }: ChevronDownIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || '16'}
      height={props.height || '16'}
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        fill={props.fill || '#FFCD82'}
        fillRule="evenodd"
        d="M.37 3.706a1.256 1.256 0 011.786 0L8 9.594l5.844-5.888a1.256 1.256 0 011.786 0 1.28 1.28 0 010 1.8l-6.737 6.788a1.256 1.256 0 01-1.786 0L.37 5.506a1.28 1.28 0 010-1.8z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}
