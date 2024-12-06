import { expect, test } from 'vitest'
import { render } from 'vitest-browser-react'
import { TitledContent } from '.'
import { wrapper } from 'app/testing/wrapper'

test('renders title', async () => {
  const { getByText } = render(
    <TitledContent title="sample">test</TitledContent>,
    { wrapper },
  )

  await expect.element(getByText('test')).toBeInTheDocument()
  await expect.element(getByText('sample')).toBeInTheDocument()
})

test('renders blurb', async () => {
  const { getByText } = render(
    <TitledContent title="sample" blurb="blurb">
      test
    </TitledContent>,
    { wrapper },
  )

  await expect.element(getByText('test')).toBeInTheDocument()
  await expect.element(getByText('blurb')).toBeInTheDocument()
})
