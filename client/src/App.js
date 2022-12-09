import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/Home';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/products" element={<ProductList/>}/>
          <Route path="/myproducts" element={<MyProductList />}/>
          <Route path="/myreviews" element={<MyReviewList />}/>
          <Route path="/locations" element={<LocationList />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
