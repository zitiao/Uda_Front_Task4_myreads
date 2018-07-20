import React from 'react'
import '../App.css'
import BooksGrid from './BooksGrid'
import { Link } from 'react-router-dom'

class BookList extends React.Component {

    render() {
        return (
	        <div className="list-books">
	            <div className="list-books-title">
	              <h1>MyReads</h1>
	            </div>
	            <div className="list-books-content">
	              	<div>
	                    {
	            			this.props.shelf.map((s) => (
		                		<div className="bookshelf" key  = {s}>
		                          <h2 className="bookshelf-title">{s}</h2>
		                          <div className="bookshelf-books">
		                            <BooksGrid changeShelf = {this.props.changeShelf} bookList = {this.props.allBooks.filter((b) => (b.shelf === s))} shelfName = {s}/>
		                          </div>
		                        </div>
	            			))
	            		}

	  				</div> 
	  			</div > 
	  			<div className = "open-search" ><Link to = '/search'>Add a book</Link> </div> 
	  		</div >
        )
    }
}

export default BookList