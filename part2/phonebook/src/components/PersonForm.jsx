import React, { useState } from 'react';
import phonenumber from '../service/phonenumber';

function PersonForm({ persons, setPersons }) {
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!newName.trim()) {
            alert('Name cannot be empty');
            return;
        }
        if (!newNumber.trim()) {
            alert('Number cannot be empty');
            return;
        }

        const existingPerson = persons.find(person => person.name === newName);

        // const nameExists = persons.some(person => person.name === newName);
        // const numberExists = persons.some(person => person.number === newNumber);

        if (existingPerson) {
            if (window.confirm(`${newName} already exists. Do you want to update the number?`)) {
                phonenumber
                    .update(existingPerson.id, { ...existingPerson, number: newNumber })
                    .then(updatedPerson => {
                        setPersons(persons.map(person =>
                            person.id !== updatedPerson.id ? person : updatedPerson
                        ));
                    })
                    .catch(error => {
                        console.error('Error updating person:', error);
                    });
            }
        } else {
            
            const newPerson = { name: newName, number: newNumber };

            phonenumber
                .create(newPerson)
                .then(returnedPerson => {
                    setPersons(persons.concat(returnedPerson));
                })
                .catch(error => {
                    console.error('Error adding person:', error);
                });
        }

        setNewName('');
        setNewNumber('');
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
