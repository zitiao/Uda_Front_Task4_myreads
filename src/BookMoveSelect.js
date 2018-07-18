import React from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI'


class BookMoveSelect extends React.Component {
  changeBookState(v, i) {
    BooksAPI.update(i, v).then(function(res) {})
  }

  render() {
    return (
      <select onChange = {event => this.changeBookState(event.target.value,this.props.bookObj)}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
    )
  }
}

export default BookMoveSelect