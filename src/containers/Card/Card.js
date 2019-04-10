import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteNote } from '../../thunks/deleteNote';
import { updateListItems } from '../../thunks/updateListItems';
import PropTypes from 'prop-types';
import { toggleCompleted, deleteListItem } from '../../actions';

export class Card extends Component {

  separateCheckedItems = () => {
    return this.props.listItems.filter(listItem => {
      return listItem.completed;
    });
  }

  separateUncheckedItems = () => {
    return this.props.listItems.filter(listItem => {
      return !listItem.completed;
    });
  }

  displayNoteText = (sortedListItems) => {
    return sortedListItems.map(listItem => {
      return (
        <div className='note-list' key={listItem.id}>
          <li className='list-items' style={{ textDecorationLine: listItem.completed? 'line-through' : 'none' }}>
            <input
              className='checkbox'
              type='checkbox'
              onChange={this.checkedListItem}
              id={listItem.id}
            />
            {listItem.text}
          </li>
          <button onClick={(e) => this.deleteListItem(e)} id={listItem.id} className='list-item-delete-button'>x</button>
        </div>
      )
    })
  };

  deleteListItem = (e) => {
    const listItems = this.props.listItems.filter(item => (item.id != e.target.id));
    const { title, id } = this.props;
    const revisedNote = { title, id, listItems };
    const url = `http://localhost:3001/api/v1/notes/${id}`;
    this.props.deleteListItem(e.target.id);
    this.props.updateListItems(url, revisedNote);
  };

  checkedListItem = (e) => {
    const foundListItem = this.props.listItems.find(item => {
      return e.target.id == item.id
    });
    this.updateNote(foundListItem.id);
    this.props.toggleCompleted(e.target.id);
  };

  updateNote = (itemId) => {
    const { id, title, listItems } = this.props;
    const url = `http://localhost:3001/api/v1/notes/${id}`;
    this.props.listItems.map(listItem => {
      if (listItem.id == itemId) {
        return listItem.completed = !listItem.completed;
      } else {
        return listItem
      }
    });
    const object = {id, title, listItems}
    this.props.updateListItems(url, object);
  };

  deleteNote = (e) => {
    const { value } = e.target;
    const url = `http://localhost:3001/api/v1/notes/${value}`;
    this.props.deleteNote(url, value)
  };

  render() {
    const { title, id } = this.props
    return (
      <div className='Card'>
        <h3 className='note-title'>{title}</h3>
        {this.displayNoteText(this.separateUncheckedItems())}
        {this.displayNoteText(this.separateCheckedItems())}
        <div className='note-delete-button-wrapper'>
          <button className='note-delete-button' onClick={this.deleteNote} value={id}>DELETE NOTE</button>
        </div>
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
  updateListItems: (url, updatedListItem) => dispatch(updateListItems(url, updatedListItem)),
  toggleCompleted: (id) => dispatch(toggleCompleted(id)),
  deleteListItem: (id) => dispatch(deleteListItem(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
