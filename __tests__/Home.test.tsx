import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Home from '../pages/index'

it('Should render title text', async () => {
  render(<Home />)
  await (() => {
    expect(screen.getByText('Next.js!')).toBeInTheDocument()
  })
})
