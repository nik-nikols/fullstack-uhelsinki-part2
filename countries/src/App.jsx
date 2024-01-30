import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import CountryList from './components/CountryList'
import countriesService from './services/countries'

function App() {
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])

  const hook = () => {
    countriesService
      .getAll()
      .then(countriesList => {
        setCountries(countriesList)
      })
  }

  useEffect(hook, [])

  const handleFilter = (event) => {
    setSearch(event.target.value.toLowerCase());
  }

  const filteredCountries = search ? countries.filter((c) => c.name.common.toLowerCase().includes(search)) : [];
  
  return (
    <>
      <Filter value={search} handleFilter={handleFilter} />
      <CountryList countries={filteredCountries} />
    </>
  )
}

export default App
