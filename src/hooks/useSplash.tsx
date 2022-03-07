import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { SplashContextData } from "./splash.types";

const SplashContext = createContext<SplashContextData>({} as SplashContextData);

const SplashProvider: React.FC = ({ children }) => {
  const [splashCompleted, setSplashCompleted] = useState(false)

  useEffect(() => {
    async function loadStorage():Promise<void> {
      const useSplashCompleted = await AsyncStorage.getItem('@splash_completed');

      if (useSplashCompleted) {
        setSplashCompleted(JSON.parse(useSplashCompleted))
      }
    }
    loadStorage()
  }, [])

  const signOut = async () => {
    const isMoreCompleted = await AsyncStorage.getItem("@splash_completed");

    if (isMoreCompleted) {
      await AsyncStorage.removeItem("@splash_completed");
    }

    setSplashCompleted(false)
  }

  const handleDashboard = async () => {
    const isMoreCompleted = await AsyncStorage.getItem("@splash_completed");

    if (isMoreCompleted) {
      await AsyncStorage.removeItem("@splash_completed");
    }

    await AsyncStorage.setItem("@splash_completed", JSON.stringify(true));

    setSplashCompleted(true)
  };

  return (
    <SplashContext.Provider
      value={{
        handleDashboard,
        splashCompleted,
        signOut
      }}
    >
      {children}
    </SplashContext.Provider>
  );
};
function useSplash(): SplashContextData {
  const context = useContext(SplashContext);
  if (!context) {
    throw new Error("useSplash must be used within an SplashProvider");
  }
  return context;
}
export { SplashProvider, useSplash };
