import React, { Component } from 'react'
import { handleLoadData } from '../actions/shared'
import { connect } from 'react-redux'
import TweetList from './TweetList'

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleLoadData());
  }

  render() {
    return (
      <div>
        <TweetList tweets={this.props.tweets} />
      </div>
    )
  }
}


export default connect((store) => ({
  tweets: store.tweets,
}))(App)