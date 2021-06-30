import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createReduxStore } from "./redux";
import AppContainer from "./AppContainer";

const store = createReduxStore();

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById("app")
);
