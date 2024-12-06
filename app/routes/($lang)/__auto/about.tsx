import { FC } from 'react'
import { TitledContent } from 'app/client/components/TitledContent'
import { useTranslation } from 'react-i18next'
import { MDXProvider } from '@mdx-js/react'
import { components } from 'app/client/components/mdx'

import AboutMeMdx from 'app/routes/($lang)/__auto/blog/post/about-me.mdx'

export const handle = {
  i18n: 'about',
}

const AboutPage: FC = () => {
  const [t] = useTranslation('about')

  return (
    <TitledContent title={t('heading')}>
      <MDXProvider components={components}>
        <AboutMeMdx />
      </MDXProvider>
    </TitledContent>
  )
}

export default AboutPage
