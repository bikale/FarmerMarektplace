import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import SignIn from "../screens/Auth/SignInScreens";
import SignUp from "../screens/Auth/SignUpScreens";
import WelcomeScreen from "../screens/WelcomeScreen";
import { Image } from "react-native";

const Stack = createStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackImage: () => <HeaderBackImage />,
        headerBackTitleVisible: false,
        headerStyle: {
          height: 80,
          borderBottomColor: "transparent",
          elevation: 0,
        },
        headerLeftContainerStyle: {
          alignItems: "center",
          paddingRight: 16,
          marginLeft: 32,
        },
      }}
    >
      <Stack.Screen name="WELCOME" component={WelcomeScreen} />
      <Stack.Screen name="SIGNIN" component={SignIn} />
      <Stack.Screen name="SIGNUP" component={SignUp} />
    </Stack.Navigator>
  );
}

function HeaderBackImage() {
  return (
    <Image
      style={{ width: 40, height: 40, overflow: "hidden" }}
      source={require("../assets/back.png")}
    />
  );
}

export default AuthNavigator;
