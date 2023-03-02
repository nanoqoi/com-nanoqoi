import { Stack, StackProps } from 'src/components/dynamic-profile-banner/Stack'

export const Row = ({ children, ...props }: Omit<StackProps, 'direction'>) => (
  <Stack direction="row" {...props}>
    {children}
  </Stack>
)