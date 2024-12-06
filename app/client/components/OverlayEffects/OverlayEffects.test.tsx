import { expect, test } from 'vitest'
import { render } from 'vitest-browser-react'
import { OverlayEffects } from '.'
import { wrapper } from 'app/testing/wrapper'

test('renders', async () => {
  const { getByTestId } = render(<OverlayEffects />, { wrapper })

  await expect.element(getByTestId('paper')).toBeInTheDocument()
  await expect.element(getByTestId('noise')).toBeInTheDocument()
})
