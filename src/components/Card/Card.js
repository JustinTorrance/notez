import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteNote } from '../../thunks/deleteNote';
// import { toggleCompleted } from '../../actions';
import { updateListItems } from '../../thunks/updateListItems';
import PropTypes from 'prop-types';

class Card extends Component {
  
  displayNoteText = () => {
    return this.props.listItems.map(listItem => {
      return (
        <div>
          <li>
            <input
              type="checkbox"
              onChange={this.checkedListItem}
              id={listItem.id}
            />
            {listItem.text}
          </li>
          <button>DELETE LIST-ITEM</button>
        </div>
      )
    })
  };

  checkedListItem = (e) => {
    const foundListItem = this.props.listItems.find(item => {
      return e.target.id == item.id
    });
    this.updateNote(foundListItem.id)
  };

  updateNote = (itemId) => {
    const { id, title, listItems } = this.props;
    const url = `http://localhost:3001/api/v1/notes/${id}`
    const updatedListItems = this.props.listItems.map(listItem => {
      if (listItem.id === itemId) {
        listItem.completed = !listItem.completed;
      } else {
        return listItem
      }
    })
    const object = {id, title, listItems}
    this.props.updateListItems(url, object);
  };

  deleteNote = (e) => {
    const { value } = e.target;
    const url = `http://localhost:3001/api/v1/notes/${value}`;
    this.props.deleteNote(url, value)
  };

  render() {
    const { title, id, listItems } = this.props
    return (
      <div className='Card'>
        <h3>{title}</h3>
        {this.displayNoteText()}
        <button onClick={this.deleteNote} value={id}>DELETE NOTE</button>
      </div>
    )
  }
}

Card.propTypes = {
  notes: PropTypes.array.isRequired,
  deleteNote: PropTypes.func.isRequired,
  updateListItems: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  listItems: PropTypes.array.isRequired
};

export const mapStateToProps = (state) => ({
  notes: state.notes
});

export const mapDispatchToProps = (dispatch) => ({
  deleteNote: (url, id) => dispatch(deleteNote(url, id)),
  updateListItems: (url, updatedListItem) => dispatch(updateListItems(url, updatedListItem))
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
