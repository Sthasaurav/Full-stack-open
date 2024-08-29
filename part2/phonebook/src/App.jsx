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

  return (
    <div>
      <h2>Phonebook</h2>
      <Search handleSearchChange={handleSearchChange} search={search} />

      <h2>add a new</h2>
      <PersonForm persons={persons} setPersons={setPersons} />

      <h2>Numbers</h2>
      <Filter filteredPersons={filteredPersons} />
    </div>
  );
};


export default App;
