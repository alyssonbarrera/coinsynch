import { ArrowRight } from 'lucide-react'
import { fireEvent, render, screen } from '@testing-library/react'

import { Button } from './Button'

describe('Button Component', () => {
  it('should render the button with content', () => {
    render(
      <Button.Root>
        <Button.Content>Sign Up Now</Button.Content>
      </Button.Root>,
    )

    const button = screen.getByRole('button')

    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent(/Sign Up Now/i)
  })

  it('should render the button with icon', () => {
    render(
      <Button.Root>
        <Button.Icon icon={ArrowRight} />
      </Button.Root>,
    )

    const button = screen.getByRole('button')
    const paragraph = button.querySelector('span')

    expect(button).toBeInTheDocument()
    expect(button).toContainHTML('<svg')
    expect(paragraph).not.toBeInTheDocument()
  })

  it('should render the button with icon and content', () => {
    render(
      <Button.Root>
        <Button.Content data-testid={'button-content'}>
          Sign Up Now
        </Button.Content>
        <Button.Icon icon={ArrowRight} />
      </Button.Root>,
    )

    const button = screen.getByRole('button')
    const paragraph = screen.getByTestId('button-content')

    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent(/Sign Up Now/i)
    expect(button).toContainHTML('<svg')

    expect(paragraph).toBeInTheDocument()
  })

  it('should render the button with isLoading', () => {
    const mockOnClick = jest.fn()

    render(
      <Button.Root isLoading onClick={mockOnClick}>
        <Button.Content>Sign Up Now</Button.Content>
      </Button.Root>,
    )

    const button = screen.getByRole('button')

    fireEvent.click(button)
    expect(mockOnClick).not.toHaveBeenCalled()

    expect(button).toBeInTheDocument()
    expect(button).not.toHaveTextContent(/Sign Up Now/i)
    expect(button).toContainHTML('<svg')
  })
})
