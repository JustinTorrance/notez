import React, { Component } from 'react';

class Card extends Component {
  
  displayNoteText = () => {
    return this.props.text.map(note => {
        return note.text
    })
  }

  render() {
    return (
      <div className='Card'>
        <h3>{this.props.title}</h3>
        <li>{this.displayNoteText()}</li>
      </div>
    )
  }
}

export default Card;