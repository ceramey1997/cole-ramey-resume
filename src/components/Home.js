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
                    &emsp; My name is Cole Ramey, born and raised in Auburn, AL. I graduated high school early was fortunate enough to acquire a job as an coating technician at SiO2 Material Sciences, after seeing the automation engineer’s working on the assembly line robots I quickly realized that I wanted to study software engineering. After that, I started my college career at Southern Union State Community College, and in tandem was promoted to a Laboratory Technician at SiO2. Once my time at Southern Union finished I transferred to Auburn University, and was able to be a part of a co-op with ADTRAN in Huntsville, AL. my time at ADTRAN helped to solidify my interest in software as well as hone my skills as a developer. While at ADTRAN, I was able to work with many technologies spanning from Python to OpenStack, as well as general testing and team collaboration with large codebases. Taking the knowledge from my co-op, I returned to Auburn and interviewed for a System’s Engineer position at SiO2. I was offered the job and was able to start my software career. In this position I have been able to work on many Dev-Op system’s that successfully perform internally tracking of incoming raw materials, product, and lab testing results to better streamline production, CofA generation, and customer shipments. Building this system allowed me to dive deeper into software aspects that I had not used in industry yet. I developed a complex SQL database, I used VBA for email automation, and HTML, JavaScript, and CSS for the UI that was used throughout the company. The implementation of this system allowed SiO2 to scale up tremendously fast after we were chosen to partner with Moderna as a part of project warp-speed. As grateful as I am to my time as SiO2, I am now graduating with my bachelor’s degree in Software Engineering from Auburn University and am ready to move on.
                </p>
            </div>
        </div>
    </div>
    )
}

export default Home