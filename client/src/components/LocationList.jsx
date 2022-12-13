import React from 'react'
import Grid  from '@mui/material/Grid'
import LocationCard from './LocationCard'

const LocationList = ({locations}) => {

  const locationCards = locations.map(location => <ul key={location.id}><LocationCard id={location.id} location={location}/> </ul>)

  return (
    <div>
      <h2 align="center">Locations</h2>
        <Grid container spacing={2}>
          {locationCards}
        </Grid>
    </div>
  )
}

export default LocationList