import React from "react";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";

const StyledTextField = ({
  label = "",
  id = "",
  onChange,
  value,
  testID,
  ...rest
}) => {
  return (
    <TextField
      {...rest}
      id={id}
      label={label}
      value={value}
      onChange={onChange}
    />
  );
};

StyledTextField.propTypes = {
  id: PropTypes.string,
  onChange: PropTypes.function,
  value: PropTypes.string,
  label: PropTypes.string
};

StyledTextField.defaultProps = {
  id: "standard-basic"
};

export default StyledTextField;
