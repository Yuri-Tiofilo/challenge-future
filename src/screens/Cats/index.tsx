import React, { useEffect, useState } from "react";
import { Image } from "react-native";

import { Container, Content, ImageCat } from "./styles";
import { Header } from "@components/Layout/Header";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { DrawerNavigationProp } from "@react-navigation/drawer";

import { RootStackParamList } from "../../routes/dashboard.routes";
import { Button } from "@components/Controllers/Button";
import { api } from "../../services/api";
import { Load } from "@components/Animations/Load";

type Props = DrawerNavigationProp<RootStackParamList, "cats">;

type ResponseCat = {
  breeds: [any];
  id: string;
  url: string;
  width: number;
  height: number;
};

export function Cats({ navigation }: Props) {
  const [cat, setCat] = useState({} as ResponseCat);
  const [loading, setLoading] = useState(false);
  async function loadCats() {
    setLoading(true);
    const response = await api.get("/images/search");

    if (response.data) {
      setCat(response.data[0] as ResponseCat);
    }
    setLoading(false);
  }
  useEffect(() => {
    loadCats();
  }, []);

  return (
    <Container>
      <Header openDrawer={() => navigation.openDrawer()} />

      <Content>
        <Button title="Novo" onPress={loadCats} />
        {cat &&
          (loading ? (
            <Load />
          ) : (
            <Image
              resizeMode={"cover"}
              source={{
                uri: cat.url,
                height: cat.height,
                width: cat.width,
              }}
              style={{ marginTop: 10 }}
            />
          ))}
      </Content>
    </Container>
  );
}
