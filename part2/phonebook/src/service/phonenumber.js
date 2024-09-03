import axios from 'axios'

// const url='http://localhost:3001/persons'

//integrating frontend with backend
// const url='http://localhost:3001/api/persons'
//build for production
const url='/api/persons'

// const url='https://phonebook-backend-coui.onrender.com/api/persons'

const getData=()=>{
const request=axios.get(url)
return request.then(response=>response.data)
    
}
const create=(newPerson)=>{
    const request=axios.post(url,newPerson)
    return request.then(response=>response.data)
        
    }

    const remove = (id) => {
        const request = axios.delete(`${url}/${id}`);
        return request.then(response => response.data);
      };
      const update = (id, updatedPerson) => {
        const request = axios.put(`${url}/${id}`, updatedPerson);
        return request.then(response => response.data);
    };


    export default {getData,create,remove,update}