import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import FarmerScreen from "../screens/Shop/FarmerScreen";
import ProductScreen from "../screens/Shop/ProductScreen";
import CartScreen from "../screens/Shop/CartScreen";
import CheckoutScreen from "../screens/Shop/CheckoutScreen";
import OrdersScreen from "../screens/Shop/OrdersScreen";

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
      <Stack.Screen
        name="CART"
        component={CartScreen}
        options={{ title: "CART" }}
      />
      <Stack.Screen
        name="CHECKOUT"
        component={CheckoutScreen}
        options={{ title: "CHECKOUT" }}
      />
      <Stack.Screen
        name="ORDERS"
        component={OrdersScreen}
        options={{ title: "ORDERS" }}
      />
    </Stack.Navigator>
  );
}
export default ShopNavigator;
