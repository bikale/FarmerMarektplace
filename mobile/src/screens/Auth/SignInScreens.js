import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useDispatch } from "react-redux";
import { TextInput } from "react-native-paper";

import Button from "../../components/Button";
import { login } from "../../store/actions/auth";

function SignIn({ navigation }) {
  const dispatch = useDispatch();
  const [state, setstate] = useState({
    email: "",
    password: "",
    loading: false,
    error: false,
  });
  const loginHandler = async () => {
    setstate((prevState) => ({ ...prevState, loading: true, error: false }));
    try {
      await dispatch(login(state.email, state.password));
      navigation.navigate("SHOP");
    } catch (error) {
      setstate((prevState) => ({
        ...prevState,
        loading: false,
        error: "errorsssss",
      }));
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.login}>
        <Text style={styles.headerText}>Login</Text>
        <View style={styles.inputContainer}>
          <TextInput
            mode="outlined"
            label="Email"
            placeholder="Enter Your email Here"
            value={state.email}
            onChangeText={(text) => {
              setstate((prevState) => ({ ...prevState, email: text }));
            }}
            autoCapitalize="none"
            autoCorrect={false}
          />

          <TextInput
            mode="outlined"
            placeholder="Enter Your Password Here"
            label="Password"
            value={state.password}
            onChangeText={(text) => {
              setstate((prevState) => ({ ...prevState, password: text }));
            }}
          />
          <Button gradient onPress={loginHandler}>
            <View style={styles.btnTextContainer}>
              <Text style={styles.btnText}>Login</Text>
            </View>
          </Button>
          <TouchableOpacity style={styles.btnTextContainer}>
            <Text style={styles.forgetpassword}>Forget password ?</Text>
          </TouchableOpacity>
          {state.loading && <ActivityIndicator size="large" color="#0000ff" />}
          {state.error && <Text>{state.error}</Text>}
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

export default SignIn;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  login: {
    paddingRight: 0,
    paddingLeft: 30,
    paddingBottom: 0,
    paddingTop: 30,
    flex: 1,
  },
  headerText: {
    fontSize: 26,
    fontWeight: "500",
  },
  inputContainer: {
    paddingRight: 40,
    paddingLeft: 10,
    marginTop: 0,
    justifyContent: "center",
    flex: 1,
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
