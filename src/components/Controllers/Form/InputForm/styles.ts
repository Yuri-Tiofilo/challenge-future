import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

interface Props {
  error?: boolean
}

export const Container = styled.View<Props>`
  width: 100%;
`

export const Error = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  color: ${({ theme }) => theme.COLORS.ERROR};

  margin: 0px 0px 5px 0px;
`
