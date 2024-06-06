import { useState } from 'react'

import * as SelectPrimitive from '@radix-ui/react-select'
import {
  Control,
  FieldValues,
  Path,
  PathValue,
  useController,
} from 'react-hook-form'

import {
  ChildrenError,
  checkChildrenHasError,
} from '@/utils/checkChildrenHasError'

import { Icon } from '../Icon'
import { Input } from '../Input'
import {
  Container,
  ErrorContainer,
  Label,
  LabelContainer,
  RequiredSpan,
  SelectContent,
  SelectEmpty,
  SelectItem,
  SelectSearchContainer,
  SelectTrigger,
} from './styled'

export type SelectProps<
  Data extends Record<string, unknown>,
  TFields extends FieldValues,
  DisplayKey = keyof Data,
  ValueKey = keyof Data,
> = Omit<SelectPrimitive.SelectTriggerProps, 'onChange'> & {
  data: Data[] | undefined
  onChange?: (data: Data | undefined) => void
  placeholder?: string
  name: Path<TFields>
  control: Control<TFields>
  displayKey: DisplayKey
  valueKey?: ValueKey
  defaultValue?: PathValue<TFields, Path<TFields>>
  noPadding?: boolean
  label?: string
  required?: boolean
}

const SelectRoot = <
  Data extends Record<string, unknown>,
  TFields extends FieldValues,
>({
  data = [],
  control,
  name,
  displayKey,
  valueKey = 'id',
  defaultValue,
  placeholder,
  noPadding,
  disabled,
  label,
  required,
  children,
  onChange,
  ...props
}: SelectProps<Data, TFields>) => {
  const [querySearch, setQuerySearch] = useState('')
  const { field } = useController({ name, control, defaultValue, disabled })

  const selected = data?.find((item) => String(item[valueKey]) === field.value)
  const hasError = checkChildrenHasError(children as ChildrenError)

  const filteredData = querySearch
    ? data.filter((item) =>
        String(item[displayKey])
          .toLowerCase()
          ?.includes(querySearch.toLowerCase()),
      )
    : data

  const isEmpty = !filteredData.length

  return (
    <Container noPadding={noPadding}>
      <SelectPrimitive.Root
        data-testid="select"
        onValueChange={(value) => {
          if (value) {
            field.onChange(value)
            if (onChange) {
              const item = data.find((item) => String(item[valueKey]) === value)
              onChange(item)
            }
          }
        }}
        disabled={field.disabled}
        value={field.value}
        defaultValue={defaultValue}
        name={name}
      >
        {!!label && (
          <LabelContainer>
            <Label htmlFor={name}>{label}</Label>
            {required && <RequiredSpan>Obrigatório</RequiredSpan>}
          </LabelContainer>
        )}
        <SelectTrigger
          data-testid="select"
          error={hasError}
          id={name}
          {...props}
        >
          <SelectPrimitive.Value placeholder={placeholder}>
            {(selected?.[displayKey] as string) ?? placeholder}
          </SelectPrimitive.Value>
          <SelectPrimitive.Icon asChild>
            <Icon name="ChevronDown" />
          </SelectPrimitive.Icon>
        </SelectTrigger>
        <SelectPrimitive.Portal>
          <SelectContent position="popper">
            <SelectSearchContainer>
              <Input
                placeholder="Encontrar"
                name="search"
                iconProps={{
                  name: 'Search',
                  size: 20,
                }}
                onChange={(e) => setQuerySearch(e.target.value)}
                noPadding
              />
            </SelectSearchContainer>
            <SelectPrimitive.Group>
              {isEmpty && (
                <SelectEmpty>Nenhum resultado encontrado</SelectEmpty>
              )}
              {filteredData.map((item) => {
                const value = String(item[valueKey])
                const label = String(item[displayKey])
                return (
                  <SelectItem key={value} value={value}>
                    {label}
                  </SelectItem>
                )
              })}
            </SelectPrimitive.Group>
          </SelectContent>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
      {children}
    </Container>
  )
}

type SelectErrorProps = {
  message?: string
}

const SelectError = ({ message }: SelectErrorProps) => {
  if (!message) return null

  return (
    <ErrorContainer>
      <Icon name="AlertCircle" size={15} />
      <span>{message}</span>
    </ErrorContainer>
  )
}

export const Select = Object.assign(SelectRoot, { Error: SelectError })
