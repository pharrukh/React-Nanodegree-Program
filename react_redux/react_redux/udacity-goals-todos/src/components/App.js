import React from 'react'
import { connect } from 'react-redux'
import { handleLoadData } from '../actions/shared'
import ConnectedGoals from './Goals'
import ConnectedTodos from './Todos'

class App extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(handleLoadData());
  }
  render() {
    if (this.props.loading) {
      return <h3>loading</h3>;
    }

    return (
      <div>
        <ConnectedTodos />
        <ConnectedGoals />
      </div>
    );
  }
}

export default connect((store) => ({
  loading: store.loading,
}))(App);
