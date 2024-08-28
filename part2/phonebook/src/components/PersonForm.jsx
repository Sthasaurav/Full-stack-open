import React from 'react'
import { useState } from 'react';

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
            setPersons([...persons, { name: newName, number: newNumber, id: persons.length + 1 }]);
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
                    number: <input type="number" value={newNumber} onChange={(e) => setNewNumber(e.target.value)} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>


        </div>
    )
}

export default PersonForm
