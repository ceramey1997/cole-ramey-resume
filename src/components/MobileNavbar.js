import { React, useState } from 'react';
import { FaBan, FaBars} from 'react-icons/fa';

import Button from './Button';

import '../style/mobileNavbar.css'

function MobileNavbar() {

    const [showMobileNav, setShowMobileNav] = useState(false)
    const changeShowMobileNav = () => {
        setShowMobileNav(!showMobileNav)
    }

    return (
        <div className='mobile-navbar'>
            {!showMobileNav && <Button text={<FaBars />} onClick={changeShowMobileNav} btnClass='btn' />}
            {showMobileNav && <Button text={<FaBan />} onClick={changeShowMobileNav} btnClass='btn' />}
            {showMobileNav && <ul className='mobile-navbar-link'>
                <li className="mobile-link-item"><a href="/">Home</a></li>
                <li className="mobile-link-item"><a href="/resume">Resume</a></li>
                <li className="mobile-link-item"><a href="/personal-projects">Personal Projects</a></li>
                <li className="mobile-link-item"><a href="/cover-letter">Cover letter</a></li>
            </ul>}
        </div>
    )
}

export default MobileNavbar


/*
            <div className="mobile-navbar">
                {!showMobileNav && <Button text={<FaBars />} onClick={changeShowMobileNav} btnClass='btn' />}

                {showMobileNav && <MobileNavBar showingMobileNav={showMobileNav}/>}
            </div>
            */