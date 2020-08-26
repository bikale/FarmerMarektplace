import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const FarmerCard = ({ farmerDetail: { firstname, lastname, farmerInfo } }) => {
  return (
    <View style={[styles.cardsContainer, styles.shadow]}>
      <View style={styles.farmerdetailContainer}>
        <Text style={styles.farmernameText}>{firstname}</Text>
        <Text style={styles.numberofProducts}>
          200 <Text style={{ fontSize: 15 }}>products</Text>
        </Text>
        <Text style={styles.farmerRate}>Rating: {farmerInfo.rating}</Text>
      </View>
      <>
        <Image
          source={{
            uri:
              "data:image/png;base64,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",
          }}
          style={styles.image}
        />
      </>
    </View>
  );
};

export default FarmerCard;

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
    minHeight: 160,
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
    width: 150,
    height: "100%",
    borderRadius: 45,
    borderWidth: 2,
    borderColor: "transparent",
  },
  farmerdetailContainer: {
    paddingTop: 40,
    paddingLeft: 20,
  },
  farmernameText: {
    fontSize: 26,
    fontWeight: "800",
    // color: "#b2ffff",
    // fontFamily: "monospace",
  },
  farmerRate: {
    fontSize: 12,
    color: "gold",
  },
  numberofProducts: {
    fontSize: 26,
    fontWeight: "800",
    color: "#32CD32",
    // fontFamily: "monospace",
  },
});
