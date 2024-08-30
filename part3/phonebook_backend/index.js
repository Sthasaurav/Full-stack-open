const express = require('express')
const app = express()

const persons = 
  [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]


app.get('/api/persons/', (request, response) => {
  response.send(persons);
});

app.get('/info', (request, response) => {
const numberofpeople=persons.length;
const date=new Date();
// const output=`<p>Phonebook has info for ${numberofpeople} people <p>${date}</p>`
response.send(`<p>Phonebook has info for ${numberofpeople} people <p>${date}</p>`) ;
});

app.get('/api/persons/:id', (request, response) => {
    const id = request.params.id
    const person = persons.find(person => person.id === id)
    if (person) {
      response.json(person);
    } else {
      response.status(404).json({ error: 'Person not found' });
    }
  });

//   app.delete('/api/persons/:id', (request, response) => {
//     const id = request.params.id
//     persons = persons.filter(note => note.id !== id)
  
//     response.status(204).end()
//   })
// app.post('/', (req,res)=>{
//     console.log('its a post request')
//     res.send('hello post')
// })


const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})