import React from 'react'

const Search = ({searchTerm, onChangeSearch}) => {

  return (
    <div align="center" className="ui search" >
        <label>Search</label>
        <input className="prompt" value={searchTerm} onChange={e => onChangeSearch(e.target.value)} />
    </div>
  )
}

export default Search