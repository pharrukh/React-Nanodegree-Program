import React, { Component } from 'react'
import { handleLoadData } from '../actions/shared'
import { connect } from 'react-redux'

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleLoadData());
  }
  render() {
    return (
      <div>
        Starter Code
      </div>
    )
  }
}


export default connect()(App)