import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";

import { placeOrder } from "../../store/actions/order";

import { useDispatch, useSelector } from "react-redux";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Button from "../../components/Button";
import OrderSuccess from "../../components/OrderSuccess";

const CheckoutScreen = ({ navigation: { navigate } }) => {
  const dispatch = useDispatch();
  const {
    cart: { items, totalQuantity, totalPrice },
    shop: { farmername, farmerid },
  } = useSelector((state) => state);

  const [orderplaced, setstate] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      {!orderplaced && (
        <>
          <TouchableOpacity
            style={styles.headerContainer}
            onPress={() => {
              navigate("CART");
            }}
          >
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
              <Text style={styles.detailTextRight}>$ {totalPrice}</Text>
            </View>
            <View style={styles.orderDetail}>
              <Text style={styles.detailText}>Quantity</Text>
              <Text style={styles.detailTextRight}>{totalQuantity}</Text>
            </View>
            <View style={styles.orderDetail}>
              <Text style={styles.detailText}>Farmer name</Text>
              <Text style={styles.detailTextRight}>{farmername}</Text>
            </View>
          </View>
          <View style={styles.checkoutBtnContainer}>
            <Button
              gradient
              onPress={async () => {
                await dispatch(
                  placeOrder(items, farmerid, totalQuantity, totalPrice)
                );
                setstate(true);
              }}
            >
              <Text style={styles.checkoutBtnText}>Place Order</Text>
            </Button>
          </View>
        </>
      )}
      {orderplaced && (
        <OrderSuccess
          changeState={() => {
            setstate(false);
          }}
        />
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
    fontWeight: "400",
    color: "#32CD32",
  },
  detailTextRight: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#32CD32",
  },
  checkoutBtnText: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: "600",
  },
});
