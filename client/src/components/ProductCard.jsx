import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import { Link } from 'react-router-dom';

const ProductCard = ({product}) => {

   
    return (
        <div>
            <div>
                <Card sx={{ maxWidth: 275 }} object-fit="scale-down">
                <CardMedia
                    component="img"
                    height="375"
                    image={product.url}
                    alt={product.name}
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
                    {product.locations[0].neighborhood}
                    </Typography>
                </CardContent>
                <CardActions>
                <Link to={`/products/${product.id}`}>
                    <Button size="small">See Reviews</Button>
                </Link>
                </CardActions>
                </Card>
            </div>
        </div>
      );
    }

export default ProductCard