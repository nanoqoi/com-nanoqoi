import { FC } from 'react'
import { Center } from '@chakra-ui/react'
import { TitledContent } from 'app/client/components/TitledContent'
import { useTranslation } from 'react-i18next'

export const handle = {
  i18n: 'contact',
}

const ContactPage: FC = () => {
  const [t] = useTranslation('contact')

  return (
    <TitledContent title={t('heading')}>
      <Center boxSize="full">contact</Center>
    </TitledContent>
  )
}

export default ContactPage
