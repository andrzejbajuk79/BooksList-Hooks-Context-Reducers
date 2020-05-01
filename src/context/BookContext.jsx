import React, {createContext, useReducer, useEffect} from 'react';
import {bookReducer} from '../reducers/BookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
 const [books, dispatch] = useReducer(bookReducer, [], () => {
  const localData = localStorage.getItem('books');
  return localData ? JSON.parse(localData) : [];
 });
 useEffect(() => {
  localStorage.setItem('books', JSON.stringify(books));
 }, [books]);
 return (
  <BookContext.Provider value={{books, dispatch}}>
   {props.children}
  </BookContext.Provider>
 );
};

export default BookContextProvider;

// const addBook = (title, author) => {
//  setBooks([...books, {title, author, id: new Date().valueOf()}]);
// };
// const removeBook = (id) => {
//  console.log('klik', id);

//  setBooks(books.filter((book) => book.id !== id));
// };
