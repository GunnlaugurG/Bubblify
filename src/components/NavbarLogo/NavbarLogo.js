import React from 'react';
import { Link } from 'react-router-dom';



const NavbarLogo = () => {
    let number = localStorage.getItem('number');
    return (
        <Link to={ "/" } ><img className='navigation-logo' src='https://www.freeiconspng.com/uploads/bubbles-png-0.png' alt='logo' /> </Link>
    )
}

export default NavbarLogo;
