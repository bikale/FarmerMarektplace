import axios from "axios";
import {
  ADDTOCART,
  REMOVECARTITEM,
  UPDATECART,
} from "../actionTypes/actionTypes";

//action for addToCart
export const addToCart = (product) => {
  return {
    type: ADDTOCART,
    product: product,
  };
};

//action for updatecart
export const updateCart = (product, cartAction) => {
  return {
    type: UPDATECART,
    product: product,
    cartAction: cartAction,
  };
};

//action for remove item from cart
export const removeItem = (product) => {
  return {
    type: REMOVECARTITEM,
    product: product,
  };
};
