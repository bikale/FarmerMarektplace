import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";

import { AUTHENTICATE, LOGOUT } from "../actionTypes/actionTypes";

//action for authentication
export const authenticate = (token) => {
  return {
    type: AUTHENTICATE,
    token: token,
  };
};

//action creator for login
export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`/auth/login`, { email, password });
      dispatch(authenticate(data.token));
      await AsyncStorage.setItem("accestoken", JSON.stringify(data.token));
    } catch (err) {
      console.log(err);
    }
  };
};
