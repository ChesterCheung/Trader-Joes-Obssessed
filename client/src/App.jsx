import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/Home';
import NavBar from './components/NavBar';
import { UserContext } from './context/user';
import Login from './components/Login';
import ProductList from './components/ProductList';
import MyReviewList from './components/MyReviewList';
import LocationList from './components/LocationList';
import AddLocation from './components/AddLocation';
import ProductReviewPage from './components/ProductReviewPage';
import ProductForm from './components/ProductForm';

const App = () => {
  const {user} = useContext(UserContext)
  const [locations, setLocations] = useState([])
  const [products, setProducts] = useState([])
  const [reviews, setReviews] = useState([])
  

  useEffect(() => {
   
    fetch("/locations")
    .then(resp => resp.json())
    .then(data => setLocations(data))
    
    fetch("/products")
   .then(resp => resp.json())
   .then(data => setProducts(data))

    fetch("/reviews")
   .then(resp => resp.json())
   .then(data => setReviews(data))

  }, [])


  const addLocation = (location) => {
    setLocations([...locations, location])
  }

  const addProduct = (prod) => {
    setProducts([...products, prod])
  }

  const addReview = (review) => {
    setReviews([...reviews, review])
  }

  if (!user) return <Login />

  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/products" element={<ProductList products={products} />}/>
          <Route path="/products/:id" element={<ProductReviewPage addReview={addReview} />}/>
          <Route path="/addproduct" element={<ProductForm locations={locations} addProduct={addProduct} />}/>
          <Route path="/locations" element={<LocationList locations={locations}/>}/>
          <Route path="/addlocations" element={<AddLocation addLocation={addLocation} locations={locations}/>}/>
          <Route path="/myreviews" element={<MyReviewList />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
