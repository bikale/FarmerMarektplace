import React, { useEffect } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import FarmerCard from "../../components/FarmerCard";
import MenuFooter from "../../components/MenuFooter";
import { useDispatch, useSelector } from "react-redux";
import { getFarmers, selectedFarmer } from "../../store/actions/shop";

export default function FarmerScreen({ navigation }) {
  const dispatch = useDispatch();
  const { farmers } = useSelector((state) => state.shop);

  useEffect(() => {
    (async () => {
      try {
        await dispatch(getFarmers());
      } catch (error) {}
    })();
  }, []);

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
              dispatch(selectedFarmer(item._id));
              navigation.navigate("PRODUCTS");
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
