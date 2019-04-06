import React, {Component} from 'react';
import { fetchNotes } from '../../thunks/fetchNotes';
import { connect } from 'react-redux';

export class CardContainer extends Component{

  componentDidMount() {
    const url = 'http://localhost:3001/api/v1/notes';
    this.props.fetchNotes(url)
  }

  render() {
    return(
      <div>
        CardContainer!
      </div>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  fetchNotes: (url) => dispatch(fetchNotes(url))
});

export default connect(null, mapDispatchToProps)(CardContainer);