import { NewNote, mapDispatchToProps } from './NewNote';
jest.mock('../../thunks/addNote');

describe('NewNote', () => {
  const addNote = jest.fn()
    
  describe('mapDispatchToProps', () => {
    it('should call dispatch when using a function from mapDispatchToProps', () => {
      const mockDispatch = jest.fn();
      const mockNote = {title: 'Walk dog', listItems: [{id: 1, text: 'Find leash'}]};
      const mockUrl = 'www.url.com';
      const actionToDispatch = addNote(mockUrl, mockNote);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.addNote(mockUrl,mockNote);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });

});