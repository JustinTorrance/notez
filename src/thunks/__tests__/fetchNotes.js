import { fetchNotes } from '../fetchNotes';
import { getNotes, isLoading } from '../../actions';

describe('fetchNotes', () => {
  let mockUrl;
  let mockDispatch;

  beforeEach(() => {
    mockUrl = 'www.somenotes.com';
    mockDispatch = jest.fn();
  });

  it('calls dispatch with isLoading', () => {
    const thunk = fetchNotes(mockUrl);
    thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  });
});
