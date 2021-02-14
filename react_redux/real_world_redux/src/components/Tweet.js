import React from 'react'

export default function Tweet({ tweet }) {
    const date = new Date(tweet.timestamp)
    return (<div className="tweet">
        <div className="author">
            <img className="avatar" src="https://tylermcginnis.com/would-you-rather/sarah.jpg" />
        </div>
        <div className="tweet-info">
            <div >
                <span>{tweet.author}</span>
                <span> {date.toUTCString()}</span>
                <p>{tweet.text}</p>
                <div className="tweet-icons">
                    <span>{tweet.likes.length}</span>
                </div>
            </div>
        </div>
    </div>)
}