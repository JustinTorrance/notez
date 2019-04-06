import { fetchNotes } from '../fetchNotes';
import { getNotes, isLoading } from '../../actions';

describe('fetchNotes', () => {
  let mockUrl;
  let mockDispatch;
  let mockNotes;

  beforeEach(() => {
    mockUrl = 'www.somenotes.com';
    mockDispatch = jest.fn();
    mockNotes = [
      { id: '1', title: 'fakeTitle', body: [{id: 1, text: 'faketext'}] },
      { id: '2', title: 'fakeTitle2', body: [{id: 2, text: 'faketext2'}] }
    ];
  });

  it('calls dispatch with isLoading', () => {
    const thunk = fetchNotes(mockUrl);
    thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  });

  it('calls dispatch with getNotes if the response is ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockNotes)
    }));
    const thunk = fetchNotes(mockUrl);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(getNotes(mockNotes))
  });
});
