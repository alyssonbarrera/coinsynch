import { render } from '@testing-library/react'
import { Logo } from './Logo'

describe('Logo Component', () => {
  it('should render the logo with custom size', () => {
    const { container } = render(<Logo size={248} />)
    const svgElement = container.querySelector('svg')

    expect(svgElement).toBeInTheDocument()
    expect(svgElement).toHaveAttribute('width', '248')
  })

  it('should render the logo with default size', () => {
    const { container } = render(<Logo />)
    const svgElement = container.querySelector('svg')

    expect(svgElement).toBeInTheDocument()
    expect(svgElement).toHaveAttribute('width', '124')
  })
})
