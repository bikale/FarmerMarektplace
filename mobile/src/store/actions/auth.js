import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";

import {
  AUTHENTICATE,
  LOGOUT,
  REMOVECART,
  REMOVESHOP,
} from "../actionTypes/actionTypes";

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

//action for remove farmers information when the user logout
export const emptyShop = () => {
  return {
    type: REMOVESHOP,
  };
};

//action for remove cart information when the user logout
export const removeCart = () => {
  return {
    type: REMOVECART,
  };
};

//action creator for logout
export const logout = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch(authenticate(null));
      dispatch(emptyShop());
      dispatch(removeCart());
      await AsyncStorage.removeItem("accestoken");
    } catch (err) {
      console.log(err);
    }
  };
};
