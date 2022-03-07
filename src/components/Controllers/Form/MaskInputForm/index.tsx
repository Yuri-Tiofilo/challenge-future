import React from 'react'
import { TextInputProps } from 'react-native'
import { Control, Controller } from 'react-hook-form'

import { Container, Error, MaskInputFormStyled } from './styles'

interface Props extends TextInputProps {
  control: Control
  name: string
  error: string
  maxLength?: number
  mask: any
}
export function MaskInputForm({
  name,
  control,
  error,
  maxLength,
  mask,
  ...rest
}: Props) {
  return (
    <Container>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <MaskInputFormStyled
            error={!!error}
            onChangeText={onChange}
            value={value}
            maxLength={maxLength}
            mask={mask}
            {...rest}
          />
        )}
      />
      {error && <Error>{error}</Error>}
    </Container>
  )
}
