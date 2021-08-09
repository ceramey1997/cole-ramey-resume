import React from 'react'
import cole_headshot from '../assets/cole_headshot.png'

import '../style/home.css'
function Home() {
    return (
    <div className="home-page">
        <img src={cole_headshot} alt="Cole Ramey Face Picture" className="head-shot" />
        <div className="home-page-info">
            <h1>Cole Edward Ramey</h1>
            <div className="home-container">
                <p className="home-info">| Engineer | Programmer | Musician | App Developer | Friend |</p>
            </div>
            <div className="home-container">
                <p className="home-about-me">Some information about me piouqwehrksjdf;ashepandf;askdhfapseiuhaidhfa;skdhfasuidfhaksjdfhlkasdhflkajshdflkjahsdlfkjhasdlfkjhasdlfkjhasdfklh</p>
            </div>
        </div>
    </div>
    )
}

export default Home