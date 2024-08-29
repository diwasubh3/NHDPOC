import React, { useState, useEffect } from "react";
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import { VisibilityProvider } from "./context/VisibilityContext";
import Splash from "./screens/Splash";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <VisibilityProvider>
        {showSplash ? <Splash /> : <BottomTabNavigator />}
    </VisibilityProvider>
  );
}
