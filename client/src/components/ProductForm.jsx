import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LocationOptions from './LocationOptions';


const ProductForm = ({addProduct, locations}) => {
    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState("")
    const [location, setLocation] = useState("")
    const [url, setUrl] = useState("")
    const navigate = useNavigate()

    
    const formSubmit = (e) => {
        e.preventDefault()
          fetch("/products", {
              method:"POST",
              headers: {"Content-Type": "application/json",},
              body: JSON.stringify({
                name: name,
                category: category,
                price: price,
                location_id: location,
                url: url}),
          })
          .then((r) => r.json())
          .then((data)=> addProduct(data))
          navigate("/products")
      }

  return (
    <div>
        <form align="center" onSubmit={formSubmit}>
          <Box align="center" sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}}noValidate autoComplete="off">
              <h2>Add Product</h2>
              <TextField
              id="name"
              label="Product Name"
              onChange={e => setName(e.target.value)}
              value={name}
              />
              <TextField
              id="productCategory"
              label="Category"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
              />
              <TextField
              id="price"
              label="Price"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              />
              <TextField
              id="url"
              label="url"
              onChange={(e) => setUrl(e.target.value)}
              value={url}
              />
              <LocationOptions locations={locations} setLocation={setLocation}/>
          </Box>
        <input type="submit" value="Add"></input>
        </form>
    </div>
  )
}

export default ProductForm




// t.string "name"
//     t.string "category"
//     t.integer "price"
//     t.integer "location_id"
//     t.string "url"