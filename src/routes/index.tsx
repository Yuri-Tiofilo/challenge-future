import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";

import { AuthRoutes } from "./auth.routes";
import { DashboardRoutes } from "./dashboard.routes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSplash } from "@hooks/useSplash";

export function Routes() {
  // const [splash, setSplash] = useState<boolean>(false);
  const { splashCompleted } = useSplash()

  // useEffect(() => {
  //   async function loadStorage() {
  //     const splashCompled = await AsyncStorage.getItem('@splash_completed')

  //     if (splashCompled) {
  //       setSplash(JSON.parse(splashCompled))
  //     }
  //   }

  //   loadStorage()
  // }, []);

  return (
    <NavigationContainer>
      {!splashCompleted ? <AuthRoutes /> : <DashboardRoutes />} 
    </NavigationContainer>
  );
}
