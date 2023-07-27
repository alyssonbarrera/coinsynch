import { Highlight } from '../Highlight'

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
    <Highlight.Root>
      <Highlight.SubHeading
        text={subheading}
        className="mb-1 text-sm leading-4 md:text-base"
      />
      <Highlight.Heading
        text={heading}
        className="mb-2 text-xl leading-8 md:text-2xl md:leading-8"
      />
      <Highlight.Description
        text={description}
        className="max-w-[14.5rem] text-sm leading-6"
      />
    </Highlight.Root>
  )
}
