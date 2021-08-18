import React from 'react'

import '../style/personalProjects.css'

function PersonalProjects() {
    return (
    <div className="development">
        <h1 className="label">Personal Projects</h1>
        <div className="single-project">
            <p className="project-title" >Blues Bot (<a href="https://github.com/ceramey1997/BluesBot" className='project-link'>Github</a>)</p>
            <p className="project-language">Python</p>
            <p className="project-description">A Bot in discord that allows you to queue up songs for you and your friends to listen to together. It utilizes API's from Google and Youtube and Spotify, and can pull spotify playlists and play songs from a playlist. It also allows for many single song commands.</p>
        </div>
        <div className="single-project">
            <p className="project-title">Gifty ICard (<a href="https://apps.apple.com/us/app/gifty-icard/id1579197194" className='project-link'>IOS App Store</a>, <a href="https://github.com/ceramey1997/GiftCardTracker" className="project-link">Github Page</a>)</p>
            <p className="project-language">Swift</p>
            <p className="project-description">This application is a gift card tracker that assigns a unique identifier to every gift card. This UID is written on the physical gift card and allows you to keep track of your gift cards and how much money is on them. This application is targeted for people with professions that receive gift cards at their job, like a teacher.</p>
        </div>
        <div className="single-project">
            <p className="project-title">Games (<a className="project-link" href="https://github.com/ceramey1997/TicTacToe">TicTacToe</a>, <a className="project-link" href="https://github.com/ceramey1997/BlackJack">BlackJack</a>)</p>
            <p className="project-language">C++ and Python</p>
            <p className="project-description">Small commandline games. Both games handle input's from a user and both have a computer that you play against.</p>
        </div>
    </div>
    )
}

export default PersonalProjects