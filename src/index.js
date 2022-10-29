import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware, compose} from "redux";
import rootReducer from "./reducers";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk"


const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(reduxThunk)));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
