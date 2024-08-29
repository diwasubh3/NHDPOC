import React, { createContext, useState, useContext, useEffect } from "react";
import ClientData from "../data/ClientData.json";
import { Dimensions, Platform } from "react-native";

const VisibilityContext = createContext();
const { width, height } = Dimensions.get("window");

export const VisibilityProvider = ({ children }) => {
  const [view1Visible, setView1Visible] = useState(true);
  const [view2Visible, setView2Visible] = useState(true);
  const [isLayoutLocked, setIsLayoutLocked] = useState(true);
  const [isLandscape, setIsLandscape] = useState(width > height);
  const [mapRegion, setMapRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const toggleLayoutLock = () => setIsLayoutLocked((prev) => !prev);

  const user = ClientData?.clientName || "Unknown";

  return (
    <VisibilityContext.Provider
      value={{
        view1Visible,
        setView1Visible,
        view2Visible,
        setView2Visible,
        isLayoutLocked,
        setIsLayoutLocked,
        toggleLayoutLock,
        user,
        isLandscape,
        setIsLandscape,
        mapRegion,
        setMapRegion,
      }}
    >
      {children}
    </VisibilityContext.Provider>
  );
};

export const useVisibility = () => useContext(VisibilityContext);
