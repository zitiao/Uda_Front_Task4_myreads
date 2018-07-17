import React from 'react'
import './App.css'



class BookMoveSelect extends React.Component{
	render(){
		return ( 
                              <select>
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