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
  const [countdown, setCountdown] = useState('');
  const [globalTimer, setGlobalTimer] = useState('');


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
          clearInterval(globalTimer)
          console.log(`global ${globalTimer}`)

          let timeLeft = 10;
          setCountdown(timeLeft);
          const timer = setInterval(() => {
            timeLeft = timeLeft - 1;
            setCountdown(timeLeft);


            if (timeLeft === 0) {
              setNotification('');
              setNotificationType('');
              clearInterval(timer);
            }
          }, 1000);
          setGlobalTimer(timer)

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
    clearInterval(globalTimer)
    let timeLeft = 10;
    setCountdown(timeLeft);
    const timer = setInterval(() => {
      timeLeft = timeLeft - 1;
      setCountdown(timeLeft);

      if (timeLeft === 0) {
        setNotification('');
        setNotificationType('');
        clearInterval(timer);
      }
    }, 1000);
    setGlobalTimer(timer)

  };



  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification} type={notificationType} countdown={countdown} />


      <Search handleSearchChange={handleSearchChange} search={search} />

      <h2>add a new</h2>
      <PersonForm persons={persons} setPersons={setPersons} handleAdd={handleAdd} />

      <h2>PHONE</h2>
      <Filter filteredPersons={filteredPersons} onDelete={handleDelete} />
    </div>
  );
};

export default App;
