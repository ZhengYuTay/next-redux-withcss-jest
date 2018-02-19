import { createStore, combineReducers, compose, applyMiddleware } from "redux";

import rootReducer from "./reducers";

const isClient = typeof window !== "undefined";

const enhancers = compose(
  typeof window !== "undefined" && process.env.NODE_ENV !== "production"
    ? window.devToolsExtension && window.devToolsExtension()
    : f => f
);

const createStoreWithMiddleware = applyMiddleware()(createStore);

export default initialState =>
  createStoreWithMiddleware(
    combineReducers(rootReducer),
    initialState,
    enhancers
  );
