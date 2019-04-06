import React, { Component } from 'react';
import { fetchNotes } from '../../thunks/fetchNotes';
import { connect } from 'react-redux';
import Card from '../../components/Card/Card';

export class CardContainer extends Component {

  componentDidMount() {
    const url = 'http://localhost:3001/api/v1/notes';
    this.props.fetchNotes(url);
  }

  render() {

    const noteCards = this.props.notes.map(note => {
      return <Card key={note.id} title={note.title} text={note.body}/>
    })

    return(
      <div>
        {noteCards}
      </div>
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