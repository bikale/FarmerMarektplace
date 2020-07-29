import {
  FARMERSLIST,
  SELECTEDFARMER,
  PRODUCTS,
  REMOVESHOP,
} from "../actionTypes/actionTypes";

const initialState = {
  farmers: [],
  farmerid: null,
  farmername: "",
  products: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FARMERSLIST:
      return { ...state, farmers: action.farmers };
    case SELECTEDFARMER:
      return {
        ...state,
        farmerid: action.farmerid,
        farmername: action.farmername,
      };
    case PRODUCTS:
      return { ...state, products: [...action.products] };
    case REMOVESHOP:
      return { ...state, ...initialState };
    default:
      return state;
  }
};

export default reducer;
