// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import phonenumber from './service/phonenumber';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';
import Search from './components/Search';
import Notification from './components/Notification';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [search, setSearch] = useState('');
  const [notification, setNotification] = useState('');
  const [notificationType, setNotificationType] = useState('');


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
          setNotification(`Deleted ${name}`);
          setNotificationType('delete');

        })
        .catch(error => {
          console.error('Error deleting person:', error);
        });
    }
  };

  const handleAdd = (newPerson) => {
    console.log("added person:", newPerson)
    setNotification(`Added ${newPerson.name}`);

    setNotificationType('add');
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification} type={notificationType} />

      <Search handleSearchChange={handleSearchChange} search={search} />

      <h2>add a new</h2>
      <PersonForm persons={persons} setPersons={setPersons} handleAdd={handleAdd} />

      <h2>Number</h2>
      <Filter filteredPersons={filteredPersons} onDelete={handleDelete} />
    </div>
  );
};

export default App;
