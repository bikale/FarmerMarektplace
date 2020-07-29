import { productList } from "../actions/shop";
import {
  ADDTOCART,
  REMOVECARTITEM,
  UPDATECART,
  REMOVECART,
} from "../actionTypes/actionTypes";
//[{ name ,price,photo,quantity,totalItemPrice }]
const initialState = { items: [], totalQuantity: 0, totalPrice: 0 };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDTOCART:
      return {
        ...state,
        items: checkCartItem(state.items, action.product),
        totalQuantity: state.totalQuantity + 1,
        totalPrice: state.totalPrice + action.product.price,
      };
    case UPDATECART:
      return {
        ...state,
        ...updateCart(state, action.product, action.cartAction),
      };
    case REMOVECARTITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.name != action.product.name),
        totalQuantity: state.totalQuantity - action.product.quantity,
        totalPrice: state.totalPrice - action.product.totalItemPrice,
      };
    case REMOVECART:
      return {
        ...state,
        ...initialState,
      };
    default:
      return state;
  }
};

export default reducer;

//helpers

function checkCartItem(items, product) {
  const index = items.findIndex((item) => item.name == product.name);
  if (index >= 0) {
    items[index].quantity += 1;
    items[index].totalItemPrice += product.price;
    return [...items];
  }
  return [...items, { ...product, totalItemPrice: product.price, quantity: 1 }];
}

//it will update the cart by the action triggered it will decrease or increase the quantity of the item in the cart
function updateCart(cartState, product, cartAction) {
  // cartAction would be  -1 or 1
  const { items, totalQuantity, totalPrice } = cartState;
  let index = items.findIndex((item) => item.name == product.name);

  if (items[index].quantity + cartAction == 0) {
    // the product  quantity is one and the action is -
    items.splice(index, 1);
  } else {
    items[index].quantity += cartAction;
    items[index].totalItemPrice += product.price * cartAction;
  }

  return {
    ...items,
    totalQuantity: totalQuantity + cartAction,
    totalPrice: totalPrice + product.price * cartAction,
  };
}
