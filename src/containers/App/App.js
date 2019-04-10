import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loading from '../../components/Loading/Loading';
import { Route, Switch } from 'react-router-dom';
import CardContainer from '../CardContainer/CardContainer';
import Card from '../Card/Card';
import NewNote from '../NewNote/NewNote';
import BadPath from '../../components/BadPath/BadPath';
import PropTypes from 'prop-types';
import { fetchNotes } from '../../thunks/fetchNotes';

export class App extends Component {

  componentDidMount() {
    this.props.fetchNotes('http://localhost:3001/api/v1/notes');
  }
  
  render() {
    return (
      <div className="App">
        <header>
          <h1>Notez!</h1>
        </header>
        {this.props.loading && <Loading />}
        {this.props.error && <p>{this.props.error}</p>}
        <Switch>
          <Route exact path='/' component={CardContainer} />
          <Route exact path='/new-note' component={NewNote} />
          <Route exact path='/:id' render={({match}) => {
            const { id } = match.params
            const displayNote = this.props.notes.find(note => note.id == id) 
            return displayNote ? <Card {...displayNote} /> : <BadPath />
          }} 
          />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  notes: PropTypes.array
};

export const mapStateToProps = (state) => ({
  loading: state.isLoading,
  error: state.error,
  notes: state.notes
});

export const mapDispatchToProps = (dispatch) => ({
  fetchNotes: (url) => dispatch(fetchNotes(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
