import { FC } from 'react'
import { Center } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { TitledContent } from 'app/client/components/TitledContent'

export const handle = {
  i18n: 'skills',
}

const SkillsPage: FC = () => {
  const [t] = useTranslation('skills')

  return (
    <TitledContent title={t('heading')} blurb={t('blurb')}>
      <Center boxSize="full">skills</Center>
    </TitledContent>
  )
}

export default SkillsPage
