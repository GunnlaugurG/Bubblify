import React from "react";
import NavbarLogo from '../NavbarLogo/NavbarLogo';
import NavbarLinks from '../NavbarLinks/NavbarLinks';

const Navbar = () => {
    return (
        <nav className='navigation-bar'>
            <NavbarLogo />
            <NavbarLinks/>
        </nav>
    )
}

export default Navbar;