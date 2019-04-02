import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Form extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      listItems: []
    }
  }

  render() {
    return(
      <form>
        <input 
          type="text"
          name="title"
          value={this.state.title}
        />
        <button type="submit">Save</button>
      </form>
    )
  }
}

