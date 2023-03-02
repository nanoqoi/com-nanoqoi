import { Stack, StackProps } from 'src/components/dynamic-profile-banner/Stack'

export const Column = ({
                         children,
                         ...props
                       }: Omit<StackProps, 'direction'>) => (
  <Stack direction="column" {...props}>
    {children}
  </Stack>
)