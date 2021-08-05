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
                        <p className="item">Java (Oracle, Android)</p>
                        <p className="item">Swift</p>
                    </div>
                </div>
            </div>
            <div className="development">
                <h1 className="label">Personal Projects</h1>
                <div className="single-project">
                    <a className="project-title" href="https://github.com/ceramey1997/BluesBot">Blues Bot</a>
                    <p className="project-language">Python</p>
                    <p className="project-description">A Bot in discord that allows you to queue up songs for you and your friends to listen to together. It utilizes API's from Google and Youtube and Spotify, and can pull spotify playlists and play songs from a playlist. It also allows for many single song commands.</p>
                </div>
                <div className="single-project">
                    <p className="project-title">Gifty ICard (<a href="https://github.com/ceramey1997" className="project-title">IOS App Store</a>, <a href="https://github.com/ceramey1997" className="project-title">Github Page</a>)</p>
                    <p className="project-language">Swift</p>
                    <p className="project-description">This application is a gift card tracker that assigns a unique identifier to every gift card. This UID is written on the physical gift card and allows you to keep track of your gift cards and how much money is on them. This application is targeted for people with professions that receive gift cards at their job, like a teacher.</p>
                </div>
                <div className="single-project">
                    <p className="project-title">Games (<a className="project-title" href="https://github.com/ceramey1997/TicTacToe">TicTacToe</a>, <a className="project-title" href="https://github.com/ceramey1997/BlackJack">BlackJack </a>)</p>
                    <p className="project-language">C++ and Python</p>
                    <p className="project-description">Small commandline games. Both games handle input's from a user and both have a computer that you play against. The Bot for BlackJack is intelagent and knows the winner and loser for each hand.</p>
                </div>
            </div>
        </div>
    )
}

export default Skills
