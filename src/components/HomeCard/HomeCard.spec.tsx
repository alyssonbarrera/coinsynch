import { render, screen } from '@testing-library/react'
import { HomeCard } from './HomeCard'

describe('HomeCard Component', () => {
  it('renders the HomeCard component', () => {
    const iconUrl =
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'

    render(
      <HomeCard.Root>
        <HomeCard.Icon src={iconUrl} alt="icon" />
        <HomeCard.Content
          subheading="Subheading"
          heading="Heading"
          description="Description"
        />
      </HomeCard.Root>,
    )

    const homeCard = screen.getByRole('article')
    const iconTag = screen.getByRole('img')

    expect(homeCard).toBeInTheDocument()
    expect(homeCard).toHaveTextContent('Subheading')
    expect(homeCard).toHaveTextContent('Heading')
    expect(homeCard).toHaveTextContent('Description')
    expect(iconTag).toHaveAttribute('src', iconUrl)
  })
})
