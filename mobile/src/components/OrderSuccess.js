import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Button from "./Button";
import { useNavigation } from "@react-navigation/native";
const OrderSuccess = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.successImgContainer}>
        <Image
          source={require("../assets/ordersuccess.jpg")}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
      <View>
        <Text style={styles.ordersuccessText}>Order Successfully Placed !</Text>
      </View>
      <View>
        <Text style={styles.orderDetailText}>
          Your order has been Successfully placed and would be processed for
          pick up
        </Text>
      </View>
      <View style={styles.continueBtn}>
        <Button
          gradient
          onPress={() => {
            props.changeState();
            navigation.navigate("FARMERS");
          }}
        >
          <Text style={styles.shoppingBtnText}>Continue Shopping</Text>
        </Button>
      </View>
    </View>
  );
};

export default OrderSuccess;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "space-around",
  },
  successImgContainer: {
    borderRadius: 20,
  },

  image: {
    height: 200,
    width: "100%",
  },
  ordersuccessText: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  orderDetailText: {
    fontSize: 17,
    color: "grey",
    textAlign: "center",
  },
  continueBtn: {
    marginRight: 40,
    marginLeft: 40,
  },
  shoppingBtnText: {
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold",
  },
});
