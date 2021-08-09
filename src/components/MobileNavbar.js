import { React, useState } from 'react';
import { FaBan, FaBars} from 'react-icons/fa';
import { Link } from 'react-router-dom';

import Button from './Button';

import '../style/mobileNavbar.css'

function MobileNavbar() {

    const [showMobileNav, setShowMobileNav] = useState(false)
    const changeShowMobileNav = () => {
        setShowMobileNav(!showMobileNav)
    }

    return (
        <nav className='mobile-navbar'>
            {!showMobileNav && <Button text={<FaBars />} onClick={changeShowMobileNav} btnClass='btn' />}
            {showMobileNav && <Button text={<FaBan />} onClick={changeShowMobileNav} btnClass='btn' />}
            {showMobileNav && <ul className='mobile-navbar-link'>
                <li className="mobile-link-item">
                    <Link to='/'>Home</Link>
                </li>
                <li className="mobile-link-item">
                    <Link to='/resume'>Resume</Link>
                </li>
                <li className="mobile-link-item">
                    <Link to='/personal-projects'>Personal Projects</Link>
                </li>
                <li className="mobile-link-item">
                    <Link to='/cover-letter'>Cover Letter</Link>
                </li>
            </ul>}
        </nav>
    )
}

export default MobileNavbar