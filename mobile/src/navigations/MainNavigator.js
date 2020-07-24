import React, { Fragment, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import AsyncStorage from "@react-native-community/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { AUTHENTICATE } from "../store/actionTypes/actionTypes";
import AuthNavigator from "./AuthNavigator";
import ShopNavigator from "./ShopNavigator";
import WelcomeScreen from "../screens/WelcomeScreen";
import { Image } from "react-native";

const Stack = createStackNavigator();

const MainNavigator = (props) => {
  const despatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    (async () => {
      try {
        const storedToken = await AsyncStorage.getItem("accestoken");
        if (storedToken !== null) {
          despatch({ type: AUTHENTICATE, token: JSON.parse(storedToken) });
        }
      } catch (err) {}
    })();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!token && (
          <Stack.Screen
            name="AUTH"
            component={AuthNavigator}
            options={{
              title: "Auth",
              headerShown: false,
            }}
          />
        )}

        {token && (
          <Stack.Screen
            name="SHOP"
            component={ShopNavigator}
            options={{ title: "shopping", headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
