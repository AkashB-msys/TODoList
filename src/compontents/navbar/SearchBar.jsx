import React from 'react'
import "./Nav.css"

function SearchBar(props) {
  return (
    <input className="searchbar" {...props}/>
  )
}

export default SearchBar