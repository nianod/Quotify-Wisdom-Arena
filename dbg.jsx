

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import store from "./app/store";
import { Provider } from "react-redux";
import { injectStore } from "./utils/axiosCreate";
import App from "./App";

injectStore(store);

const getQuote = ReactDOM.createRoot(document.getElementById("getQuote"));
getQuote.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);