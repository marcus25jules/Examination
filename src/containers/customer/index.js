import React, { useState, useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { StyledButton, StyledDialog, StyledTable } from "../../components";
import "../../assets/App.css";



import * as customerActions from "../../reducers/customer/actions";

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

const customerListPage = (props) => {
  const { customer, actions } = props;
  const [customers, setCustomers] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [id, setId] = React.useState();
  const history = useHistory();


  useEffect(() => {
    if(customer.form.isFetching){
      actions.getCustomers();
    }
  });


  useEffect(() => {
    setCustomers(customer.form.fields.data);
  }, [customer.form.fields.data]);


  const eventAdd = () => {
    history.push("/form/add");
  };


  const handleEdit = (id) => {
    history.push("/form/update/" + id);
  };

  const columns = [
    {
    field: 'fullName',
    headerName: 'Full name',
    width: 250,
    valueGetter: (params) =>
      `${params.getValue(params.id, 'last_name') || ''}, ${
        params.getValue(params.id, 'first_name') || ''
      }`,
    },
    { field: 'email', headerName: "E-mail", width: 250 },
    { field: 'date_of_birth', headerName: "DOB", width: 250 },
    { field: 'cust_code', headerName: "CustCode", width: 250 }
  ];


  return (
    <div style={{ height: 400, width: "100%" }}>
    
      <div align="right" class="space">
        <StyledButton
          label="Add customer"
          onClick={() => {
            eventAdd();
          }}
          color="primary"
        />
      </div>

      <StyledTable
        rows={customers}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={5}
      />

    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(customerListPage);
