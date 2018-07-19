import React from 'react'
import '../App.css'
import * as BooksAPI from '../BooksAPI'

function BookMoveSelect(props){

  function  changeBookState(v, i) {
    BooksAPI.update(i, v).then(function(res) {})
  }

  return ( 
      <select value={props.bookObj.shelf ? props.bookObj.shelf : "none"} onChange = {event => changeBookState(event.target.value,props.bookObj)}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
      </select>
    ) 
}

export default BookMoveSelect