import React from "react";
import {
  View,
  Text,
  Switch,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  Platform
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useVisibility } from "../context/VisibilityContext";
import Icon from "react-native-vector-icons/Ionicons";
import Toast from "react-native-toast-message";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const { width, height } = Dimensions.get("window");

const Menu = () => {
  const {
    view1Visible,
    setView1Visible,
    view2Visible,
    setView2Visible,
    isLayoutLocked,
    toggleLayoutLock,
    user,
    isLandscape
  } = useVisibility();

  const handleSwitchPress = () => {
    isLandscape ? Toast.show({
      type: "info",
      position: "bottom",
      text1: "Switch is Disabled",
      text2: "Reason: Atleast 2 widgets are mandatory",
      text1Style: {fontSize: 14},
      text2Style: {fontSize: 12},
      bottomOffset: 5,
    }) : Toast.show({
      type: "info",
      position: "bottom",
      text1: "Switch is Disabled",
      text2: "Reason: Atleast 2 widgets are mandatory",
      text1Style: {fontSize: 14},
      text2Style: {fontSize: 12},
    });
  }

  return (
    <SafeAreaView style={isLandscape ? styles.landscapeContainer : styles.container}>
      <Toast />
      <View style={isLandscape ? styles.landscapeUserContainer : styles.userContainer}>
        {/* <Image
          style={styles.userProfile}
          source={require("../assets/icon.png")}
        /> */}
        <Icon name="person" size={32} style={{marginHorizontal: 10}}/>
        <View style={styles.userDetails}>
          <Text style={styles.userTitle}>{user}</Text>
          <Text style={styles.userDesignation}>Broker</Text>
        </View>
      </View>
      <View style={isLandscape ? styles.landscapeOptionsContainer : styles.optionsContainer}>
        <Text style={styles.title}>Widgets Options</Text>
        <View style={styles.toggleContainer}>
          <Text style={styles.toggleLabel}>Orders Widget</Text>
          <TouchableOpacity onPress={handleSwitchPress}>
            <Switch
              value={view1Visible}
              onValueChange={setView1Visible}
              disabled
            />
          </TouchableOpacity>
        </View>

        <View style={styles.toggleContainer}>
          <Text style={styles.toggleLabel}>Maps Widget</Text>
          <TouchableOpacity onPress={handleSwitchPress}>
            <Switch
              value={view2Visible}
              onValueChange={setView2Visible}
              disabled
            />
          </TouchableOpacity>
        </View>
        <View style={styles.toggleContainer}>
          <Text style={styles.toggleLabel}>Lock Layout</Text>
          <Switch value={isLayoutLocked} onValueChange={toggleLayoutLock} />
        </View>
      </View>
      <View style={isLandscape ? styles.landscapeLogOutContainer : styles.logOutContainer}>
        <TouchableOpacity style={styles.innerLogOutContainer}>
          <Icon name="log-out" size={24} />
          <Text style={styles.logOutText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  landscapeContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    padding: 20,
    gap: 20,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
    gap: 20,
  },

  landscapeUserContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    flexDirection: "row",
    padding: 30,
    gap: 10,
    width: wp("50%"),
    borderRadius: 20,
  },
  userContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    flexDirection: "row",
    padding: 30,
    gap: 10,
    width: wp('90%'),
    borderRadius: 20,
  },
  userProfile: {
    height: 50,
    width: 50,
    borderRadius: Platform.OS === "android" ? 25 : "100%",
  },
  userDetails: {
    gap: 5,
  },
  userTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  userDesignation: {
    fontSize: 14,
    color: "gray",
  },
  landscapeOptionsContainer: {
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    padding: 30,
    borderRadius: 20,
    width: wp("70%"),
  },
  optionsContainer: {
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    padding: 30,
    borderRadius: 20,
    width: wp("90%"),
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    color: "tomato",
    paddingHorizontal: 10,
  },
  toggleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  toggleLabel: {
    fontSize: 18,
    marginRight: 10,
  },
  buttonContainer: {
    marginTop: 20,
  },
  landscapeLogOutContainer: {
    backgroundColor: "#fff",
    width: wp("40%"),
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 50,
  },
  logOutContainer: {
    backgroundColor: "#fff",
    width: wp("90%"),
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 50,
  },
  innerLogOutContainer: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  logOutText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Menu;
