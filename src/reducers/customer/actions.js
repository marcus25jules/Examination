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
            });
  };

}



export function addCustomer(form) {
  return (dispatch, getState) => {
    var fields = getState().customer.form.fields;

    api.post(fields, CONSTANTS.ADD_CUSTOMER).then((response) => {

      if (typeof response !== 'undefined') {
        if(response.length > 0){
            dispatch(customerSuccess(response));
        }
      }
    }).catch(err => {
    });

   };
}
