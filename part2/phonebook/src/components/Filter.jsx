import React from 'react'

function Filter({ filteredPersons, onDelete }) {

  return (
    <div>
      {filteredPersons.map(person => (
        <p key={person.id}>{person.name} {person.number}
          <button onClick={() => onDelete(person.id, person.name)}>delete</button></p>

      ))}
      {console.log(filteredPersons)}



    </div>
  )
}

export default Filter
