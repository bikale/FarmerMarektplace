import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
const CheckoutScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.headerContainer}>
        <MaterialIcons name="arrow-back" size={25} color="black" />
        <Text style={styles.headerbtnText}>Cart</Text>
      </TouchableOpacity>

      <View style={[styles.paymentCardContainer, styles.shadow]}>
        <Image
          source={require("../../assets/visacard.png")}
          resizeMode="contain"
          style={styles.image}
        />
      </View>

      <View>
        <View style={styles.orderDetail}>
          <Text>total price</Text>
          <Text>total price</Text>
        </View>
        <View style={styles.orderDetail}>
          <Text>total price</Text>
          <Text>total price</Text>
        </View>
        <View style={styles.orderDetail}>
          <Text>total price</Text>
          <Text>total price</Text>
        </View>
      </View>

      <TouchableOpacity>
        <Text>Place Order</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  headerContainer: {
    flexDirection: "row",
    marginLeft: 25,
    marginTop: 5,
  },
  headerbtnText: {
    fontSize: 25,
    fontWeight: "bold",
    alignItems: "center",
  },
  paymentCardContainer: {
    height: 200,
    borderRadius: 10,
  },
  shadow: {
    shadowColor: "#323643",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 13,
    elevation: 2,
  },
  image: {
    height: 200,
    width: "100%",
    borderRadius: 20,
  },
  orderDetail: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
