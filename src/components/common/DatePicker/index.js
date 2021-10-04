import React from "react";
import PropTypes from "prop-types";

import TextField from '@material-ui/TextField';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import DatePicker from '@material-ui/lab/DatePicker';


const StyledDatePicker = ({ label = "", value = "", onChange, testID, ...rest }) => {
return
 <LocalizationProvider dateAdapter={AdapterDateFns}>
   <DatePicker
    {...rest}
    id={id}
    label={label}
    value={value}
    onChange={onChange}
    renderInput={(params) => <TextField {...params} />}
    />
  </LocalizationProvider>
};


StyledDatePicker.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.function
};

export default StyledDatePicker;
