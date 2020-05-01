import React, {useContext} from 'react';
import {BookContext} from '../context/BookContext';

export const Navbar = () => {
 const {books} = useContext(BookContext);
 return (
  <div className='navbar'>
   <h1>Pozycje do przeczytania</h1>
   <p>Obecna lista zawiera {books.length} pozycji</p>
  </div>
 );
};

export default Navbar;
