import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function LocationOptions({locations, location, setLocation}) {

  const selectOptions = locations.map((location) => <MenuItem key={location.id} location={location} value={location.id}>{location.neighborhood}</MenuItem>)

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{ m: 1, minWidth: 300 }}>
        <InputLabel id="demo-simple-select-label">Location</InputLabel>
        <Select
          labelId="location"
          id="location"
          value={location}
          label="Location"
          onChange={(e) => setLocation(e.target.value)}
        >
          {selectOptions}
        </Select>
      </FormControl>
    </Box>
  );
}

