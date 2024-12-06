import { expect, test } from 'vitest'
import { render } from 'vitest-browser-react'
import { NavLink } from '.'
import { wrapper } from 'app/testing/wrapper'

test('renders - about', async () => {
  const { getByText } = render(<NavLink id="about" />, {
    wrapper,
  })

  await expect.element(getByText('About Me')).toBeInTheDocument()
})

test('renders - blog', async () => {
  const { getByText } = render(<NavLink id="blog" />, {
    wrapper,
  })

  await expect.element(getByText('Blog')).toBeInTheDocument()
})
