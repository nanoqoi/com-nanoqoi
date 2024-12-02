import { FC } from 'react'
import { Center } from '@chakra-ui/react'
import { TitledContent } from 'app/client/components/TitledContent'
import { useTranslation } from 'react-i18next'

const AboutPage: FC = () => {
  const [t] = useTranslation('about')

  return (
    <TitledContent title={t('heading')}>
      <Center boxSize="full">about</Center>
    </TitledContent>
  )
}

export default AboutPage
