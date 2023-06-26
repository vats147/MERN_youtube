import React, { useEffect }  from "react";
import {Link, Navigate, useNavigate } from  'react-router-dom'
const Nav= ()=>{
       const auth=localStorage.getItem("user");
       const navigate=useNavigate();
       const logout= ()=>{

              localStorage.clear();
              navigate('/signup');
              console.warn("apple");
       }
       return(
              <div>
                     <img alt="logo" className="logo" src="https://lh3.googleusercontent.com/ogw/AOLn63HEc318gHmU2kEaSTo96Xa08aZ3mrupxIheMCWP=s32-c-mo"/>
                    { auth ? <ul className="nav-ul">
                            <li><Link to="/">Products</Link></li>
                            <li><Link to="/add">Add Product</Link></li>
                            <li><Link to="/update">Update Product</Link></li>
                           
                            <li><Link to="/profile">Profile</Link></li>
                            <li> <Link  onClick={logout} to="/logout">Logout " {JSON.parse(auth).name}</Link></li>
                            
                     </ul>
                     :
                     <ul className="nav-ul nav-right" >
                            <li> <Link to="/signup">SignUp</Link> </li>
                                    <li> <Link to="/login">Login</Link> </li>
                     </ul>
                     }
              </div>
       )
}

export default Nav;