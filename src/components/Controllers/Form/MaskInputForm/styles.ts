import styled from 'styled-components/native'
import InputMask from 'react-native-mask-input'
import { RFValue } from 'react-native-responsive-fontsize'
import { TextInputProps } from 'react-native'

interface Props {
  error?: boolean
}

export const Container = styled.View<Props>`
  width: 100%;
`

export const Error = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  color: ${({ theme }) => theme.COLORS.ERROR};

  margin: 0px 0px 5px 10px;
`

export const MaskInputFormStyled = styled(InputMask).attrs<TextInputProps>(
  ({ theme }) => ({
    placeholderTextColor: theme.COLORS.SUBTEXT
  })
)<Props>`
  width: 100%;
  height: 56px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 8px;
  font-size: 14px;
  padding: 7px 0;
  padding-left: 20px;
  margin-bottom: ${({ error }) => (error ? "5px" : "8px")};
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  border: ${({ theme, error }) =>
    error
      ? `1px solid ${theme.COLORS.ERROR}`
      : `1px solid ${theme.COLORS.BORDER}`};
  /* ${({ theme, error }) =>
    error ? theme.COLORS.ERROR : theme.COLORS.BORDER}; */
  color: ${({ theme }) => theme.COLORS.TEXT};
`
