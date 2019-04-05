import React, { Component } from 'react';
import Input from '../Input/Input'

class App extends Component {
  constructor() {
    super()
    this.state = {
      inputs: [],
      title: '',
      body: []
    }
  }

createNewItem = (text) => {
  const newListItem = { id: Date.now(), text}
  const newInput =  <Input key={Date.now()} createNewItem={this.createNewItem} />
  const body = [...this.state.body, newListItem]
  const inputs = [...this.state.inputs, newInput]
  this.setState({ body, inputs })
}

handleTitleChange = (e) => {
  this.setState({ title: e.target.value })
}

  render() {
    const mappedState = this.state.inputs.map(form => {
      return form
    })
    return (
      <div className="App">
        <h1>Howdy!</h1>
        <input type="text"
          placeholder='title'
          value={this.state.title}
          onChange={this.handleTitleChange}
        />

        <Input createNewItem={this.createNewItem} />
        
        {mappedState}
      </div>
    );
  }
}

export default App;