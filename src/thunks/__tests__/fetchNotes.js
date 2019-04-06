import { fetchNotes } from '../fetchNotes';
import { getNotes, isLoading, fetchErrored } from '../../actions';

describe('fetchNotes', () => {
  let mockUrl;
  let mockDispatch;
  let mockNotes;

  beforeEach(() => {
    mockUrl = 'www.somenotes.com';
    mockDispatch = jest.fn();
    mockNotes = [
      { id: '1', title: 'fakeTitle', listItems: [{id: 1, text: 'faketext'}] },
      { id: '2', title: 'fakeTitle2', listItems: [{id: 2, text: 'faketext2'}] }
    ];
  });

  it('calls dispatch with isLoading', () => {
    const thunk = fetchNotes(mockUrl);
    thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true));
  });

  it('calls dispatch with getNotes and isLoading(false) if the response is ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockNotes)
    }));
    const thunk = fetchNotes(mockUrl);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(getNotes(mockNotes));
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false));
  });

  it('calls dispatch with fetchErrored if the response is not okay', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'There was a problem retrieving the data'
    }));
    const thunk = await fetchNotes(mockUrl);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(fetchErrored('There was a problem retrieving the data'));
  });

});
