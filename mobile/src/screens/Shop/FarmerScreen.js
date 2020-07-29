import React, { useEffect } from "react";
import { Text, StyleSheet, View, Image, Alert } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import FarmerCard from "../../components/FarmerCard";
import MenuFooter from "../../components/MenuFooter";
import { useDispatch, useSelector } from "react-redux";
import { getFarmers, selectedFarmer } from "../../store/actions/shop";
import { removeItem, deleteCart } from "../../store/actions/cart";
import RatingModal from "../../components/RatingModal";

export default function FarmerScreen({ navigation }) {
  const dispatch = useDispatch();
  const { farmers, farmerid } = useSelector((state) => state.shop);

  useEffect(() => {
    (async () => {
      try {
        await dispatch(getFarmers());
      } catch (error) {}
    })();
  }, []);

  const oneFarmerPolicy = (newSelectedfarmer, farmername) => {
    if (farmerid == null) return true;

    if (newSelectedfarmer != farmerid) {
      Alert.alert(
        "Select Customer",
        "Are you sure you wanna change the farmer",
        [
          {
            text: "Yes",
            onPress: () => {
              dispatch(selectedFarmer(newSelectedfarmer, farmername));
              dispatch(deleteCart());
              navigation.navigate("PRODUCTS");
            },
          },
          {
            text: "No",
            onPress: () => navigation.navigate("PRODUCTS"),
            style: "cancel",
          },
        ],
        { cancelable: false }
      );
    } else {
      return true;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Choose Farmer</Text>
      </View>
      <FlatList
        data={farmers}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              if (
                oneFarmerPolicy(item._id, `${item.firstname} ${item.lastname}`)
              ) {
                dispatch(
                  selectedFarmer(item._id, `${item.firstname} ${item.lastname}`)
                );
                navigation.navigate("PRODUCTS");
              }
            }}
          >
            <FarmerCard farmerDetail={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item._id}
        extraData={farmers}
      />
      <MenuFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  headerContainer: {},
  headerText: {
    fontSize: 20,
    color: "grey",
    fontWeight: "600",
    textAlign: "center",
  },
});
