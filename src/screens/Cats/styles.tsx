import styled from "styled-components/native";
import {
  getStatusBarHeight,
  getBottomSpace,
} from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  /* padding: ${getStatusBarHeight() + 24}px 24px ${getBottomSpace() +
  14}px ; */
`;

export const Content = styled.ScrollView`
  flex: 1;
  padding: 10px;

  padding-bottom: 20px;
`;
