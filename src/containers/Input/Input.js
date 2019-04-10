import React, { Component } from 'react';

class Input extends Component {
  constructor() {
    super()
    this.state = {
      text: '',
      completed: false
    }
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value })
  }

  handleBlur = (e) => {
    e.preventDefault();
    if (e.target.value.length > 0) {
      this.props.createNewItem(this.state.text)
    }
  }

  handleKeyDown = (e) => {
    console.log(e.keyCode)
    if( e.keyCode === 13 && e.target.value.length > 0) {
      this.props.createNewItem(this.state.text)      
    }
  }

  render() {
    return (
      <div>
        <input
          className='new-note-inputs'
          placeholder='description'
          value={this.state.text}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          onKeyDown={this.handleKeyDown}
        />
      </div>
    );
  }
}

export default Input;