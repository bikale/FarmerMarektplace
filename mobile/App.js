import React, { useEffect } from "react";
import { Button, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import axios from "axios";

const Stack = createStackNavigator();
function HomeScreen({ navigation }) {
  useEffect(() => {
    console.log("hiiiiiii");
    (async () => {
      console.log("zeeeee");
      try {
        let res = await axios.get("http://localhost:5000/hi");
        console.log(res);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  navigation.setOptions({ headerShown: false });
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Go to Notifications"
        onPress={() => navigation.navigate("Notifications")}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
