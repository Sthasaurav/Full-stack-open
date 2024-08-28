import React from 'react'

function Search({search,handleSearchChange}) {
  return (
    <>
        <label htmlFor="">filter shown with</label> <input
    type="text"

    value={search}
    onChange={handleSearchChange}
  />
    </>


 
  )
}

export default Search
