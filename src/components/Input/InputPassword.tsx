import { forwardRef, useState } from 'react'

import { Input, InputProps } from '.'

export type InputPasswordProps = Omit<InputProps, 'type' | 'iconProps'>

export const InputPassword = forwardRef<React.ElementRef<'input'>, InputProps>(
  ({ children, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false)

    return (
      <Input
        type={showPassword ? 'text' : 'password'}
        iconProps={{
          name: showPassword ? 'EyeOff' : 'Eye',
          onClick: () => setShowPassword((prevState) => !prevState),
          position: 'left',
          cursor: 'pointer',
        }}
        ref={ref}
        {...props}
      >
        {children}
      </Input>
    )
  },
)
