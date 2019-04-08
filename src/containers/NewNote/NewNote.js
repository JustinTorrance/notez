import React, {Component} from 'react';
import Input from '../Input/Input';
import { connect } from 'react-redux';
import { addNote } from '../../thunks/addNote';
import { NavLink } from 'react-router-dom';

export class NewNote extends Component {
  constructor() {
    super()
    this.state = {
      inputs: [],
      title: '',
      listItems: []
    }
  }

//add save button
//onclick, save button dispatches thunk, passing in title,listItems
//thunk is post request to backend

  createNewItem = (text) => {
    const newListItem = { id: Date.now(), text, completed: false }
    const newInput =  <Input key={Date.now()} createNewItem={this.createNewItem} />
    const listItems = [...this.state.listItems, newListItem]
    const inputs = [...this.state.inputs, newInput]
    this.setState({ listItems, inputs })
  }
  
  handleTitleChange = (e) => {
    this.setState({ title: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const url = 'http://localhost:3001/api/v1/notes'
    const { title, listItems } = this.state
    this.props.addNote(url, {title, listItems})
  }

  render() {
    const mappedState = this.state.inputs.map(form => {
      return form
    })
    return(
      <form>
        <input type="text"
          placeholder='title'
          value={this.state.title}
          onChange={this.handleTitleChange}
        />
        <Input createNewItem={this.createNewItem} />
        {mappedState}
        <button type="submit" onClick={this.handleSubmit}>Submit</button>
        <NavLink className='route-to-home-link' to='/'>
          <button className='route-to-home-button'>Return to your notes</button>
        </NavLink>
      </form>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  addNote: (url, newNote) => dispatch(addNote(url, newNote))
})

export default connect(null, mapDispatchToProps)(NewNote);
