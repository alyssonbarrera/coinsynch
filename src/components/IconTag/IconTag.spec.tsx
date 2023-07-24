import { render, screen } from '@testing-library/react'
import { IconTag } from './IconTag'

describe('IconTag Component', () => {
  it('should render the IconTag component', () => {
    const iconUrl =
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'

    render(
      <IconTag.Root>
        <IconTag.Content src={iconUrl} alt="bitcoin icon" />
      </IconTag.Root>,
    )

    const iconTag = screen.getByRole('img')

    expect(iconTag).toBeInTheDocument()
    expect(iconTag).toHaveAttribute('src', iconUrl)
    expect(iconTag).toHaveAttribute('alt', 'bitcoin icon')
  })
})
