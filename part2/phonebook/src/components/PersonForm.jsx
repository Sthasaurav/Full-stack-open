import React, { useState } from 'react';

const PersonForm = ({ persons, setPersons }) => {
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
            setPersons([...persons, { name: newName, number: newNumber}]);
        }

        setNewName('');
        setNewNumber('');
    };

    return (
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
    );
};

export default PersonForm;
