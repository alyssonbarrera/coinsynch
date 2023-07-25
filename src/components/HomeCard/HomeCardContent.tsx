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
      <Highlight.SubHeading text={subheading} className="mb-1" />
      <Highlight.Heading text={heading} className="mb-2" />
      <Highlight.Description text={description} className="max-w-[14.5rem]" />
    </Highlight.Root>
  )
}
