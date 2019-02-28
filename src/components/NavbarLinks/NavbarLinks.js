import React from 'react';
import { NavLink } from 'react-router-dom';


const NavbarLinks = () => {
    return (
        <ul className="navigation-links">
            <li>
                <NavLink to="/bubbles" className="nav-link">Products</NavLink>
            </li>
            <li>
                <NavLink  to="/bundle" className="nav-link">Bundles</NavLink>
            </li>
            <li>
                <NavLink  to="/about" className="nav-link">About us</NavLink>
            </li>
            <li>
                <NavLink  to="/cart" className="nav-link"><i className="fas fa-shopping-cart"></i></NavLink>
            </li>
        </ul>
    )
}

export default NavbarLinks;