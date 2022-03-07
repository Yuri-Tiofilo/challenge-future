import styled from "styled-components/native";
import { TextInput, TextInputProps } from "react-native";

interface Props {
  error?: boolean;
}

export const Container = styled(TextInput).attrs<TextInputProps>(
  ({ theme }) => ({
    placeholderTextColor: theme.COLORS.SUBTEXT,
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
`;
