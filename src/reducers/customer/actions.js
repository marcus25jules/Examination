/**
 * ## Imports
 *
 * The actions supported
 */
const {
  CUSTOMER,
  ON_FORM_FIELD_CHANGE,
  CUSTOMER_SUCCESS,
  CUSTOMER_REQUEST
} = require("../../constants/Customer").default;


import {api} from "../../lib/Api";
import CONSTANTS from "../../lib/constants"

export function customerState() {
  return {
    type: CUSTOMER
  };
}

export function customerSuccess(json) {
  return {
    type: CUSTOMER_SUCCESS,
    payload: json
  };
}

export function customerRequest() {
  return {
    type: CUSTOMER_REQUEST
  };
}


export function onFormFieldChange(field, value) {
  return {
    type: ON_FORM_FIELD_CHANGE,
    payload: { field: field, value: value }
  };
}

export function getCustomers() {

  return (dispatch, getState) => {
    var fields = getState().customer.form.fields;

            dispatch(customerRequest());

            api.get(null, CONSTANTS.ALL_CUSTOMER).then((response) => {

              if (typeof response !== 'undefined') {
                if(response.length > 0){
                    dispatch(customerSuccess(response));
                }
              }
            }).catch(err => {
                //dispatch(pokemonFailure(err));
            });
  };


}

export function addCustomer(form) {
  return (dispatch, getState) => {
    var fields = getState().customer.form.fields;

    console.log(fields);

    api.post(fields, CONSTANTS.ADD_CUSTOMER).then((response) => {

      if (typeof response !== 'undefined') {
        if(response.length > 0){
            dispatch(customerSuccess(response));
        }
      }
    }).catch(err => {
        //dispatch(pokemonFailure(err));
    });


    // if (typeof form.id !== "undefined") {
    //   var index = fields.data.findIndex(
    //     (c) => String(c.id) === String(form.id)
    //   );
    //   fields.data[index] = form;
    // } else {
    //   form.id = fields.lastId;
    //   fields.data.push(form);
    //   dispatch(onFormFieldChange("lastId", fields.lastId + 1));
    // }


  };
}



export function deleteCustomer(id) {
  return (dispatch, getState) => {
    var fields = getState().customer.form.fields;

    if (typeof id !== "undefined") {
      var index = fields.data.findIndex((c) => String(c.id) === String(id));
      if (index !== -1) {
        fields.data.splice(index, 1);
        dispatch(customerSuccess(fields.data));
      }
    }
  };
}
