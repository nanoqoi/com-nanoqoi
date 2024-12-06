import { expect, test } from 'vitest'
import { render } from 'vitest-browser-react'
import { Header } from '.'
import { wrapper } from 'app/testing/wrapper'

test('renders', async () => {
  const { getByText } = render(<Header />, { wrapper })

  await expect.element(getByText('About Me')).toBeInTheDocument()
})
