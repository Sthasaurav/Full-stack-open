import React from 'react'

function Filter({filteredPersons}) {
    
  return (
    <div>
         {filteredPersons.map(person => (
        <p key={person.id}>{person.name} {person.number}</p>
      ))}
      
      
    </div>
  )
}

export default Filter
