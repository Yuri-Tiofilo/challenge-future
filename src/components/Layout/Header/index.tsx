import React from "react";

import auth from "@react-native-firebase/auth";

import { LogoutButton } from "@components/Controllers/LogoutButton";
import { useTheme } from "styled-components";
import { MaterialIcons } from "@expo/vector-icons";

import { Container, Greeting, Title } from "./styles";
import { useSplash } from "@hooks/useSplash";

type Props = {
  openDrawer(): void;
};

export function Header({ openDrawer }: Props) {
  const { COLORS } = useTheme();
  const { signOut } = useSplash();
  async function handleSignOut() {
    signOut();
  }

  return (
    <Container>
      <MaterialIcons
        name="menu"
        size={30}
        color={COLORS.WHITE}
        onPress={() => openDrawer()}
      />
      <Greeting>
        <Title>Desafio futuro</Title>
      </Greeting>

      <LogoutButton onPress={handleSignOut} />
    </Container>
  );
}
