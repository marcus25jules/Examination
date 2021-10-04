import React from "react";
import PropTypes from "prop-types";
import { DataGrid } from '@material-ui/data-grid';

const StyledTable = ({ rows = [], columns = [], pageSize, rowsPerPageOptions, ...rest }) => {
  return <DataGrid
       rows={rows}
       columns={columns}
       pageSize={pageSize}
       rowsPerPageOptions={[rowsPerPageOptions]}
     />
};


StyledTable.propTypes = {
  rows: PropTypes.array,
  columns: PropTypes.array,
  pageSize: PropTypes.number,
  rowsPerPageOptions: PropTypes.number
};

export default StyledTable;
