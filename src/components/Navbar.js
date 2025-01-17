import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink exact to="/" activeClassName="nav-active">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" activeClassName="nav-active">About</NavLink>
                </li>
                <li>
                    <NavLink to="/faq" activeClassName="nav-active">FAQ</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
