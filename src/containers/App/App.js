import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loading from '../../components/Loading/Loading';
import { Route } from 'react-router-dom';
import CardContainer from '../CardContainer/CardContainer';
import NewNote from '../NewNote/NewNote';

export class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Notez!</h1>
        {this.props.loading && <Loading />}
        <Route exact path='/' component={CardContainer} />
        <Route exact path='/new-note' component={NewNote} />
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  loading: state.isLoading,
});

export default connect(mapStateToProps)(App);
