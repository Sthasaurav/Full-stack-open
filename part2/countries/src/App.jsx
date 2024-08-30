import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios'

function App() {
  const [search, setSearch] = useState("");
  const [countries,setCountries]=useState('');
  const [selectedCountry,setSelectedCountry]=useState("");


  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    console.log("typed");
    console.log({ search });
  };

  useEffect(() => {
    if (search) {
      axios.get("https://studies.cs.helsinki.fi/restcountries/api/all")
        .then(response => {
          const data = response.data;
          // setCountries(data);
          console.log(data)
        })
        .catch(error => console.error('Error fetching data:', error));
    }
  }, [search]);

  return (
    <>
      <label htmlFor="">find countries</label> <input type="text" value={search} onChange={handleSearchChange} />


    </>
  )
}

export default App
