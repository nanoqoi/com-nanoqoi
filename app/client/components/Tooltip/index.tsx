import { Tooltip as ChakraTooltip, Portal } from '@chakra-ui/react'
import { forwardRef, ReactNode, RefObject } from 'react'

export interface TooltipProps extends ChakraTooltip.RootProps {
  showArrow?: boolean
  portalled?: boolean
  portalRef?: RefObject<HTMLElement>
  content: ReactNode
  contentProps?: ChakraTooltip.ContentProps
  disabled?: boolean
}

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      showArrow,
      children,
      disabled,
      portalled,
      content,
      contentProps,
      portalRef,
      ...rest
    },
    ref,
  ) =>
    disabled ? (
      children
    ) : (
      <ChakraTooltip.Root {...rest}>
        <ChakraTooltip.Trigger asChild>{children}</ChakraTooltip.Trigger>
        <Portal disabled={!portalled} container={portalRef}>
          <ChakraTooltip.Positioner>
            <ChakraTooltip.Content ref={ref} {...contentProps}>
              {showArrow && (
                <ChakraTooltip.Arrow>
                  <ChakraTooltip.ArrowTip />
                </ChakraTooltip.Arrow>
              )}
              {content}
            </ChakraTooltip.Content>
          </ChakraTooltip.Positioner>
        </Portal>
      </ChakraTooltip.Root>
    ),
)
