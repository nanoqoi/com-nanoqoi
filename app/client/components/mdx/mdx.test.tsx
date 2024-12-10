import { expect, test } from 'vitest'
import { render } from 'vitest-browser-react'
import { components as get } from '.'
import { wrapper } from 'app/testing/wrapper'
import { MDXCustomMetadata } from '*.mdx'

const metadata: MDXCustomMetadata = {
  title: 'Testing',
  visibility: 'public',
  blurb: '',
  slug: 'test',
  bannerSrc: '',
}

const components = get(metadata)

test('renders components.Blurb', async () => {
  const { getByText } = render(
    <components.Blurb metadata={metadata}>blurb</components.Blurb>,
    {
      wrapper,
    },
  )

  await expect.element(getByText('blurb')).toBeInTheDocument()
})

test('renders components.Banner', async () => {
  const sampleSrc =
    'https://upload.wikimedia.org/wikipedia/commons/7/70/Example.png'

  const { getByRole } = render(
    <components.Banner metadata={metadata} src={sampleSrc} />,
    {
      wrapper,
    },
  )

  const locator = getByRole('banner')

  await expect.element(locator).toBeInTheDocument()

  expect(
    locator.element().computedStyleMap().get('background-image')?.toString(),
  ).toEqual(`url("${sampleSrc}")`)
})

test('renders components.Image', async () => {
  const sampleSrc =
    'https://upload.wikimedia.org/wikipedia/commons/7/70/Example.png'

  const { getByAltText } = render(
    <components.Image metadata={metadata} src={sampleSrc} alt="test" />,
    {
      wrapper,
    },
  )

  const locator = getByAltText('test')

  await expect.element(locator).toBeInTheDocument()

  expect(locator.element().getAttribute('src')).toEqual(sampleSrc)
})
