import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BooksGrid from './BooksGrid'
import SearchPanal from './SearchPanal'
import {
  Route,
  Link
} from 'react-router-dom'

class BooksApp extends React.Component {
    state = {
      /**
       * TODO: Instead of using this state variable to keep track of which page
       * we're on, use the URL in the browser's address bar. This will ensure that
       * users can use the browser's back and forward buttons to navigate between
       * pages, as well as provide a good URL they can bookmark and share.
       */
      // showSearchPage: false,
      allBooks: [],
      shelf: ["currentlyReading", "wantToRead", "read"]
    }

    componentDidMount() {
      BooksAPI.getAll().then((result) => this.setState({
        allBooks: result
      }))
    }

    render() {
      return (
        <div className="app">
        <Route exact path = '/search' render = {
          () => (<SearchPanal />)
        }/>
        <Route exact path = '/' render = {
          () => (
                      <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                    {
                      this.state.shelf.map((s) => (
                        <div className="bookshelf" key  = {s}>
                          <h2 className="bookshelf-title">{s}</h2>
                          <div className="bookshelf-books">
                            <BooksGrid bookList = {this.state.allBooks.filter((b) => (b.shelf === s))} shelfName = {this.props.shelfName}/>
                          </div>
                        </div>
      ))
  }

  <
  /div> < /
div > <
  div className = "open-search" >
  <Link to = '/search'>Add a book</Link> <
  /div> < /
div >
)
}
/>



<
/div>
)
}
}

export default BooksApp