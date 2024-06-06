import { forwardRef, useImperativeHandle, useRef } from 'react'

import {
  ChildrenError,
  checkChildrenHasError,
} from '@/utils/checkChildrenHasError'

import { Icon } from '../Icon'
import {
  Container,
  ErrorContainer,
  InputContainer,
  InputPrimitive,
  Label,
  LabelContainer,
  RequiredSpan,
} from './styled'

export type InputProps = React.ComponentPropsWithRef<typeof InputPrimitive> & {
  label?: string | null
  name: string
  noPadding?: boolean
  iconProps?: React.ComponentProps<typeof Icon> & {
    position?: 'left' | 'right'
  }
}

const InputRoot = forwardRef<
  React.ElementRef<typeof InputPrimitive>,
  InputProps
>(
  (
    { label, name, required, iconProps, children, noPadding, ...props },
    ref,
  ) => {
    const positionIcon = iconProps?.position || 'right'
    const innerRef = useRef<HTMLInputElement>(null)
    useImperativeHandle(ref, () => innerRef.current!)

    const hasError = checkChildrenHasError(children as ChildrenError)

    const onFocusInput = () => {
      if (innerRef.current) {
        innerRef.current.focus()
      }
    }

    return (
      <Container noPadding={noPadding} onClick={onFocusInput}>
        <LabelContainer>
          {label && <Label htmlFor={name}>{label}</Label>}
          {required && <RequiredSpan>Obrigatório</RequiredSpan>}
        </LabelContainer>

        <InputContainer error={hasError} iconRight={positionIcon === 'right'}>
          <InputPrimitive name={name} id={name} ref={innerRef} {...props} />
          {iconProps && <Icon {...iconProps} />}
        </InputContainer>
        {children}
      </Container>
    )
  },
)

type InputErrorProps = {
  message?: string
}

const InputError = ({ message }: InputErrorProps) => {
  if (!message) return null

  return (
    <ErrorContainer>
      <Icon name="AlertCircle" size={15} />
      <span>{message}</span>
    </ErrorContainer>
  )
}

export const Input = Object.assign(InputRoot, { Error: InputError })
