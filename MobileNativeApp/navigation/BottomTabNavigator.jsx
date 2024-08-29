import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Dashboard from "../screens/Dashboard";
import Menu from "../screens/Menu";
import Icon from "react-native-vector-icons/Ionicons";
import Alerts from "../screens/Alerts";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === "Dashboard") {
              iconName = "albums-outline";
            } else if (route.name === "Alerts") {
              iconName = "notifications";
            } else if (route.name === "Menu") {
              iconName = "menu-outline";
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Dashboard" component={Dashboard} />
        <Tab.Screen name="Alerts" component={Alerts} />
        <Tab.Screen name="Menu" component={Menu} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNavigator;
