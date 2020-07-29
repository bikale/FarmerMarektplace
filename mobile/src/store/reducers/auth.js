import { AUTHENTICATE, LOGIN, LOGOUT } from "../actionTypes/actionTypes";

const initialState = { token: null };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return { ...state, token: action.token };
    case LOGOUT:
      return { ...state, token: null };
    default:
      return state;
  }
};

export default reducer;
