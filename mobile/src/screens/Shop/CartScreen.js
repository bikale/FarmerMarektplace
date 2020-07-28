import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateCart, removeItem } from "../../store/actions/cart";

import MenuFooter from "../../components/MenuFooter";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const CartScreen = ({ navigation: { navigate }, route: { params } }) => {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalPrice } = useSelector(
    (state) => state.cart
  );
  const { farmerid } = useSelector((state) => state.shop);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => {
            {
              farmerid
                ? navigate("SHOP", { screen: "PRODUCT" })
                : navigate("SHOP");
            }
          }}
          style={{ alignItems: "flex-end" }}
        >
          <Text style={styles.headerText}>
            <MaterialIcons name="arrow-back" size={20} color="black" />
            Products
          </Text>
        </TouchableOpacity>

        <View>
          <Text style={styles.headerText}>Cart</Text>
          <Text style={styles.headerItemText}> {totalQuantity} items</Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            {
              items.length > 0 && navigate("CHECKOUT");
            }
          }}
          style={{ alignItems: "flex-end" }}
        >
          <Text style={styles.headerText}>
            CheckOut
            <MaterialIcons name="arrow-forward" size={20} color="black" />
          </Text>
          <Text style={styles.headerItemText}>
            Total <Text style={styles.headerPriceText}> $ {totalPrice}</Text>
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={styles.flatListConatiner}
        data={items}
        renderItem={({ item }) => (
          <View style={[styles.cardsContainer, styles.shadow]}>
            <View style={styles.cardContaint}>
              <View style={styles.cardContaintImage}>
                <Image
                  source={{
                    uri: item.photo,
                  }}
                  style={styles.image}
                />
              </View>

              <View style={styles.cardContaintDetail}>
                <View>
                  <Text style={styles.productDetail}>{item.name}</Text>
                  <Text style={styles.productUnitPrice}>$ {item.price}</Text>
                </View>
                <View style={{ left: 30, top: 10 }}>
                  <Text style={styles.productTotalPrice}>
                    $ {item.totalPrice}
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.cardActionContainer}>
              <TouchableOpacity
                onPress={() => {
                  dispatch(updateCart(item, 1));
                }}
              >
                <Text style={styles.cardActionBtnTxt}>+</Text>
              </TouchableOpacity>
              <View>
                <Text style={styles.cardActionBtnTxt}>{item.quantity}</Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  dispatch(updateCart(item, -1));
                }}
              >
                <Text style={styles.cardActionBtnTxt}>-</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  dispatch(removeItem(item));
                }}
              >
                <Icon name="delete" size={35} color="#A91B0D" />
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.name}
      />

      <MenuFooter />
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatListConatiner: {
    marginTop: 15,
    bottom: 25,
  },
  cardsContainer: {
    flex: 1,
    minHeight: 170,
    backgroundColor: "white",
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15,
    flexDirection: "row",
  },
  cardContaint: {
    flex: 4,
    left: 10,
    overflow: "visible",
    backgroundColor: "white",
    zIndex: 1,
    borderRadius: 10,
    flexDirection: "row",
  },
  cardContaintImage: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  cardContaintDetail: {
    flex: 3,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  productDetail: {
    fontSize: 20,
    fontWeight: "bold",
  },
  productUnitPrice: {
    fontSize: 13,
    color: "grey",
    fontWeight: "bold",
  },
  productTotalPrice: {
    fontSize: 25,
    color: "#32CD32",
    fontWeight: "bold",
    direction: "ltr",
  },
  cardActionContainer: {
    backgroundColor: "#32CD32",
    flex: 1,
    overflow: "hidden",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardActionBtnTxt: {
    fontSize: 25,
    color: "white",
    fontWeight: "600",
  },

  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  headerItemText: {
    color: "grey",
  },
  headerPriceText: {
    color: "#32CD32",
    fontSize: 20,
    fontWeight: "500",
  },
  headerContainer: {
    margin: 10,
    zIndex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  shadow: {
    shadowColor: "green",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 13,
    elevation: 2,
  },
  image: {
    width: 100,
    height: "80%",
    borderRadius: 5,
    borderColor: "transparent",
    backgroundColor: "transparent",
    overflow: "hidden",
  },
});
