import { screen, render } from '@testing-library/react'
import { DropdownMenu } from './DropdownMenu'

describe('DropdownMenu Component', () => {
  it('should render the dropdown menu', () => {
    render(<DropdownMenu />)

    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('should render the dropdown menu content', () => {
    render(<DropdownMenu defaultOpen />)

    expect(screen.getByText('About us')).toBeInTheDocument()
    expect(screen.getByText('Top Cryptos')).toBeInTheDocument()
    expect(screen.getByText('Sign In')).toBeInTheDocument()
    expect(screen.getByText('Sign Up')).toBeInTheDocument()
  })
})
