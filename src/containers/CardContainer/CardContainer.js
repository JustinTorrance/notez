import React, { Component } from 'react';
import { fetchNotes } from '../../thunks/fetchNotes';
import { connect } from 'react-redux';
import Card from '../../components/Card/Card';
import { NavLink } from 'react-router-dom';

export class CardContainer extends Component {

  componentDidMount() {
    this.retrieveNotes();
  }

  retrieveNotes = () => {
    const url = 'http://localhost:3001/api/v1/notes';
    this.props.fetchNotes(url);
  };

  render() {

    let noteCards = this.props.notes.map(note => {
      return (
        <Card
          key={note.id}
          id={note.id}
          title={note.title}
          listItems={note.listItems}
          retrieveNotes={this.retrieveNotes}
        />)
    });

    return(
      <section>
        <div className='new-note-button-wrapper'>
            <NavLink className='new-note-link' to='/new-note'>
              <button className='new-note-button'>Create a new note!</button>
            </NavLink>
          </div>
        <div className='CardContainer'>
          {noteCards}
        </div>
      </section>
    )
  }
}

export const mapStateToProps = (state) => ({
  notes: state.notes
});

export const mapDispatchToProps = (dispatch) => ({
  fetchNotes: (url) => dispatch(fetchNotes(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);