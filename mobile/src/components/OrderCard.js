import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const OrderCard = ({ orderItem: { name, photo, price, quantity } }) => {
  return (
    <View style={[styles.cardsContainer, styles.shadow]}>
      <View style={styles.orderDetailContainer}>
        <Text style={styles.orderProductName}>{name}</Text>
        <Text style={styles.numberofProducts}>quantity : {quantity}</Text>
        <Text style={styles.numberofProducts}>price :{price} </Text>
      </View>
      <>
        <Image
          source={{
            uri: photo,
          }}
          style={styles.image}
        />
      </>
    </View>
  );
};

export default OrderCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  cardsContainer: {
    justifyContent: "space-between",
    marginRight: 20,
    marginLeft: 20,
    marginTop: 20,
    minHeight: 80,
    backgroundColor: "white",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  shadow: {
    shadowColor: "#323643",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 13,
    elevation: 2,
  },
  image: {
    width: 70,
    height: "100%",
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "transparent",
  },
  orderDetailContainer: {
    paddingTop: 40,
    paddingLeft: 20,
  },
  orderProductName: {
    fontSize: 23,
    fontWeight: "600",
    // color: "#b2ffff",
    // fontFamily: "monospace",
  },
  farmerRate: {
    fontSize: 12,
    color: "gold",
  },
  numberofProducts: {
    fontSize: 13,
    fontWeight: "600",
    color: "#32CD32",
    // fontFamily: "monospace",
  },
});
