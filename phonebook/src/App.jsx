import { useState } from 'react'
import PersonList from './components/PersonList'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456', id: 1 },
    { name: 'Ada Lovelace', phone: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', phone: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', phone: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filter, setFilter] = useState('')

  const addNew = (event) => {
    event.preventDefault()

    if (persons.find((element) => element.name.toLowerCase() === newName.toLowerCase())){
      alert(`${newName} is already added to the phonebook`);
      return;
    }

    const personObject = {
      name: newName,
      phone: newPhone
    }

    setPersons(persons.concat(personObject))
    setNewName('')
    setNewPhone('')
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