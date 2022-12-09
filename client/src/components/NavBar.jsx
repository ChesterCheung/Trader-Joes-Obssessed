import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
        <nav>
            <ul>
                <p>Welcome</p>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">View Products</Link></li>
                <li><Link to="/myproducts">My Products</Link></li>
                <li><Link to="/myreviews">My Reviews</Link></li>
                <li><Link to="/locations">View Locations</Link></li>
                <button> Logout</button>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar