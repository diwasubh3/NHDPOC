import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useVisibility } from "../context/VisibilityContext";
import NoWidgetsScreen from "../screens/NoWidgets";
import Orders from "../components/Orders";
import Maps from "../components/Maps";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import DraggableFlatList from "react-native-draggable-flatlist";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const { width, height } = Dimensions.get("window");

const Dashboard = () => {
  const {
    view1Visible,
    view2Visible,
    isLayoutLocked,
    setIsLayoutLocked,
    user,
    isLandscape,
    setIsLandscape,
  } = useVisibility();

  const [data, setData] = useState([
    { key: "item-1", type: "orders" },
    { key: "item-2", type: "map" },
  ]);

  const [firstName] = user ? user.split(" ") : ["User"];

  useEffect(() => {
    const onChange = ({ window }) => {
      setIsLayoutLocked(true);
      setIsLandscape(window.width > window.height);
    };
    const subscription = Dimensions.addEventListener("change", onChange);
    return () => subscription?.remove();
  }, []);
  const renderItem = ({ item, drag, isActive }) => {
    let ComponentToRender;

    if (item.type === "map" && view2Visible) {
      ComponentToRender = <Maps />;
    } else if (item.type === "orders" && view1Visible) {
      ComponentToRender = <Orders />;
    } else {
      ComponentToRender = null;
    }

    return (
      <TouchableOpacity
        onLongPress={drag}
        delayLongPress={200}
        disabled={isLayoutLocked}
      >
        <View
          style={
            isLandscape ? styles.landscapeItemContainer : styles.itemContainer
          }
        >
          {ComponentToRender}
        </View>
      </TouchableOpacity>
    );
  };

  const renderDraggableList = () => (
    <DraggableFlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.key.toString()}
      onDragEnd={({ data }) => setData(data)}
      horizontal={isLandscape}
    />
  );

  const renderNormalList = () =>
    data.map((item) => (
      <View
        key={item.key.toString()}
        style={
          isLandscape ? styles.landscapeItemContainer : styles.itemContainer
        }
      >
        {item.type === "orders" && view1Visible ? <Orders /> : null}
        {item.type === "map" && view2Visible ? <Maps /> : null}
      </View>
    ));

  return (
    <SafeAreaView style={styles.container}>
      <View style={isLandscape ? styles.hidden : styles.userWelcomeContainer}>
        <Text style={styles.userWelcome}>Welcome Back, </Text>
        <Text style={styles.userName}>{firstName}</Text>
      </View>
      {!view1Visible && !view2Visible ? (
        <NoWidgetsScreen />
      ) : (
        <GestureHandlerRootView
          style={[isLandscape ? styles.landscapeRootView : styles.rootView]}
        >
          {isLayoutLocked ? renderNormalList() : renderDraggableList()}
        </GestureHandlerRootView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: hp("1%"),
    padding: 20,
  },
  hidden: {
    display: "none",
  },
  userWelcomeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 20,
  },
  userWelcome: {
    fontSize: 24,
    fontWeight: "bold",
    color: "gray",
  },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  rootView: {
    flex: 1,
    marginTop: 20,
  },
  landscapeRootView: {
    flex: 1,
    flexDirection: "row",
    marginTop: 20,
  },
  itemContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  landscapeItemContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    marginRight: 10,
  },
});

export default Dashboard;
