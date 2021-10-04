/**
 * # configureStore.js
 */

import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger"; //added just to show state logs
import thunk from "redux-thunk"; //added thunk for async tasks

import reducer from "../reducers";

const createStoreWithMiddleware = applyMiddleware(logger, thunk)(createStore);

/**
 * ## configureStore
 * @param {Object} the state with for keys:
 * contact etc..
 *
 */

 
export default function configureStore(initialState) {
  return createStoreWithMiddleware(reducer, initialState);
}
