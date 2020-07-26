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

import MenuFooter from "../../components/MenuFooter";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
const CartScreen = ({ navigation: { navigate }, route: { params } }) => {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
    {
      id: "bd7acbea-sc1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605s-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-s3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
    {
      id: "bd7acbea-sc1sb1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605ss-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-s3da1-4s71f-bd96-145571e29d72",
      title: "Third Item",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.headerText}>Cart</Text>
          <Text style={styles.headerItemText}> 4 items</Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            navigate("CHECKOUT");
          }}
          style={{ alignItems: "flex-end" }}
        >
          <Text style={styles.headerText}>Checkout</Text>
          <Text style={styles.headerItemText}>
            Total <Text style={styles.headerPriceText}> $200</Text>
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={styles.flatListConatiner}
        data={DATA}
        renderItem={() => (
          <View style={[styles.cardsContainer, styles.shadow]}>
            <View style={styles.cardContaint}>
              <View style={styles.cardContaintImage}>
                <Image
                  source={{
                    uri:
                      "https://storage.googleapis.com/farmermarket/1594789748454tomatoes-4238247_1920.jpg",
                  }}
                  style={styles.image}
                />
              </View>

              <View style={styles.cardContaintDetail}>
                <View>
                  <Text style={styles.productDetail}>
                    description dddddddddddd
                  </Text>
                  <Text style={styles.productUnitPrice}>$0.05</Text>
                </View>
                <View style={{ left: 30, top: 10 }}>
                  <Text style={styles.productTotalPrice}>$75</Text>
                </View>
              </View>
            </View>

            <View style={styles.cardActionContainer}>
              <TouchableOpacity>
                <Text style={styles.cardActionBtnTxt}>+</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.cardActionBtnTxt}>4</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.cardActionBtnTxt}>-</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon name="delete" size={35} color="#A91B0D" />
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
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
    fontSize: 30,
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
