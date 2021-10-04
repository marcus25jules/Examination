import React from "react";
import PropTypes from "prop-types";
import Button from '@material-ui/core/Button';

const StyledButton = ({ label = "", testID, ...rest }) => {
  return <Button {...rest}>{label}</Button>;
};

StyledButton.propTypes = {
  label: PropTypes.string
};

export default StyledButton;
