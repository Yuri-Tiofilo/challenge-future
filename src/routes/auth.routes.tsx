import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Splash } from '@screens/Splash';

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="splash" component={Splash} />
    </Navigator>
  );
}