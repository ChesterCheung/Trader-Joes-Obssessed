import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const ProductCard = ({product}) => {
   
    return (
        <div>
            <div>
                    <Card sx={{ maxWidth: 275 }} object-fit="scale-down">
                    <CardMedia
                        component="img"
                        height="375"
                        image={product.url}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {product.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {product.category}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        ${product.price}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {product.locations.neighborhood}
                        </Typography>
                    </CardContent>
                    </Card>
            </div>
            
        </div>
      );
    }

export default ProductCard