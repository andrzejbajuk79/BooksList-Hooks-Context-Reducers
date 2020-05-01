import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BookContextProvider from './context/BookContext';

ReactDOM.render(
 <BookContextProvider>
  <App />
 </BookContextProvider>,
 document.getElementById('root')
);
