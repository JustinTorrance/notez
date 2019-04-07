import { deleteNote } from '../deleteNote';
import { deleteNoteAction, isLoading, fetchErrored } from '../../actions';

describe('deleteNote', () => {
  let mockUrl;
  let mockDispatch;
  let mockNotes;
  let mockId;

  beforeEach(() => {
    mockUrl = 'www.somenotes.com';
    mockDispatch = jest.fn();
    mockId = '1';
    mockNotes = [
      { id: '1', title: 'fakeTitle', listItems: [{id: 1, text: 'faketext'}] },
      { id: '2', title: 'fakeTitle2', listItems: [{id: 2, text: 'faketext2'}] }
    ];
  });

  it('calls dispatch with isLoading', () => {
    const thunk = deleteNote(mockUrl, mockId);
    thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true));
  });

  it('calls dispatch with deleteNote and isLoading(false) if the response is ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockNotes)
    }));
    const thunk = deleteNote(mockUrl, mockId);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(deleteNoteAction(mockId));
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false));
  });

  it('calls dispatch with fetchErrored if the response is not okay', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'There was a problem retrieving the data'
    }));
    const thunk = await deleteNote(mockUrl);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(fetchErrored('There was a problem retrieving the data'));
  });
})

