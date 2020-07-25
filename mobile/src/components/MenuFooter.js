import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MenuFooter = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.menuContainer, styles.shadow]}>
        <View>
          <Text>menu 1</Text>
        </View>
        <View>
          <Text>menu 1</Text>
        </View>
        <View>
          <Text>menu 1</Text>
        </View>
        <View>
          <Text>menu 1</Text>
        </View>
      </View>
    </View>
  );
};

export default MenuFooter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    zIndex: 1,
  },
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    minHeight: 50,
    width: "100%",
    backgroundColor: "#f0f5f5",
    borderRadius: 10,
  },
  shadow: {
    shadowColor: "#323643",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 13,
    elevation: 2,
  },
});
