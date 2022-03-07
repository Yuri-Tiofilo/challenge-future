import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { Home } from "@screens/Home";
import { Cats } from "@screens/Cats";
import { useTheme } from "styled-components";

import { Fontisto } from '@expo/vector-icons';

import { FontAwesome } from '@expo/vector-icons'; 

export type RootStackParamList = {
  home: undefined;
  cats: undefined;
};

const { Navigator, Screen } = createDrawerNavigator<RootStackParamList>();

export function DashboardRoutes() {
  const theme = useTheme();
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: theme.COLORS.WHITE,
        drawerLabelStyle: {
          fontWeight: "bold",
          fontFamily: theme.FONTS.TITLE,
          fontSize: 15,
          padding: 5
        },
        drawerActiveBackgroundColor: theme.COLORS.PRIMARY,
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          drawerLabel: "Usuários",
          drawerIcon: ({ focused, size }) => (
            <FontAwesome
              name="users"
              size={24}
              color={focused ? theme.COLORS.WHITE : theme.COLORS.TEXT}
            />
          ),
        }}
      />
      <Screen
        name="cats"
        component={Cats}
        options={{
          drawerLabel: "Cats",
          drawerIcon: ({ focused, size }) => (
            <Fontisto
              name="github"
              size={25}
              color={focused ? theme.COLORS.WHITE : theme.COLORS.TEXT}
            />
          ),
        }}
      />
    </Navigator>
  );
}
