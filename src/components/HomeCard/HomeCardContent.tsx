export type HomeCardContentProps = {
  heading: string
  subheading: string
  description: string
}

export function HomeCardContent({
  heading,
  subheading,
  description,
}: HomeCardContentProps) {
  return (
    <div>
      <p className="mb-1 text-label font-bold leading-label text-primary-500 md:text-base md:leading-6">
        {subheading}
      </p>
      <p className="mb-2 text-h5 font-bold leading-8 text-color-base md:text-h4 md:leading-h4">
        {heading}
      </p>
      <p className="max-w-[14.5rem] break-words text-label leading-6 text-color-base">
        {description}
      </p>
    </div>
  )
}
