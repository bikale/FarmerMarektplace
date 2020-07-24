import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import FarmerScreen from "../screens/Shop/FarmerScreen";
import ProductScreen from "../screens/Shop/ProductScreen";

const Stack = createStackNavigator();

function ShopNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="FARMERS"
        component={FarmerScreen}
        options={{ title: "FARMERS" }}
      />
      <Stack.Screen
        name="PRODUCTS"
        component={ProductScreen}
        options={{ title: "PRODUCTS" }}
      />
    </Stack.Navigator>
  );
}
export default ShopNavigator;
