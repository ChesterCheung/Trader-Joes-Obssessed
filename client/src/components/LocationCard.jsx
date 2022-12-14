import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function LocationCard({location}) {
  return (
    <div className="container">
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h6" component="div">
          {location.neighborhood}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {location.city}
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
}