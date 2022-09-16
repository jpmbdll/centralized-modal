import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./store/index";
import "./index.css";
import App from "./App";
import PortalModal from "./components/UI/Modal";
import { ChakraProvider } from "@chakra-ui/react";
import "antd/dist/antd.css";

ReactDOM.render(
  <Provider store={store}>
    <ChakraProvider>
      <PortalModal />
      <App />
    </ChakraProvider>
  </Provider>,
  document.getElementById("root")
);
