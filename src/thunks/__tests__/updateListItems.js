import { updateListItems } from '../updateListItems';
import { fetchErrored } from '../../actions';

describe('updateListItems', () => {

  let mockUrl;
  let mockDispatch;
  let mockNote;

  beforeEach(() => {
    mockUrl = 'www.somenotes.com';
    mockDispatch = jest.fn();
    mockNote = { id: '2', title: 'fakeTitle2', listItems: [{id: 2, text: 'faketext2'}] };
  });

  it('should dispatch fetchErrored with a message if the response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'Something went wrong'
    }))
    const thunk = updateListItems(mockUrl, mockNote);
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(fetchErrored('Something went wrong'))
  })
})