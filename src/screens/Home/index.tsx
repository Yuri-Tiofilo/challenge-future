import React from "react";

import { Container, Content } from "./styles";
import { Header } from "@components/Layout/Header";
import { Users } from "@components/Lists/Users";
import { NewUser } from "@components/Controllers/NewUser";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { DrawerNavigationProp } from "@react-navigation/drawer";

import { RootStackParamList } from "../../routes/dashboard.routes";

type Props = DrawerNavigationProp<RootStackParamList, "home">;

export function Home({ navigation }: Props) {
  return (
    <Container>
      <Header openDrawer={() => navigation.openDrawer()} />
      <Users />
      <NewUser />
    </Container>
  );
}
