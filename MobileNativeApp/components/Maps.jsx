import { StyleSheet, View, Platform } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useVisibility } from "../context/VisibilityContext";
import { WebView } from "react-native-webview";

const Maps = () => {
  const { isLandscape } = useVisibility();
  const mapUrl = "https://www.google.com/maps/";

  return (
    <View style={styles.mapContainer}>
      <View style={styles.mapInnerContainer}>
        <View style={isLandscape ? styles.landscapeMaps : styles.maps}>
          <WebView
            source={{ uri: mapUrl }}
            javaScriptEnabled={true}
            domStorageEnabled={true}
          />
        </View>
      </View>
    </View>
  );
};

export default Maps;

const styles = StyleSheet.create({
  mapContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    overflow: "hidden",
  },
  mapInnerContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: wp("90%"),
  },
  maps: {
    width: wp("90%"),
    height: hp("38%"),
    borderRadius: 15,
  },
  landscapeMaps: {
    width: wp("90%"),
    height: Platform.OS === "ios" ? hp("34%") : hp("38%"),
    borderRadius: 15,
  },
});
