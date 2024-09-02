import axios from 'axios'

// const url='http://localhost:3001/persons'

//integrating fromend and backend
const url='http://localhost:3001/api/persons'

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