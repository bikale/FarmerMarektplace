import React from "react";

import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { AppLoading } from "expo";
import ReduxThunk from "redux-thunk";
import { Provider as PaperProvider } from "react-native-paper";
import authReducer from "./src/store/reducers/auth";
import MainNavigator from "./src/navigations/MainNavigator";

// import farmersReducer from "./src/store/reducers/farmers";
// import productsReducer from "./src/store/reducers/products";
// import cartReducer from "./src/store/reducers/cart";
// import orderReducer from "./src/store/reducers/order";

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <MainNavigator />
      </PaperProvider>
    </Provider>
  );
}
