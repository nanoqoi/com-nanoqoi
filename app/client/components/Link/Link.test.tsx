import { expect, test } from 'vitest'
import { render } from 'vitest-browser-react'
import { Link } from '.'
import { wrapper } from 'app/testing/wrapper'

test('renders', async () => {
  const { getByTestId } = render(
    <Link to="/test" data-testid="link">
      Test
    </Link>,
    { wrapper },
  )

  await expect.element(getByTestId('link')).toBeInTheDocument()
  await expect.element(getByTestId('link')).toBeInstanceOf(HTMLAnchorElement)
})

test('renders correct href', async () => {
  const { getByTestId } = render(
    <Link to="/test" data-testid="link">
      Test
    </Link>,
    { wrapper },
  )

  await expect.element(getByTestId('link')).toHaveAttribute('href', '/test')
})

test('renders chakra props', async () => {
  const { getByTestId } = render(
    <Link to="/test" bgColor="red" data-testid="link">
      Test
    </Link>,
    { wrapper },
  )

  expect(
    getByTestId('link')
      .element()
      .computedStyleMap()
      .get('background-color')
      ?.toString(),
  ).toEqual('rgb(255, 0, 0)')
})
