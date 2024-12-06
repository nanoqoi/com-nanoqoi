import { expect, test } from 'vitest'
import { render } from 'vitest-browser-react'
import { HomeNavLink } from './HomeNavLink'
import { wrapper } from 'app/testing/wrapper'

test('renders', async () => {
  const { getByText } = render(<HomeNavLink>test</HomeNavLink>, {
    wrapper,
  })

  const locator = getByText('test')

  await expect.element(locator).toBeInTheDocument()
  await expect.element(locator).toHaveAttribute('href', '/')
})

test('renders tooltip wrapper', async () => {
  const { getByText } = render(<HomeNavLink>test</HomeNavLink>, {
    wrapper,
  })

  const locator = getByText('test')
  const tooltip = getByText('Home')

  await expect.element(tooltip).toBeInTheDocument()
  await expect.element(locator).toHaveAttribute('data-scope', 'tooltip')
})
