import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';

export default function LocationFilterOptions({filter, setFilter, locations, handleResetFalse}) {

  const selectOptions = locations.map((location) => <MenuItem key={location.id} location={location} value={location.id}>{location.neighborhood}</MenuItem>)
  

  return (
    <Box sx={{ minWidth: 120 }}>
        <FormControl sx={{ m: 1, minWidth: 300 }}>
        <InputLabel id="demo-simple-select-label">Filter by Location</InputLabel>
        <Select
          labelId="filter"
          id="filter"
          value={filter}
          label="filter"
          onChange={(e) => {
            setFilter(e.target.value)
            handleResetFalse()
          }}
        >
          {selectOptions}
          {/* <MenuItem value={products}>All</MenuItem> */}
        </Select>
        </FormControl>
    </Box>
  );
}