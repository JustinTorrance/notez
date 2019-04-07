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

  handleChecked = (e) => {
    const value = e.target.type
    if (value === 'checkbox') {
      this.setState({completed: !this.state.completed})
    }
  }

  render() {
    return (
      <div>
        <input
          name="completed"
          type="checkbox"
          checked={this.state.completed}
          onChange={this.handleChecked}
        />
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