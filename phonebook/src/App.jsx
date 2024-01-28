import { useState, useEffect } from 'react'
import axios from 'axios'
import PersonList from './components/PersonList'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
      axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
    }
    , []
    )

  const addNew = (event) => {
    event.preventDefault()

    if (persons.find((element) => element.name.toLowerCase() === newName.toLowerCase())){
      alert(`${newName} is already added to the phonebook`);
      return;
    }

    const personObject = {
      name: newName,
      number: newPhone
    }

    axios
      .post('http://localhost:3001/persons', personObject)
      .then(response => {
        setPersons(persons.concat(response.data))
        setNewName('')
        setNewPhone('')
      })
  }

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleNewPhone = (event) => {
    setNewPhone(event.target.value)
  }

  const handleFilter = (event) => {
    setFilter(event.target.value.toLowerCase())
  }

  const filteredPersons = persons.filter((value) => value.name.toLowerCase().includes(filter))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filter} handleFilter={handleFilter} />
      <h2>add a new</h2>
      <PersonForm handleSubmit={addNew} nameValue={newName} phoneValue={newPhone} handleNewName={handleNewName} handleNewPhone={handleNewPhone} />
      <h2>Numbers</h2>
      <PersonList persons={filteredPersons} />
    </div>
  )
}

export default App