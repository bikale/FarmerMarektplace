import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { Menu } from "react-native-paper";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import MenuFooter from "../../components/MenuFooter";

export default function ProductScreen() {
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
        <Text style={styles.headerText}>List of products</Text>
      </View>

      <FlatList
        contentContainerStyle={styles.flatListConatiner}
        numColumns={2}
        data={DATA}
        renderItem={() => (
          <View style={[styles.cardsContainer, styles.shadow]}>
            <View style={styles.cardActions}>
              <Text style={styles.priceTag}>$25 </Text>
              <TouchableOpacity style={styles.button}>
                <Icon name="information-outline" size={35} color="#0AC4BA" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Icon name="cart-plus" size={35} color="#0AC4BA" />
              </TouchableOpacity>
            </View>
            <Image
              source={{
                uri:
                  "https://www.clipartkey.com/mpngs/m/89-895368_corn-clipart-transparent-png-corn-on-the-cob.png",
              }}
              style={styles.image}
            />
          </View>
        )}
        keyExtractor={(item) => item.id}
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
    top: 20,
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
    color: "#0AC4BA",
  },
});
