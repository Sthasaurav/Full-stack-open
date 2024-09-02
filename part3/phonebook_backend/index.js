 
const express = require('express')
const app = express()
app.use(express.json())
var morgan = require('morgan')
app.use(morgan("tiny"))

let persons = 
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

  app.delete('/api/persons/:id', (request, response) => {
    const id = request.params.id
   let deletedpersons = persons.filter(person => person.id !== id)
  response.send(deletedpersons)
  })

  const generatedId=()=>{
    const random =Math.floor(Math.random()*1000000)
   
     return random
  }

app.post('/api/persons', (request,response)=>{
    const body= request.body;
    body.id=generatedId();
    if(!body.name||!body.name){
      response.status(404).json({error:"name or number is missing"})
    }

    const existingName=persons.find((person)=>person.name===body.name)
    if(existingName){
      response.status(400).json({error:"name must be unique"})    }
    
      persons=persons.concat(body)
      response.status(201).send(persons)
}
)


const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})