import React, { useState, useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { StyledButton, StyledDialog, StyledTable, StyledTextField } from "../../components";
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

function escapeRegExp(value) {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

function QuickSearchToolbar(props) {
  return (
    <div align="right" class="space">
      <StyledTextField
        label="Search"
        value={props.value}
        onChange={props.onChange}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div>
  );
}

QuickSearchToolbar.propTypes = {
  clearSearch: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};



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
    { field: 'email', headerName: "E-mail", width: 150 },
    { field: 'date_of_birth', headerName: "DOB", width: 150 },
    { field: 'cust_code', headerName: "CustCode", width: 250 }
  ];


const [searchText, setSearchText] = React.useState('');

const requestSearch = (searchValue) => {
  setSearchText(searchValue);
  const searchRegex = new RegExp(escapeRegExp(searchValue), 'i');
  const filteredRows = customer.form.fields.data.filter((row) => {
    return Object.keys(row).some((field) => {
      return searchRegex.test(row[field].toString());
    });
  });
  setCustomers(filteredRows);
};


  return (
    <div style={{ height: 350, padding: 10 }}>

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
          components={{ Toolbar: QuickSearchToolbar }}
          rows={customers}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={5}
          componentsProps={{
           toolbar: {
             value: searchText,
             onChange: (event) => requestSearch(event.target.value),
             clearSearch: () => requestSearch(''),
           },
         }}
        />

    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(customerListPage);
