import Axios from "axios";
import React, { useEffect } from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

import { useDispatch, useSelector } from "react-redux";
import { selectedFarmer, getProducts } from "../../store/actions/shop";
import { addToCart } from "../../store/actions/cart";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import MenuFooter from "../../components/MenuFooter";

export default function ProductScreen({ navigation }) {
  const xyz =
    "https://storage.googleapis.com/farmermarket/1594789748454tomatoes-4238247_1920.jpg";
  const dispatch = useDispatch();
  const { farmerid, products } = useSelector((state) => state.shop);
  useEffect(() => {
    (async () => {
      try {
        await dispatch(getProducts(farmerid));
      } catch (error) {}
    })();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>List of products</Text>
      </View>

      <FlatList
        contentContainerStyle={styles.flatListConatiner}
        numColumns={2}
        data={products}
        renderItem={({ item }) => (
          <View style={[styles.cardsContainer, styles.shadow]}>
            <View style={styles.cardActions}>
              <Text style={styles.priceTag}>$ {item.price}</Text>
              <TouchableOpacity style={styles.button}>
                <Icon name="information-outline" size={35} color="#32CD32" />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  dispatch(
                    addToCart({
                      name: item.name,
                      price: item.price,
                      photo: item.photo,
                    })
                  );
                }}
              >
                <Icon name="cart-plus" size={35} color="#32CD32" />
              </TouchableOpacity>
            </View>
            <Image
              source={{
                uri: item.photo,
              }}
              style={styles.image}
            />
          </View>
        )}
        keyExtractor={(item) => item._id}
        extraData={products}
      />

      <MenuFooter />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    flexGrow: 1,
    justifyContent: "center",
  },
  flatListConatiner: {
    flexGrow: 1,
    justifyContent: "center",
    margin: 7,
    bottom: 20,
    marginTop: 25,
  },
  cardsContainer: {
    minHeight: 170,
    backgroundColor: "white",
    borderRadius: 10,
    margin: 5,
    marginTop: 15,
    minWidth: 170,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: "100%",
    borderRadius: 25,
    borderColor: "transparent",
    backgroundColor: "transparent",
    left: 15,
    top: 2,
    overflow: "hidden",
  },
  shadow: {
    shadowColor: "green",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 13,
    elevation: 2,
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  headerContainer: {
    top: 10,
    left: 20,
    zIndex: 1,
  },
  cardActions: {
    top: 10,
  },
  button: {
    paddingTop: 10,
  },
  priceTag: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#32CD32",
  },
});
