import React from "react";
import { Text, StyleSheet, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";

const { width, height } = Dimensions.get("window");

const NoWidgetsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Icon
        name="warning-outline"
        size={100}
        color="#f39c12"
        style={styles.icon}
      />
      <Text style={styles.title}>No Widgets</Text>
      <Text style={styles.message}>
        It looks like there are no widgets available at the moment. Please check
        back later or adjust your settings to view widgets.
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  image: {
    width: width * 0.6, 
    height: height * 0.3, 
    resizeMode: "contain", 
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333", 
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    color: "#666", 
    textAlign: "center",
    lineHeight: 24,
  },
});

export default NoWidgetsScreen;
