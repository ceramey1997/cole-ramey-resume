import React from 'react';
import '../style/navbar.css'

function Navbar() {


    return (
        <div className='navbar'>
            <ul className="navbar-link">
                <li className="navbar-link-item"><a href="/">Home</a></li>
                <li className="navbar-link-item"><a href="/cole-ramey-resume/resume">Resume</a></li>
                <li className="navbar-link-item"><a href="/cole-ramey-resume/personal-projects">Personal Projects</a></li>
                <li className="navbar-link-item"><a href="/cole-ramey-resume/cover-letter">Cover Letter</a></li>
            </ul>
        </div>
    )
}

export default Navbar