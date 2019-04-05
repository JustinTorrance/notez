import React, { Component } from 'react';
import Input from '../Input/Input';
import { fetchNotes } from '../../thunks/fetchNotes';
import { connect } from 'react-redux';
import Loading from '../../components/Loading/Loading';

export class App extends Component {
  constructor() {
    super()
    this.state = {
      inputs: [],
      title: '',
      body: []
    }
  }

componentDidMount() {
  const url = 'http://localhost:3001/api/v1/notes';
  this.props.fetchNotes(url)
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
        {this.props.loading && <Loading />}
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  loading: state.isLoading,
});

export const mapDispatchToProps = (dispatch) => ({
  fetchNotes: (url) => dispatch(fetchNotes(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
