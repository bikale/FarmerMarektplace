import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Button from "../components/Button";
const { width, height } = Dimensions.get("window");
function WelcomeScreen({ navigation }) {
  navigation.setOptions({ headerShown: false });

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Welcome To Farm Market.</Text>
        <Text style={styles.headerUnderText}>Buy local and enjoy fresh.</Text>
      </View>
      <View style={styles.bannerContainer}>
        <Image
          source={require("../assets/main2.png")}
          resizeMode="contain"
          style={{ width, height: height / 2, overflow: "visible" }}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <Button gradient onPress={() => navigation.navigate("SIGNIN")}>
          <View style={styles.btnTextContainer}>
            <Text style={styles.btnText}>Login</Text>
          </View>
        </Button>
        <Button shadow onPress={() => navigation.navigate("SIGNUP")}>
          <View style={styles.btnTextContainer}>
            <Text style={styles.btnText}>Signup</Text>
          </View>
        </Button>

        <TouchableOpacity style={styles.btnTextContainer}>
          <Text style={styles.forgetpassword}>Forget password ?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default WelcomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flex: 0.4,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#0AC4BA",
  },
  headerUnderText: {
    fontSize: 18,
    color: "#C5CCD6",
    marginTop: 12,
  },
  bannerContainer: {
    bottom: 50,
  },
  buttonsContainer: {
    flex: 0.5,
    justifyContent: "center",
    marginLeft: 50,
    marginRight: 50,
  },
  btnText: {
    fontSize: 17,
    fontWeight: "500",
  },
  btnTextContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  forgetpassword: {
    fontSize: 16,
    fontWeight: "500",
    color: "#C5CCD6",
    textDecorationLine: "underline",
  },
});
