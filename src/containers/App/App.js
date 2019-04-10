import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loading from '../../components/Loading/Loading';
import { Route, Switch } from 'react-router-dom';
import CardContainer from '../CardContainer/CardContainer';
import NewNote from '../NewNote/NewNote';
import BadPath from '../../components/BadPath/BadPath';
import PropTypes from 'prop-types';

export class App extends Component {

  render() {
    return (
      <div className="App">
        <header>
          <h1>Notez!</h1>
        </header>
        {this.props.loading && <Loading />}
        {this.props.error && <p>{this.props.error}</p>}
        <Switch>
          <Route exact path='/' exact component={CardContainer} />
          <Route exact path='/new-note' exact component={NewNote} />
          <Route component={BadPath} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export const mapStateToProps = (state) => ({
  loading: state.isLoading,
  error: state.error
});

export default connect(mapStateToProps)(App);
