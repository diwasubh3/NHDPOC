import React from "react";
import { Text, StyleSheet, Dimensions} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons"; 

const { width, height } = Dimensions.get("window");

const Alerts = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Icon
        name="notifications"
        size={100}
        color="#f39c12"
        style={styles.icon}
      />
      <Text style={styles.title}>Alerts</Text>
      <Text style={styles.message}>
        No new alerts at the moment. You will be notified here when there are
        important updates.
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
    backgroundColor: "#f5f5f5", 
  },
  icon: {
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

export default Alerts;
