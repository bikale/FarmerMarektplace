import { PLACEORDER, ORDERHISTORY } from "../actionTypes/actionTypes";

const initialState = { orders: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDERHISTORY:
      return { ...state, orders: action.orders };
    default:
      return state;
  }
};

export default reducer;
