import axios from "axios";
import {
  FARMERSLIST,
  SELECTEDFARMER,
  PRODUCTS,
} from "../actionTypes/actionTypes";

//action for farmer lsit
export const farmerslistAction = (farmers) => {
  return {
    type: FARMERSLIST,
    farmers: farmers,
  };
};

//action creator for login
export const getFarmers = () => {
  return async (dispatch) => {
    try {
      const {
        data: { data },
      } = await axios.get(`/customers/farmers`);
      dispatch(farmerslistAction(data));
    } catch (err) {
      console.log(err);
    }
  };
};

//action for selected farmer id
export const selectedFarmer = (farmerid, farmername) => {
  return {
    type: SELECTEDFARMER,
    farmerid: farmerid,
    farmername: farmername,
  };
};

//action for products
export const productList = (products) => {
  return {
    type: PRODUCTS,
    products: products,
  };
};

//action creator for products list
export const getProducts = (farmerid) => {
  return async (dispatch) => {
    try {
      const {
        data: { data },
      } = await axios.get(`/customers/farmers/${farmerid}`);
      dispatch(productList(data));
    } catch (err) {
      console.log(err);
    }
  };
};
