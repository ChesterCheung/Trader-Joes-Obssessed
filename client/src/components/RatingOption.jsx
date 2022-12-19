import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function RatingOption({rating, handleChange}) {
 


  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="rating-select">Rating</InputLabel>
      <Select
        labelId="rating-select"
        id="rating-select"
        value={rating}
        label="rating"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>1/5</MenuItem>
        <MenuItem value={2}>2/5</MenuItem>
        <MenuItem value={3}>3/5</MenuItem>
        <MenuItem value={4}>4/5</MenuItem>
        <MenuItem value={5}>5/5</MenuItem>
      </Select>
    </FormControl>
  );
}