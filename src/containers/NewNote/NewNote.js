import React, {Component} from 'react';
import Input from '../Input/Input';


export class NewNote extends Component {
  constructor() {
    super()
    this.state = {
      inputs: [],
      title: '',
      listItems: []
    }
  }

  createNewItem = (text) => {
    const newListItem = { id: Date.now(), text}
    const newInput =  <Input key={Date.now()} createNewItem={this.createNewItem} />
    const listItems = [...this.state.listItems, newListItem]
    const inputs = [...this.state.inputs, newInput]
    this.setState({ listItems, inputs })
  }
  
  handleTitleChange = (e) => {
    this.setState({ title: e.target.value })
  }

  render() {
    const mappedState = this.state.inputs.map(form => {
      return form
    })
    return(
      <div>
        <input type="text"
          placeholder='title'
          value={this.state.title}
          onChange={this.handleTitleChange}
        />
        <Input createNewItem={this.createNewItem} />
        {mappedState}
      </div>
    )
  }


}

export default NewNote;