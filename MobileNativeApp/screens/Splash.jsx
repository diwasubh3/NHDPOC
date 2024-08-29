import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; // Importing icons from Ionicons
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const Splash = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name="stats-chart" size={wp("25%")} color="#FFFFFF" />
      </View>
      <Text style={styles.appName}>NHD Pro</Text>
      <Text style={styles.tagline}>Your Gateway to Smarter Investments</Text>
      <ActivityIndicator style={styles.loader} size="large" color="#FFFFFF" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E3A8A",
    justifyContent: "center",
    alignItems: "center",
    padding: wp("5%"),
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: wp("50%"), // Icons container width as 50% of screen width
    height: hp("15%"), // Icons container height as 25% of screen height
    alignItems: "center",
    marginBottom: hp("2%"),
  },
  iconSpacing: {
    marginHorizontal: wp("2%"), 
  },
  appName: {
    fontSize: wp("8%"), 
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: hp("1%"),
  },
  tagline: {
    fontSize: wp("4.5%"), 
    color: "#A7C0FF", 
    textAlign: "center",
    marginBottom: hp("3%"), 
  },
  loader: {
    marginTop: hp("2%"),
  },
});
export default Splash;
