import React from 'react'
import { NavLink } from 'react-router-dom';
 
import './NavLinks.css';

const NavLinks = props => {
    return <ul className="nav-links">
        <li>
            <NavLink to="/settings" exact>Settings</NavLink>
        </li>
        <li>
            <NavLink to="/signout">SignOut</NavLink>
        </li>
    </ul>
};

export default NavLinks;