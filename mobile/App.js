import React from "react";

import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { AppLoading } from "expo";
import ReduxThunk from "redux-thunk";
import { Provider as PaperProvider } from "react-native-paper";
import MainNavigator from "./src/navigations/MainNavigator";

import authReducer from "./src/store/reducers/auth";
import shopReducer from "./src/store/reducers/shop";
import cartReducer from "./src/store/reducers/cart";
import orderReducer from "./src/store/reducers/order";

const rootReducer = combineReducers({
  auth: authReducer,
  shop: shopReducer,
  cart: cartReducer,
  order: orderReducer,
});

export const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <MainNavigator />
      </PaperProvider>
    </Provider>
  );
}
