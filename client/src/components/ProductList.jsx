import React from 'react'
import ProductCard from './ProductCard'
import Grid from '@mui/material/Grid';

const ProductList = ({products}) => {

    const productCards = products.map(product => <ul key={product.id}><ProductCard product={product}/></ul>)
    
  return (
    <div>
      <h2> Products</h2>
      <Grid container spacing={2}>
      {productCards}  
      </Grid>
    </div>
  )
}

export default ProductList
