import React, { forwardRef } from 'react'

import * as DialogPrimitive from '@radix-ui/react-dialog'

import { IconButton } from '../IconButton'
import {
  Container,
  Content,
  Footer,
  Header,
  DialogOverlay,
  Title,
} from './styled'

const DialogRoot = DialogPrimitive.Root
const DialogTrigger = DialogPrimitive.Trigger
const DialogClose = DialogPrimitive.Close

type DialogHeaderProps = React.ComponentProps<typeof Header> & {
  title: string
}

export const DialogHeader = ({ title, ...props }: DialogHeaderProps) => {
  return (
    <Header {...props}>
      <Title>{title}</Title>
      <DialogPrimitive.Close asChild>
        <IconButton iconName="X" />
      </DialogPrimitive.Close>
    </Header>
  )
}

type DialogContainerProps = React.ComponentProps<typeof Container>

const DialogContainer = forwardRef<
  React.ElementRef<typeof Container>,
  DialogContainerProps
>(({ children, ...props }, ref) => {
  return (
    <DialogPrimitive.Portal>
      <DialogOverlay />
      <Container ref={ref} {...props}>
        {children}
      </Container>
    </DialogPrimitive.Portal>
  )
})

DialogContainer.displayName = 'DialogContainer'

export const Dialog = Object.assign(DialogRoot, {
  Trigger: DialogTrigger,
  Container: DialogContainer,
  Header: DialogHeader,
  Content: Content,
  Footer: Footer,
  Close: DialogClose,
})
