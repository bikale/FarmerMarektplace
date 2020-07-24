import { registerRootComponent } from "expo";
import axios from "axios";
import App from "./App";

axios.defaults.baseURL =
  "https://farmermarketapi.herokuapp.com/api/v1/farmermarket";

axios.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => {
    console.warn(error);
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
