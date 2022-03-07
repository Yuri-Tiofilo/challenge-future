import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  background: ${({theme}) => theme.COLORS.BACKGROUND};

  padding: 10px 20px;

  justify-content: space-around;

  align-items: center;
`

export const Title = styled.Text`
  /* margin-bottom: 120px; */
  color: ${({theme}) => theme.COLORS.TEXT};
  font-family: ${({theme}) => theme.FONTS.TITLE};
  text-align: center;

  font-size: 45px;
`
