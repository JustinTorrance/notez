import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteNote } from '../../thunks/deleteNote';

class Card extends Component {
  
  displayNoteText = () => {
    return this.props.listItems.map(listItem => {
      return (
        <div>
          <li>
            <input
              type="checkbox"
              onChange={this.findId}
            />
            {listItem.text}
          </li>
          <button>DELETE LIST-ITEM</button>
        </div>
      )
    })
  }

  findId = (e) => {
    console.log(this.props.listItems)
    console.log(e.target)
    // this.handleChecked(id)
  }

  // handleChecked = (id) => {
    //the id for the specific list item will be passed into this function
    // const value = e.target.type
    // console.log(this.props.listItems)
    // if (value === 'checkbox') {
      // console.log('checked')
      // this.setState({completed: !this.state.completed})
  //   }
  // }

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
  deleteNote: (url, id) => dispatch(deleteNote(url, id))
})

export default connect(null, mapDispatchToProps)(Card);
