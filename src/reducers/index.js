/**
 * # reducers
 *
 * This class combines all the reducers into one
 *
 */

/**
 * ## Imports
 */
import customer from "./customer/reducer";
import { combineReducers } from "redux";

/**
 * ## CombineReducers
 * the rootReducer will call each and every reducer with the state and action
 * EVERY TIME there is a basic action
 */
const rootReducer = combineReducers({
  customer
});

export default rootReducer;
