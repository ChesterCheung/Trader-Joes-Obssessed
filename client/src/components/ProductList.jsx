import React, {useState} from 'react'
import ProductCard from './ProductCard'
import Grid from '@mui/material/Grid';
import Search from './Search';

const ProductList = ({products}) => {
    const [searchTerm, setSearchTerm] = useState("")

    const productsDisplay = products.filter((prod) =>
      prod.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const productCards = productsDisplay.map(product => <ul key={product.id}><ProductCard product={product}/></ul>)
    
  

  return (
    <div>
      <h2 align="center"> Products</h2>
      <Search align="center" searchTerm={searchTerm} onChangeSearch={setSearchTerm} />
      <Grid container spacing={2}>
      {productCards}  
      </Grid>
    </div>
  )
}

export default ProductList
