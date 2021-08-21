import React from 'react';
import { Link } from 'react-router-dom';
import '../style/navbar.css'

function Navbar() {
    return (
        <nav className='navbar'>
            <ul className="navbar-link">
                <li className="navbar-link-item">
                    <Link to='/home'>Home</Link>
                </li>
                <li className="navbar-link-item">
                    <Link to='/'>Resume</Link>
                </li>
                <li className="navbar-link-item">
                    <Link to='/personal-projects'>Personal Projects</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar