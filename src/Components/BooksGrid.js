import React from 'react'
import '../App.css'
import BookMoveSelect from './BookMoveSelect'

class BooksGrid extends React.Component {
	render() {
		return (
			<ol className="books-grid">
			{

				this.props.bookList.map((item) => (
					<li key = {item.id}>
					<div className="book">
					<div className="book-top">
					<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${item.imageLinks.thumbnail?item.imageLinks.thumbnail:'default'})` }}></div>
						<div className="book-shelf-changer">
							<BookMoveSelect bookObj = {item}/>
						</div>
					</div>
					<div className="book-title">{item.title?item.title:'Unknown Title'}</div>
					<div className="book-authors">{item.authors?item.authors:'Unknown Authors'}</div>
					</div>
					</li>		
				))	
			}
			</ol>
		)
	}
}

export default BooksGrid