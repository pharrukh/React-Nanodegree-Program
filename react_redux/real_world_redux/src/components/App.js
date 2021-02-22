import React, { Component } from 'react'
import { handleLoadData } from '../actions/shared'
import { connect } from 'react-redux'
import TweetList from './TweetList'
import Navigation from './Navigation'
import LoadingBar from 'react-redux-loading'
import NewTweet from './NewTweet'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleLoadData());
  }

  render() {
    return (
      <div>
        <LoadingBar />
        {this.props.loading === true ? null : <NewTweet />}
      </div>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return { loading: authedUser === null }
}
export default connect(mapStateToProps)(App)