import React, { Component } from 'react';

class Card extends Component {
  
  displayNoteText = () => {
    return this.props.listItems.map(listItem => {
      return (
        <div>
          <li>{listItem.text}</li>
          <button>DELETE</button>
        </div>
      )
    })
  }

  render() {
    return (
      <div className='Card'>
        <h3>{this.props.title}</h3>
        {this.displayNoteText()}
      </div>
    )
  }
}

export default Card;