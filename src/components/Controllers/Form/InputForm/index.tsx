import React from 'react'
import { TextInputProps } from 'react-native'
import { Control, Controller } from 'react-hook-form'

import { Input } from '@components/Controllers/Input'
import { Container, Error } from './styles'

interface Props extends TextInputProps {
  control: Control
  name: string
  error: string
  maxLength?: number
}

export function InputForm({ name, control, error, maxLength, ...rest }: Props) {
  return (
    <Container>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <Input
            {...rest}
            error={!!error}
            onChangeText={onChange}
            value={value}
            maxLength={maxLength}
          />
        )}
      />
      {error && <Error>{error}</Error>}
    </Container>
  )
}
