import React, { useState } from 'react';
import axios from 'axios';
import phonenumber from '../service/phonenumber';

function PersonForm({ persons, setPersons }) {
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const nameExists = persons.some(person => person.name === newName);
        const numberExists = persons.some(person => person.number === newNumber);

        if (nameExists) {
            alert(`${newName} already exists in phonebook`);
        } else if (numberExists) {
            alert(`${newNumber} already exists in phonebook`);
        } else {
            const newPerson = { name: newName, number: newNumber };

               // Use the service to send POST request
               phonenumber
               .create(newPerson)
               .then(returnedPerson => {
                   // Update state with the new person
                   setPersons(persons.concat(returnedPerson));
               })
               .catch(error => {
                   console.error('Error adding person:', error);
               });

            // Clear input fields
            setNewName('');
            setNewNumber('');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    name: <input value={newName} onChange={(e) => setNewName(e.target.value)} />
                </div>
                <br />
                <div>
                    number: <input type="text" value={newNumber} onChange={(e) => setNewNumber(e.target.value)} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    );
}

export default PersonForm;
