import { FC } from 'react'
import { Center } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { TitledContent } from 'app/client/components/TitledContent'

export const handle = {
  i18n: 'projects',
}

const ProjectsPage: FC = () => {
  const [t] = useTranslation('projects')

  return (
    <TitledContent title={t('heading')}>
      <Center boxSize="full">projects</Center>
    </TitledContent>
  )
}

export default ProjectsPage
