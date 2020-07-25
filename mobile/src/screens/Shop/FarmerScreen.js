import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Avatar, Button, Card, IconButton } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import FarmerCard from "../../components/FarmerCard";

export default function FarmerScreen({ navigation }) {
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
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bsa",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97fs63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-14557s1e29d72",
      title: "Third Item",
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("PRODUCTS");
            }}
          >
            <FarmerCard />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        extraData={DATA}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
});
