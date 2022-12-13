import React from 'react'

const LocationList = () => {

  const locationCards = hospitals.map(hospital => <ul key={hospital.id}><HospitalCard id={hospital.id} hospital={hospital}/> </ul>)

  return (
    <div>
      <h2 align="center">Hospitals</h2>
        <Grid container spacing={2}>
          {hospitalCards}
        </Grid>
    </div>
  )
}

export default LocationList