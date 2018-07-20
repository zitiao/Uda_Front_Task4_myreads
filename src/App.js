import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './Components/BookList'
import SearchPanal from './Components/SearchPanal'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
    state = {
        /**
         * TODO: Instead of using this state variable to keep track of which page
         * we're on, use the URL in the browser's address bar. This will ensure that
         * users can use the browser's back and forward buttons to navigate between
         * pages, as well as provide a good URL they can bookmark and share.
         */
        allBooks: [],
        shelf: ["currentlyReading", "wantToRead", "read"]
    }

    componentDidMount() {
        BooksAPI.getAll().then((result) => this.setState({allBooks: result}))
    } 
    // componentDidUpdate (){
    //     BooksAPI.getAll().then((result) => this.setState({allBooks: result}))
    // }

    changeShelf(bookObj,newShelf){
        
        this.setState((prevState,props) => {
                prevState.allBooks.map((book) => {
                    if (book.id === bookObj.id) book.shelf = newShelf;
                })
                return {allBooks:prevState.allBooks};
        })
    }

    render() {
        return (

          <div className="app">
            <Route exact path = '/search' render = {() => (<SearchPanal allBooks = {this.state.allBooks} changeShelf = {this.changeShelf.bind(this)}/>)}/>
            <Route exact path = '/' render = {() => (<BookList shelf = {this.state.shelf} allBooks = {this.state.allBooks} changeShelf = {this.changeShelf.bind(this)}/>)} />
          </div>
        )
    }
}

export default BooksApp