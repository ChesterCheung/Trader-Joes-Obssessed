import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({products}) => {

    const productCards = products.map(product => <ul key={product.id}><ProductCard product={product}/></ul>)
    
  return (
    <div>
      <h2> Products</h2>
      {productCards}  
    </div>
  )
}

export default ProductList