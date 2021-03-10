import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { handleLoadData } from '../actions/shared'
import { connect } from 'react-redux'
import TweetList from './TweetList'
import Navigation from './Navigation'
import LoadingBar from 'react-redux-loading'
import NewTweet from './NewTweet'
import TweetPage from './TweetPage'
import Nav from './Navigation'
import ReactLoading from 'react-loading';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleLoadData());
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <Nav />
          {this.props.loading === true ? null :
            <div>
              <Route path="/" exact component={TweetList} />
              <Route path="/tweet/:id" component={TweetPage} />
              <Route path="/new" component={NewTweet} />
            </div>
          }
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return { loading: authedUser === null }
}
export default connect(mapStateToProps)(App)