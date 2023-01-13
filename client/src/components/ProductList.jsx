import React, {useState} from 'react'
import ProductCard from './ProductCard'
import Grid from '@mui/material/Grid';
import Search from './Search';
import LocationFilterOptions from './LocationFilterOptions';

const ProductList = ({products, locations}) => {
    const [searchTerm, setSearchTerm] = useState("")
    const [filter, setFilter] = useState("Forrest Hills")

    const filteredLocation = products.filter((prod) => {
      if (prod.locations[0]?.neighborhood === filter) {
        return filteredLocation
      } else {
        return products
      }
    })

    // const filteredLocation = products.filter(
    //   (product) => product.locations[0]?.neighborhood === filter
    // );

    const productsDisplay = products.filter((prod) => 
      prod.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const productCards = productsDisplay.map(product => <ul key={product.id}><ProductCard product={product}/></ul>)
    
  

  return (
    <div>
      <h2 align="center"> Products</h2>
      <div align="center"><LocationFilterOptions align="center" setFilter={setFilter} filter={filter} locations={locations} /></div>
      <Search align="center" searchTerm={searchTerm} onChangeSearch={setSearchTerm} />
      <Grid container spacing={2}>
      {productCards}  
      </Grid>
    </div>
  )
}

export default ProductList
