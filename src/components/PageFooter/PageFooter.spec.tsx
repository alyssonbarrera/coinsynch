import { render, screen } from '@testing-library/react'
import { PageFooter } from './PageFooter'

describe('PageFooter Component', () => {
  it('should render the PageFooter component', () => {
    render(
      <PageFooter.Root>
        <PageFooter.Content>Content</PageFooter.Content>
        <PageFooter.Logo data-testid="page-footer-logo" />
      </PageFooter.Root>,
    )

    expect(screen.getByText('Content')).toBeInTheDocument()
    expect(screen.getByTestId('page-footer-logo')).toBeInTheDocument()
  })
})
