import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [search, setSearch] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const nameExists = persons.some(person => person.name === newName);
    const numberExists = persons.some(person => person.number === newNumber);

    if (nameExists) {
      alert(`${newName} already exists in phonebook`);
    } else if (numberExists) {
      alert(`${newNumber} already exists in phonebook`);
    } else {
      setPersons([...persons, { name: newName, number: newNumber, id: persons.length + 1 }]);
    }

    setNewName('');
    setNewNumber('');
  };

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <label htmlFor="">filter shown with</label> <input
        type="text"

        value={search}
        onChange={handleSearchChange}
      />
      <h2>add a new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          number: <input type="text" value={newNumber} onChange={(e) => setNewNumber(e.target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      {filteredPersons.map(person => (
        <p key={person.id}>{person.name} {person.number}</p>
      ))}
    </div>
  );
};

export default App;
