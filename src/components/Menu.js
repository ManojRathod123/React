import React from 'react';
import '../index.css';
import {Link} from 'react-router-dom';

const Menu = () => {
return(
    <div className ='menu'>
        <ul>
            <li>
               <Link to="/">Home</Link> 
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <li>
                <Link to="/user">User</Link>
            </li>
                       
            
        </ul>
    </div>
)
}; 

export default Menu;