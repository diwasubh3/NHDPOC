// import React from "react";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { View, Text, StyleSheet } from "react-native";
// import { useVisibility } from "../context/VisibilityContext";
// import NoWidgetsScreen from "../screens/NoWidgets";
// import Orders from "../components/Orders";
// import Maps from "../components/Maps";

// const Dashboard = () => {
//   const { view1Visible, view2Visible } = useVisibility();
//   const user = "Sahil";
//   return (
//     <SafeAreaView style={styles.container}>
//       <View>
//         <Text style={styles.userWelcome}>
//           Welcome Back, <Text style={styles.userName}>{user}</Text>
//         </Text>
//       </View>
//       {!view1Visible && !view2Visible ? (
//         <NoWidgetsScreen />
//       ) : (
//         <>
//           {view1Visible && <Orders />}
//           {view2Visible && <Maps />}
//         </>
//       )}
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     gap: 20,
//     alignItems: "center",
//     justifyContent: "center",
//     padding: 20,
//   },
//   userWelcome: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "gray",
//   },
//   userName: {
//     color: "#000",
//   },
// });

// export default Dashboard;
