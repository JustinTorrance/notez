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
    if (e.target.value.length > 0) {
      this.props.createNewItem(this.state.text)
    }
  }

  render() {
    return (
      <div>
        <input
          placeholder='description'
          value={this.state.text}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
        />
      </div>
    );
  }
}

export default Input;