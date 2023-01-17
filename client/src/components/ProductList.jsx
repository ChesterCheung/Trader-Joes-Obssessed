import React, {useState} from 'react'
import ProductCard from './ProductCard'
import Grid from '@mui/material/Grid';
import Search from './Search';
import LocationFilterOptions from './LocationFilterOptions';


const ProductList = ({products, locations}) => {
    const [searchTerm, setSearchTerm] = useState("")
    const [filter, setFilter] = useState(products)
    const [reset, setReset] = useState(false)

    // const finalDisplay = products.filter(() => {
    //   if (filter === "All") {
    //     return products
    //   } else {
    //     return filteredLocation
    //   }
    // })

    const handleResetTrue = () => setReset(true) 
    const handleResetFalse = () => setReset(false) 


    const filteredLocation = products.filter(
      (product) => product.locations[0]?.id === filter
    );

    const resetLocation = products.filter((prod) => 
    prod.name.toLowerCase().includes(searchTerm.toLowerCase())
  )
 
    const productsDisplay = filteredLocation.filter((prod) => 
      prod.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const productCards = productsDisplay.map(product => <ul key={product.id}><ProductCard product={product}/></ul>)

    const resetCards = resetLocation.map(product => <ul key={product.id}><ProductCard product={product}/></ul>)
    
  return (
    <div>
      <h2 align="center"> Products</h2>
      <div align="center"><LocationFilterOptions handleResetFalse={handleResetFalse} align="center" products={products} setFilter={setFilter} filter={filter} locations={locations} /></div>
      <Search align="center" searchTerm={searchTerm} onChangeSearch={setSearchTerm} />
      <div align="center"><button onClick={handleResetTrue}>View All Products</button></div>
      <Grid container spacing={2}>
      {reset ? resetCards : productCards}  
      </Grid>
    </div>
  )
}

export default ProductList
