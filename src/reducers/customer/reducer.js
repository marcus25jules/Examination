/**
 * ## Imports
 *
 * The actions supported
 */
const InitialState = require("./initialState").default;

const {
  ON_FORM_FIELD_CHANGE,
  CUSTOMER_SUCCESS,
  CUSTOMER_REQUEST
} = require("../../constants/Customer").default;

const initialState = new InitialState();

/**
 * ## Customer Reducer function
 * @param {Object} state - initialState
 * @param {Object} action - type and payload
 */

export default function customerReducer(state = initialState, action) {
  if (!(state instanceof InitialState)) return initialState.merge(state);

  switch (action.type) {
    case CUSTOMER_SUCCESS:
      return state.setIn(["form", "fields", "data"], action.payload)
        .setIn(["form", "isFetching"], false);

    case CUSTOMER_REQUEST:
      return state.setIn(["form", "isFetching"], true);

    case ON_FORM_FIELD_CHANGE:
      const { field, value } = action.payload;
      return state.setIn(["form", "fields", field], value);

    default:
      break;
  }

  return state;
}
