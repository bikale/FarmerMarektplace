import {
  FARMERSLIST,
  SELECTEDFARMER,
  PRODUCTS,
} from "../actionTypes/actionTypes";

const initialState = { farmers: [], farmerid: null, products: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FARMERSLIST:
      return { ...state, farmers: action.farmers };
    case SELECTEDFARMER:
      return { ...state, farmerid: action.farmerid };
    case PRODUCTS:
      return { ...state, products: [...action.products] };
    default:
      return state;
  }
};

export default reducer;
