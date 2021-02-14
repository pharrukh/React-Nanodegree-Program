import React from 'react'
import Tweet from './Tweet'

export default function TweetList({ tweets }) {
    return (
        <ul>
            {tweets.map(tweet => <li key={tweet.id}><Tweet tweet={tweet} /></li>)}
        </ul>
    )
}