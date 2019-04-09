import React, { Component } from 'react';
import { fetchNotes } from '../../thunks/fetchNotes';
import { connect } from 'react-redux';
import Card from '../../components/Card/Card';
import PropTypes from 'prop-types';

export class CardContainer extends Component {

  componentDidMount() {
    const url = 'http://localhost:3001/api/v1/notes';
    this.props.fetchNotes(url);
  }

  render() {

    let noteCards = this.props.notes.map(note => {
      return <Card key={note.id} id={note.id} title={note.title} listItems={note.listItems}/>
    });

    return(
      <div>
        {noteCards}
      </div>
    )
  }
}

CardContainer.propTypes = {
  notes: PropTypes.array.isRequired,
  fetchNotes: PropTypes.func.isRequired
};

export const mapStateToProps = (state) => ({
  notes: state.notes
});

export const mapDispatchToProps = (dispatch) => ({
  fetchNotes: (url) => dispatch(fetchNotes(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);