import React from 'react'
import ReplyIcon from '@material-ui/icons/Reply';
import FavoriteIcon from '@material-ui/icons/Favorite';

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
                <div>
                </div>
                <p>{tweet.text}</p>
                <div className="tweet-icons">
                    <span className="tweet-icon"><ReplyIcon /></span>
                    <span className="tweet-icon"><FavoriteIcon className="heart-button" /></span>
                    <span>{tweet.likes.length || ''}</span>
                </div>
            </div>
        </div>
    </div>)
}