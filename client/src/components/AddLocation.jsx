import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';

export default function AddLocation({addLocation}) {
  const [neighborhood, setNeighborhood] = useState("")
  const [city, setCity] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e)=>{
    e.preventDefault()
    fetch("/addlocation", {
        method:"POST",
        headers: {"Content-Type": "application/json",},
        body: JSON.stringify({neighborhood, city}),
    })
    .then((r) => r.json())
    .then((location)=> addLocation(location))
    navigate("/locations")
    }

  return (
    <div>
        <form align="center" onSubmit={handleSubmit}>
        <Box align="center"
        sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        >
            <h2>Add Location</h2>
            <TextField
            id="locationNeigborhood"
            label="neighborhood"
            onChange={e => setNeighborhood(e.target.value)}
            value={neighborhood}
            />
            <TextField
            id="locationCity"
            label="city"
            onChange={(e) => setCity(e.target.value)}
            value={city}
            />
        </Box>
        <input type="submit" value="Add"></input>
        </form>
    </div>
  );
}
