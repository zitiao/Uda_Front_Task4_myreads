import React from 'react'
import * as BooksAPI from '../BooksAPI'
import '../App.css'
import BooksGrid from './BooksGrid'
import { Link } from 'react-router-dom'

class SearchPanal extends React.Component{

  state = {
    books:[]
  }

  searchBooks(query){
    BooksAPI.search(query).then((result) => {
      if (Array.isArray(result)) {
        this.setState((prevState,props) => {
          result.map(function(search_book){
            let shelfInfo = props.allBooks.find((b) => b.id === search_book.id);
            search_book.shelf = shelfInfo?shelfInfo.shelf:'none';      
          })
          return {books:result};
        })
      }
    })
  }

  render(){
    return (
          <div className="search-books">
            <div className="search-books-bar">
            <Link className="close-search" to = '/'>Close</Link>
              <div className="search-books-input-wrapper">
                <input onChange = {event => this.searchBooks(event.target.value)} type="text" placeholder="Search by title or author"/>
              </div>
            </div>
            <div className="search-books-results">
              <BooksGrid bookList = {this.state.books} changeShelf = {this.props.changeShelf}/>
            </div>
          </div>      
    )
  }
}



export default SearchPanal