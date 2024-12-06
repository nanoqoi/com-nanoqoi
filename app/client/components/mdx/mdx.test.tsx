import { expect, test } from 'vitest'
import { render } from 'vitest-browser-react'
import { components } from '.'
import { wrapper } from 'app/testing/wrapper'

test('renders components.Blurb', async () => {
  const { getByText } = render(<components.Blurb>blurb</components.Blurb>, {
    wrapper,
  })

  await expect.element(getByText('blurb')).toBeInTheDocument()
})

test('renders components.Banner', async () => {
  const sampleSrc =
    'https://upload.wikimedia.org/wikipedia/commons/7/70/Example.png'

  const { getByRole } = render(<components.Banner src={sampleSrc} />, {
    wrapper,
  })

  const locator = getByRole('banner')

  await expect.element(locator).toBeInTheDocument()

  expect(
    locator.element().computedStyleMap().get('background-image')?.toString(),
  ).toEqual(`url("${sampleSrc}")`)
})
