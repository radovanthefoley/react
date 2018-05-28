export function selectBook(book) {
  console.log('selectBook function called: ', book);
  // selectBook is an ActionCreator, it needs to return an action, an object with
  // a type property
  return {type: 'BOOK_SELECTED', payload: book};
}
