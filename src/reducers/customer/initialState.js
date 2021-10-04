/**
 * ## Imports
 */
const { Record } = require("immutable");
const { CUSTOMER } = require("../../constants/Customer").default;

const Form = Record({
  state: CUSTOMER,
  error: null,
  isFetching: true,
  fields: new (Record({
    data: [],
    lastId: 1
  }))()
});

var InitialState = Record({
  form: new Form()
});
export default InitialState;
