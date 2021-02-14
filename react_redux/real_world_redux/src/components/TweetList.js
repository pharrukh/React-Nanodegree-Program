import React from 'react'

export default function TweetList({ tweets }) {
    return (
        <ul>
            {tweets.map(tweet => <li key={tweet.id}> {tweet.text}</li>)}
        </ul>
    )
}