import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }])
  const [newName, setNewName] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const nameExist = persons.some((person) => person.name === newName);
    if (nameExist) {
      alert("Name you entered already exists")
      setNewName('')

    }
    else {
      setPersons([...persons, { name: newName }])
      setNewName('')

    }

  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>

      {persons.map(person => <p key={person.name}>{person.name}</p>)}

    </div>
  )
}

export default App
