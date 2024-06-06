import { useId } from 'react'

import {
  useController,
  FieldValues,
  Path,
  PathValue,
  Control,
} from 'react-hook-form'

import { Icon } from '../Icon'
import { Container, SwitchLabel, SwitchRoot, SwitchThumb } from './styled'

export type SwitchProps<TFields extends FieldValues> = {
  name: Path<TFields>
  control: Control<TFields>
  defaultValue?: PathValue<TFields, Path<TFields>>
  disabled?: boolean
  label: string
  onClick?: () => void
}

export function Switch<TFields extends FieldValues>({
  name,
  control,
  defaultValue,
  disabled,
  label,
  onClick,
}: SwitchProps<TFields>) {
  const id = useId()

  const { field } = useController({
    name,
    control,
    defaultValue,
    disabled,
  })

  return (
    <Container>
      <SwitchRoot
        data-testid="switch"
        name={field.name}
        onCheckedChange={field.onChange}
        disabled={field.disabled}
        defaultChecked={defaultValue}
        id={field.name + id}
        ref={field.ref}
        onClick={onClick}
      >
        <SwitchThumb>
          <Icon name={field.value ? 'Check' : 'X'} size={10} />
        </SwitchThumb>
      </SwitchRoot>
      <SwitchLabel htmlFor={field.name}>{label}</SwitchLabel>
    </Container>
  )
}
