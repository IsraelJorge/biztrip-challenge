import * as TooltipPrimitive from '@radix-ui/react-tooltip'

import { TooltipContent } from './styled'

export type TooltipProps = React.ComponentProps<typeof TooltipContent> & {
  children: React.ReactNode
  text: string
}

export function Tooltip({ children, text, ...props }: TooltipProps) {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipContent side="top" align="center" {...props}>
          <span>{text}</span>
          <TooltipPrimitive.Arrow width={11} height={5} />
        </TooltipContent>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}
