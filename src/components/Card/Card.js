import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteNote } from '../../thunks/deleteNote';
import { toggleCompleted } from '../../actions';

class Card extends Component {
  
  displayNoteText = () => {
    return this.props.listItems.map(listItem => {
      return (
        <div>
          <li>
            <input
              type="checkbox"
              onChange={this.isolateListItemId}
              id={listItem.id}
            />
            {listItem.text}
          </li>
          <button>DELETE LIST-ITEM</button>
        </div>
      )
    })
  }

  isolateListItemId = (e) => {
    console.log(e.target.id);
    const foundListItem = this.props.listItems.find(item => {
      return e.target.id == item.id
    })
    this.props.toggleCompleted(foundListItem.id)
  }

  deleteNote = (e) => {
    const { value } = e.target;
    console.log(value)
    const url = `http://localhost:3001/api/v1/notes/${value}`;
    this.props.deleteNote(url, value)
  }

  render() {
    const { title, id } = this.props
    return (
      <div className='Card'>
        <h3>{title}</h3>
        {this.displayNoteText()}
        <button onClick={this.deleteNote} value={id}>DELETE NOTE</button>
      </div>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  deleteNote: (url, id) => dispatch(deleteNote(url, id)),
  toggleCompleted: (id) => dispatch(toggleCompleted(id))
})

export default connect(null, mapDispatchToProps)(Card);
