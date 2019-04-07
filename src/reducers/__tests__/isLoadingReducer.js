import { isLoadingReducer } from '../isLoadingReducer';
import * as actions from '../../actions';

describe('isLoadingReducer', () => {
  const state = false;
  it('should return default state', () => {
    const action = {};
    const results = isLoadingReducer(state, action);
    expect(results).toEqual(state);
  });

  it('should return state with boolean of true', () => {
    const boolean = true;
    const action = actions.isLoading(boolean);
    const results = isLoadingReducer(state, action);
    expect(results).toEqual(boolean);
  });
});