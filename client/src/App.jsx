import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/Home';
import NavBar from './components/NavBar';
import { UserContext } from './context/user';
import Login from './components/Login';
import ProductList from './components/ProductList';
import MyProductList from './components/MyProductList';
import MyReviewList from './components/MyReviewList';
import LocationList from './components/LocationList';

const App = () => {
  const {user} = useContext(UserContext)
  const [locations, setLocations] = useState([])

  useEffect(() => {
    fetch("/locations")
    .then(resp => resp.json())
    .then(data => setLocations(data))
  }, [])

  if (!user) return <Login />

  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/products" element={<ProductList/>}/>
          <Route path="/myproducts" element={<MyProductList />}/>
          <Route path="/myreviews" element={<MyReviewList />}/>
          <Route path="/locations" element={<LocationList locations={locations}/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
