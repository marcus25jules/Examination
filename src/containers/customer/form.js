import React, { useState, useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { StyledTextField, StyledButton } from "../../components";

//actions
import * as customerActions from "../../reducers/customer/actions";
import "../../assets/App.css";

/*
 *  Save that state
 */

function mapStateToProps(state) {
  return {
    customer: state.customer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...customerActions }, dispatch)
  };
}

const customerFormPage = (props) => {
  const { customer, actions } = props;

  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [date_of_birth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const history = useHistory();
  let { id } = useParams();

  useEffect(() => {
    var data = customer.form.fields.data;
    if (typeof id !== "undefined") {
      var index = data.findIndex((c) => String(c.id) === String(id));
      if (index !== -1) {
        setFirstName(data[index].first_name);
        setLastName(data[index].last_name);

        setEmail(data[index].email);
        setAddress(data[index].address);
      }
    }
  }, [id, customer.form.fields.data]);

  const eventSubmit = (event) => {
    event.preventDefault();

    var customerForm = {
      first_name: first_name,
      last_name: last_name,
      date_of_birth: date_of_birth,
      email: email,
      phone_number: phone_number,
      address: address
    };

    actions.addCustomer(customerForm);
    history.push("/");
  };

  const eventCancel = (event) => {
    history.push("/");
  };


  return (
    <div align="center">
      <form onSubmit={eventSubmit} class="form">
        <h1>Add Customer</h1>
        <div class="space">
          <StyledTextField
            label="First Name"
            value={first_name}
            onChange={(event) => {
              setFirstName(event.target.value);
            }}
            fullWidth
            required
          />
        </div>
        <div class="space">
          <StyledTextField
            label="Last Name"
            value={last_name}
            onChange={(event) => {
              setLastName(event.target.value);
            }}
            fullWidth
            required
          />
        </div>
        <div class="space">
          <StyledTextField
            label="Date of Birth"
            type="date"
            value={date_of_birth}
            onChange={(event) => {
              setDateOfBirth(event.target.value);
            }}
            fullWidth
            required
            InputLabelProps={{
              shrink: true,
            }}
          />

        </div>
        <div class="space">
          <StyledTextField
            label="E-mail"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            fullWidth
            type={"email"}
            required
          />
        </div>


        <div class="space">
          <StyledTextField
            label="Phone Number"
            value={phone_number}
            onChange={(event) => {
              setPhoneNumber(event.target.value);
            }}
            fullWidth
            type={"number"}
            required
          />
        </div>

        <div class="space">
          <StyledTextField
            label="Address"
            value={address}
            onChange={(event) => {
              setAddress(event.target.value);
            }}
            fullWidth
            required
          />
        </div>

        <div class="space">
          <StyledButton type="submit" label="Submit" />{" "}
          <StyledButton
            label="Cancel"
            onClick={() => {
              eventCancel();
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(customerFormPage);
