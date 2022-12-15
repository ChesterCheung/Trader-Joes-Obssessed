import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import { UserContext } from '../context/user';

const NavBar = () => {

  const {user, setUser} = useContext(UserContext)

  const handleLogout = () => {
    fetch("/logout", {method:"DELETE"}).then((r)=>{
        if(r.ok) {
            setUser(null)
        }
    });
}

  return (
    <div>
        <nav>
            <ul>
                <p>Welcome {user.username}</p>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">View Products</Link></li>
                <li><Link to="/myproducts">My Products</Link></li>
                <li><Link to="/myreviews">My Reviews</Link></li>
                <li><Link to="/locations">View Locations</Link></li>
                <li><Link to="/addlocations">Add Locations</Link></li>
                <button onClick={handleLogout}>Logout</button>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar