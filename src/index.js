import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { applyMiddleware, createStore, compose } from "redux";
import { Provider } from "react-redux";
import myReducers from "./Reducers/index";

import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(myReducers, composeEnhancer(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
