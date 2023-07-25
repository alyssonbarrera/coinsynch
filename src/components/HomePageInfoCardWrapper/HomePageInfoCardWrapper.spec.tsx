import { screen, render } from '@testing-library/react'
import { HomePageInfoCardWrapper } from './HomePageInfoCardWrapper'

describe('HomePageInfoCardWrapper Component', () => {
  it('should render the heading', () => {
    render(<HomePageInfoCardWrapper />)

    expect(screen.getByTestId('HomePageInfoCardWrapper')).toBeInTheDocument()
  })

  it('should render the heading with the correct text', () => {
    render(<HomePageInfoCardWrapper />)

    const heading = screen.getByTestId('HomePageInfoCardWrapper')

    expect(heading.children).toHaveLength(2)
  })
})
