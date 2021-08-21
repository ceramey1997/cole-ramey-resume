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
                <p className="home-info">| Engineer | Python | SQL | Web-dev | App Developer |</p>
            </div>
            <div className="home-container">
                <p className="home-about-me">
                    My name is Cole Ramey and I am a current resident of Auburn, AL. In 2016 I started a job as a coating technician at SiO<sub>2</sub> Materials Science. After observing the automation engineer’s role on the assembly line robots, I quickly realized software engineering was what I wanted to study.
                </p>
                <p className="home-about-me">
                    I began my college career at Southern Union State Community College with a full scholarship. During this time, I was promoted to a Laboratory Technician at SiO<sub>2</sub>. After two years at Southern Union, I transferred to Auburn University to finish my degree in Software Engineering. As a result of my transfer, I became a Co-op with ADTRAN, a telecommunications networking provider in Huntsville, AL. My time at ADTRAN helped solidify my interest in software as well as strengthen my skills as a developer. I was able to work with many technologies, spanning from Python to OpenStack, as well as general testing and team collaboration with larger codebases.
                </p>
                <p className="home-about-me">
                    Taking knowledge from my co-op, I returned to Auburn and interviewed for a System’s Engineer position at SiO<sub>2</sub>. I was offered a job and began my software career. In this position I have been able to work on may Dev-Op systems that successfully perform internal tracking of incoming raw materials, product, and lab testing results in order to better streamline production, CofA generation, and customer shipments. Building this system allowed me to dive deeper into software aspects that I had not yet used in industry. I developed a complex SQL database, VBA for automation, and HTML JavaScript and CSS for the UI that was used throughout the company. The implementation of this system allowed SiO<sub>2</sub> to gain better productivity after partnering with Moderna as a part of project warp-speed.
                </p>
                <p className="home-about-me-end">
                    As grateful as I am for my time at SiO<sub>2</sub>, I am now graduating with my bachelor’s degree in Software Engineering from Auburn University and looking forward to finding new opportunities in my field.
                </p>
            </div>
        </div>
    </div>
    )
}

export default Home