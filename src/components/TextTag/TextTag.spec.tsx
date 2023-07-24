import { render, screen } from '@testing-library/react'
import { TextTag } from './TextTag'

describe('TextTag Component', () => {
  it('should render the TextTag component', () => {
    render(
      <TextTag.Root>
        <TextTag.Content>TextTag</TextTag.Content>
      </TextTag.Root>,
    )

    const textTag = screen.getByText('TextTag')

    expect(textTag).toBeInTheDocument()
  })
})
