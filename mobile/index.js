import { registerRootComponent } from "expo";
import axios from "axios";
import App, { store } from "./App";

axios.defaults.baseURL =
  "https://farmermarketfinal.uc.r.appspot.com/api/v1/farmermarket";
// axios.defaults.baseURL = "http://172.19.140.33:8080/api/v1/farmermarket";

axios.interceptors.request.use(
  (request) => {
    let { token } = store.getState().auth;
    request.headers.Authorization = `Bearer ${token}`;
    return request;
  },
  (error) => {
    console.warn(error.message);
    return Promise.reject(error);
  }
);
// axios.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     console.warn(error);
//     return Promise.reject(error);
//   }
// );
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
