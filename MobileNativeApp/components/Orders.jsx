import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import ClientData from "../data/ClientData.json";
import { SearchBar } from "react-native-elements";
import Icon from "react-native-vector-icons/Ionicons";
import React, { useState } from "react";
import { useVisibility } from "../context/VisibilityContext";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";


const Orders = () => {
  const clientData = ClientData.clientData;
  const [searchQuery, setSearchQuery] = useState("");
  const { isLayoutLocked, isLandscape } = useVisibility();

  const renderClientItem = ({ item }) => (
    <View style={styles.clientItem}>
      <View style={styles.clientContainer}>
        <Text style={styles.clientTitle}>{item.name}</Text>
        <View style={styles.clientButtons}>
          <TouchableOpacity>
            <Icon
              style={styles.clientIcon}
              name="print"
              size={24}
              color="#000"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              style={styles.clientIcon}
              name="copy"
              size={24}
              color="#000"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon style={styles.clientIcon} name="eye" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={[styles.clientText, getStatusStyle(item.status)]}>
        Status: {item.status}
      </Text>
      <Text style={styles.clientText}>Order Number: {item.orderNumber}</Text>
      <Text style={styles.clientText}>Address: {item.address}</Text>
      <Text style={styles.clientText}>Report Type: {item.reportType}</Text>
    </View>
  );

  const filteredClientData = clientData.filter((client) =>
    client.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const onSearch = (query) => {
    console.log("Search for:", query);
  };

  const getStatusStyle = (status) => {
    switch (status.toLowerCase()) {
      case "incomplete":
      case "in-process":
        return styles.inProcess;
      case "voided":
        return styles.voided;
      case "complete":
        return styles.complete;
      default:
        return {};
    }
  };

  return (
    <View
      style={isLandscape ? styles.landscapeListContainer : styles.listContainer}
    >
      <View style={styles.innerListContainer}>
        <Text style={styles.title}>Orders List</Text>
        <SearchBar
          containerStyle={styles.searchBarContainer}
          inputContainerStyle={styles.searchBarInput}
          inputStyle={styles.searchBarInputText}
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
          onSubmitEditing={() => onSearch(searchQuery)}
        />
      </View>
      <View style={styles.flatListContainer}>
        <Text style={styles.subtitle}>{filteredClientData.length} Orders</Text>
        <FlatList
          data={filteredClientData}
          renderItem={renderClientItem}
          keyExtractor={(item) => item.id.toString()}
          scrollEnabled={isLayoutLocked}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: wp("90%"),
    backgroundColor: "#fff",
    borderRadius: 20,
    overflow: "hidden",
  },
  landscapeListContainer: {
    width: wp("90%"),
    height: hp("34%"),
    backgroundColor: "#fff",
    borderRadius: 20,
    overflow: "hidden",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 15,
    color: "tomato",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "gray",
    paddingHorizontal: 15,
  },
  innerListContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  flatListContainer: {
    height: hp("32%"),
  },
  clientContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  clientTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#3394ED",
  },
  clientItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  clientButtons: {
    flexDirection: "row",
  },
  clientIcon: {
    margin: 5,
    marginLeft: 0,
  },
  clientText: {
    fontSize: 16,
  },
  inProcess: {
    color: "#ffa500",
  },
  voided: {
    color: "#ff0000",
  },
  complete: {
    color: "#008000",
  },
  searchBarContainer: {
    backgroundColor: "transparent",
    borderBottomColor: "transparent",
    borderTopColor: "transparent",
  },
  searchBarInput: {
    backgroundColor: "#e0e0e0",
    height: hp("4%"),
    width: wp("35%"),
    borderRadius: 50,
  },
  searchBarInputText: {
    color: "#000",
  },
});

export default Orders;
