import axios from "axios";

import {
  PLACEORDER,
  ORDERHISTORY,
  REMOVECART,
} from "../actionTypes/actionTypes";

//action for orders list for order history
export const orders = (orders) => {
  return {
    type: ORDERHISTORY,
    orders: orders,
  };
};

//action for remove cart after order placed
export const removeCart = () => {
  return {
    type: REMOVECART,
  };
};

//action creator for placing order /checkout
export const placeOrder = (carts, farmerid, totalQuantity, totalPrice) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`/customers/orders`, {
        carts,
        totalQuantity,
        totalPrice,
        farmerid,
      });
      dispatch(removeCart());
    } catch (err) {
      console.log(err);
    }
  };
};

//action creator for order history
export const orderHistory = () => {
  return async (dispatch) => {
    try {
      const {
        data: { data },
      } = await axios.get(`/customers/orders`);
      dispatch(orders(data));
    } catch (err) {
      console.log(err);
    }
  };
};
