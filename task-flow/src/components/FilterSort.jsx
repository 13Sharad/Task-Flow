import React from 'react';
import { Button, Select, MenuItem } from '@mui/material';

const FilterSort = () => {
  return (
    <div className="card flex justify-between items-center">
      <Select defaultValue="status" variant="outlined">
        <MenuItem value="status">Status</MenuItem>
        <MenuItem value="date">Date</MenuItem>
        <MenuItem value="priority">Priority</MenuItem>
      </Select>

      <div className="flex gap-4">
        <Button variant="contained" color="primary">Filter</Button>
        <Button variant="outlined" color="secondary">Clear</Button>
      </div>
    </div>
  );
};

export default FilterSort;
