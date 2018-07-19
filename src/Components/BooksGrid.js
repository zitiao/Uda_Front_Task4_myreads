import React from 'react'
import '../App.css'
import BookMoveSelect from './BookMoveSelect'


// class BookShelf extends React.Component{
// 	render(){
// 		return ( 
// 			     <div className="bookshelf">
//                   <h2 className="bookshelf-title">{this.props.shelfName}</h2>
//                   <div className="bookshelf-books">
//                   	<BooksGrid bookList = {this.props.bookList} shelfName = {this.props.shelfName}/>
//                   </div>
//                 </div>
// 		)
// 	}
// }

class BooksGrid extends React.Component {
	render() {
		return (
			<ol className="books-grid">
			{

				this.props.bookList.map((item) => (
					<li key = {item.id}>
					<div className="book">
					<div className="book-top">
					<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: "url(" + item.imageLinks.thumbnail + ")" }}></div>
						<div className="book-shelf-changer">
							<BookMoveSelect bookObj = {item}/>
						</div>
					</div>
					<div className="book-title">{item.title}</div>
					<div className="book-authors">{item.authors}</div>
					</div>
					</li>		
				))	
			}
			</ol>
		)
	}
}

export default BooksGrid