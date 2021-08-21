import React from 'react'

import '../style/personalProjects.css'

function PersonalProjects() {
    return (
    <div className="development">
        <h1 className="label">Personal Projects</h1>
        <div className="single-project">
            <p className="project-title" >Blues Bot (<a href="https://github.com/ceramey1997/BluesBot" className='project-link'>Github</a>)</p>
            <p className="project-language">Python</p>
            <p className="project-description">The “Blues Bot” is an automation bot that can play music in a chatroom with you and your friends. This bot stands out due to its capability to interact with Spotify. Previous Discord music bots only interacted with YouTube’s API, therefore the user had to queue up each song individually. Blues Bot can queue up an entire playlist from Spotify. This capability allows for users to enjoy their music for a much longer period without having to input more songs. Having this capability allows more time for gaming and less time for queueing up songs. This project was written in Python3 and utilizes API’s from Google, YouTube, and Spotify.</p>
        </div>
        <div className="single-project">
            <p className="project-title">Gifty ICard (<a href="https://apps.apple.com/us/app/gifty-icard/id1579197194" className='project-link'>IOS App Store</a>, <a href="https://github.com/ceramey1997/GiftCardTracker" className="project-link">Github Page</a>)</p>
            <p className="project-language">Swift</p>
            <p className="project-description">Gifty ICard is an iPhone application on the App Store. It was developed using Swift in XCode. During the holidays many teachers receive a great deal of gift cards. Although receiving many gift cards is great for teachers, the problem is no one can remember the balance on the card. Therefore, this app is the solution. It’s simple: You input your gift card into the app and each new gift card is generated a Unique Identifier. This identifier is then written on the physical gift card. Now, each time you go out and want to use a gift card, you simply open the application and locate the entry with the unique identifier that you originally transcribed onto the card. Once this is done, you now know the remaining balance. This app also allows features such as, reducing the balance of the card, adding money to the card, and removing the card entirely. This project uses IOS’s Core Data to store information into the phone’s on-board memory.</p>
        </div>
        <div className="single-project">
            <p className="project-title">Games (<a className="project-link" href="https://github.com/ceramey1997/TicTacToe">TicTacToe</a>, <a className="project-link" href="https://github.com/ceramey1997/BlackJack">BlackJack</a>)</p>
            <p className="project-language">C++ and Python</p>
            <p className="project-description">TicTacToe is a command line game that was written in C++. This game allows a user to play against a bot or another person. The bot’s moves are not random and are chosen based on the user’s previous move with the intension of winning. Many times, a TicTacToe game with the bot ends in a draw due to the simplicity of the game.</p>
            <p className="project-description">BlackJack is a command line game written in Python. This game is always played against a dealer (which is a simple AI). The bot, like a real blackjack dealer, knows the rules. It knows when to stay, when to hit, and it knows whether to count the Ace as a one or an eleven. This bot keeps score if the user plays more than one game.</p>
        </div>
    </div>
    )
}

export default PersonalProjects