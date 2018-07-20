import React from 'react'
import '../App.css'
import * as BooksAPI from '../BooksAPI'

function BookMoveSelect(props){

  function  changeBookState(book, shelf,refreshShelf) {
    BooksAPI.update(book,shelf);
    refreshShelf(book, shelf);
  }

  return ( 
      <select value={props.bookObj.shelf ? props.bookObj.shelf : "none"} onChange = {event => changeBookState(props.bookObj,event.target.value,props.changeShelf)}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
      </select>
    ) 
}

export default BookMoveSelect