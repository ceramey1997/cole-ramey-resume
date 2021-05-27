import React from 'react'

function Skills() {
    return (
        <div className="skills-development">
            <div className='skills'>
                <h1 className="label">Skills</h1>
                <div className="all-rows">
                    <div className="single-row">
                        <p className="item">Agile (Scrum)</p>
                        <p className="item">Python</p>
                        <p className="item">Javascript (NodeJS, ReactJS)</p>
                        <p className="item">SQL (MySQL, NoSQL)</p>
                    </div>
                    <div className="single-row">
                        <p className="item">HTML5/CSS</p>
                        <p className="item">Unix, Git</p>
                        <p classname="item">Java (Oracle, Android)</p>
                        <p classname="item">Swift</p>
                    </div>
                </div>
            </div>
            <div className="development">
                <h1 className="label">Personal Projects</h1>
                <div className="single-project">
                    <a className="project-title" href="https://github.com">Blues Bot</a>
                    <p className="project-language">Python</p>
                    <p className="project-description">A Bot in discord that allows you to queue up songs for you and your friends to listen to together. It utilizes API's from Google and Youtube and Spotify, and can pull spotify playlists and play songs from a playlist. It also allows for many single song commands.</p>
                </div>
                <div className="single-project">
                    <a className="project-title" href="https://github.com">Overwatch Fight Analyst</a>
                    <p className="project-language">Python</p>
                    <p className="project-description">An API program that watches video's of previous OverWatch games and predicts locations that fights will breakout in following games based on the characters choosen and the map being played in.</p>
                </div>
            </div>
        </div>
    )
}

export default Skills
