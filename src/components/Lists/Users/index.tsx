import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";

import firestore from "@react-native-firebase/firestore";

import { Load } from "@components/Animations/Load";
import { User, UserProps } from "@components/Controllers/User";
import { Container, Header, Title, Counter } from "./styles";

export function Users() {
  const [status, setStatus] = useState("open");
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState<UserProps[]>([]);

  useEffect(() => {
    setIsLoading(true);

    const subscribe = firestore()
      .collection("users")
      .onSnapshot((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        }) as UserProps[];

        setUsers(data);
        setIsLoading(false);
      });

    return () => subscribe();
  }, [status]);

  return (
    <Container>
      <Header>
        <Title>Usuários</Title>
        <Counter>{users.length}</Counter>
      </Header>

      {isLoading ? (
        <Load />
      ) : (
        <FlatList
          data={users}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <User data={item} />}
          contentContainerStyle={{ paddingBottom: 100 }}
          showsVerticalScrollIndicator={false}
          style={{ flex: 1 }}
        />
      )}
    </Container>
  );
}
