import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/actions/auth";

import MatIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FeatherIcon from "react-native-vector-icons/Feather";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";

import { useNavigation } from "@react-navigation/native";
import { Badge } from "react-native-paper";

const MenuFooter = () => {
  const dispatch = useDispatch();
  const { totalQuantity } = useSelector((state) => state.cart);
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <View style={[styles.menuContainer, styles.shadow]}>
        <TouchableOpacity
          onPress={async () => {
            await dispatch(logout);
            navigate("FARMERS");
          }}
        >
          <MatIcon name="home-outline" size={40} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Ionicons name="ios-notifications-outline" size={31} color="black" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigate("CART");
          }}
        >
          <View>
            <Badge
              style={{
                zIndex: 1,
                top: 12,
                backgroundColor: "red",
              }}
            >
              {totalQuantity}
            </Badge>
            <FeatherIcon name="shopping-cart" size={33} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={async () => {
            navigate("ORDERS");
          }}
        >
          <FontAwesomeIcon name="history" size={27} color="black" />
          <Text style={styles.logoutBtn}>orders</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={async () => {
            await dispatch(logout());
            navigate("AUTH");
          }}
        >
          <MatIcon name="logout" size={30} />
          <Text style={styles.logoutBtn}>logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MenuFooter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    bottom: 20,
    left: 15,
    right: 15,
    zIndex: 1,
  },
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    minHeight: 50,
    width: "100%",
    backgroundColor: "#f0f5f5",
    borderRadius: 10,
  },
  shadow: {
    shadowColor: "#323643",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 13,
    elevation: 2,
  },
  logoutBtn: {
    fontSize: 12,
    fontWeight: "600",
  },
});
