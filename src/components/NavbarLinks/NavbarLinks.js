import React from 'react';
import { NavLink } from 'react-router-dom';


const NavbarLinks = () => {

    // let number = localStorage.clear();
    return (
        <ul className="navigation-links">
            <li>
                <NavLink activeStyle={{borderBottom: 'solid 1px white'}} exact to="/" className="nav-link">Home</NavLink>
            </li>
            <li>
                <NavLink activeStyle={{borderBottom: 'solid 1px white'}} to="/bubbles" className="nav-link">Products</NavLink>
            </li>
            <li>
                <NavLink activeStyle={{borderBottom: 'solid 1px white'}}  to="/bundle" className="nav-link">Bundles</NavLink>
            </li>
            <li>
                <NavLink activeStyle={{borderBottom: 'solid 1px white'}} to="/about" className="nav-link">About</NavLink>
            </li>
            <li>
                <NavLink activeStyle={{borderBottom: 'solid 1px white'}} to="/orders" className="nav-link">Orders</NavLink>
            </li>
            <li>
                <NavLink activeStyle={{borderBottom: 'solid 1px white'}}  to="/cart" className="nav-link"><i className="fas fa-shopping-cart"></i></NavLink>
            </li>
        </ul>
    )
}

export default NavbarLinks;