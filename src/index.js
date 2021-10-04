import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./lib/configureStore";

//Import State
import CustomerInitialState from "./reducers/customer/initialState";

import App from "./App";

function getInitialState() {
  const _initState = {
    customer: new CustomerInitialState()
  };
  return _initState;
}

const store = configureStore(getInitialState());

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>,
  rootElement
);
