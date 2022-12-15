import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';

const ProductCard = () => {
   
    return (
        <div>
            <div>
                    <Card sx={{ maxWidth: 275 }} object-fit="scale-down">
                    <CardMedia
                        component="img"
                        height="375"
                        image="https://www.traderjoes.com/content/dam/trjo/products/m21002/74627.png/jcr:content/renditions/webp-1280.webp"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Name
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Category
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Price
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Location
                        </Typography>
                    </CardContent>
                    </Card>
            </div>
            
        </div>
      );
    }

export default ProductCard