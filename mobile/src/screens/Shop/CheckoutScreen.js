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
import Button from "../../components/Button";
import OrderSuccess from "../../components/OrderSuccess";
const CheckoutScreen = () => {
  const token = null;
  return (
    <SafeAreaView style={styles.container}>
      <OrderSuccess />

      {token && (
        <>
          {" "}
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
          <View style={styles.orderDetailContainer}>
            <View style={styles.orderDetail}>
              <Text style={styles.detailText}>SubTotal</Text>
              <Text style={styles.detailText}>$200</Text>
            </View>
            <View style={styles.orderDetail}>
              <Text style={styles.detailText}>Quantity</Text>
              <Text style={styles.detailText}>12</Text>
            </View>
            <View style={styles.orderDetail}>
              <Text style={styles.detailText}>Farmer name</Text>
              <Text style={styles.detailText}>Abebe bikila</Text>
            </View>
          </View>
          <View style={styles.checkoutBtnContainer}>
            <Button gradient>
              <Text style={styles.checkoutBtnText}>Place Order</Text>
            </Button>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    flex: 1,
    height: 200,
    borderRadius: 10,
    marginTop: 20,
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
  orderDetailContainer: {
    flex: 1,

    justifyContent: "center",
    padding: 15,
  },
  checkoutBtnContainer: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    justifyContent: "center",
  },
  detailText: {
    fontSize: 25,
    fontWeight: "500",
  },
  checkoutBtnText: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: "600",
  },
});
