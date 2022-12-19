import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ProductReviewList from './ProductReviewList';


const ProductReviewPage = ({addReview}) => {
  const [product, setProduct] = useState([])
  const [allUsers, setAllUsers] = useState([])
  const { id } = useParams()
  
  useEffect(() => {
   
    fetch(`/products/${id}`)
    .then(resp => resp.json())
    .then(data => setProduct(data))

    fetch("/users")
    .then(resp => resp.json())
    .then(data => setAllUsers(data))
    
  }, [id])


  return (
    <div>
      <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '40vh',
            }}>
          <Card sx={{ maxWidth: 275 }} object-fit="scale-down">
          <CardMedia
              component="img"
              height="375"
              image={product.url}
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
          </CardContent>
          </Card>
      </div>
      <ProductReviewList addReview={addReview} allUsers={allUsers} product={product} />
    </div>
  )
}

export default ProductReviewPage