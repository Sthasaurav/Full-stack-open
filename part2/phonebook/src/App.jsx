import { useEffect, useState } from 'react';
import axios from 'axios'
import phonenumber from './service/phonenumber';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';
import Search from './components/Search';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    phonenumber.getData()
      .then(data => {
        setPersons(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleDelete = (id, name) => {
    const alertDelete = window.confirm(`Do you want to delete ${name}?`);

    if (alertDelete) {
      phonenumber.remove(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id));
        })
        .catch(error => {
          console.error('Error deleting person:', error);
        });
    }
  };





  return (
    <div>
      <h2>Phonebook</h2>
      <Search handleSearchChange={handleSearchChange} search={search} />

      <h2>add a new</h2>
      <PersonForm persons={persons} setPersons={setPersons} />

      <h2>Numbers</h2>
      <Filter filteredPersons={filteredPersons} onDelete={handleDelete} />
    </div>
  );
};


export default App;
