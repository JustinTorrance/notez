import { fetchErroredReducer } from '../fetchErroredReducer';
import * as actions from '../../actions';

describe('fetchErroredReducer', () => {
  const state = '';

  it('should return state by default', () => {
    const action = {};
    const results = fetchErroredReducer(state, action);
    expect(results).toEqual(state);
  });

  it('should return state with a message', () => {
    const message = 'There was a problem fetching the data';
    const action = actions.fetchErrored(message);
    const results = fetchErroredReducer(state, action);
    expect(results).toEqual(message);
  });
});