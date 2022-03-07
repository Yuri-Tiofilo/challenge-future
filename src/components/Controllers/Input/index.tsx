import React from "react";
import { TextInputProps } from "react-native";
import { Container } from "./styles";

type Props = TextInputProps & {
  error?: boolean
}

export function Input({ error, ...rest  }: Props) {
  return <Container {...rest} error={error} />;
}
