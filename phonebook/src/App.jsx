import { useState, useEffect } from 'react'
import PersonList from './components/PersonList'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(allPersons => {
        setPersons(allPersons)
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

    personService
      .create(personObject)
      .then(createdPerson => {
        setPersons(persons.concat(createdPerson))
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

  const handleDelete = (id) => {
    const person = persons.find((element) => element.id === id)
    if (window.confirm(`Delete ${person.name}?`)) {
      personService
        .deletePerson(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id))
        })
    }
  }

  const filteredPersons = persons.filter((value) => value.name.toLowerCase().includes(filter))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filter} handleFilter={handleFilter} />
      <h2>add a new</h2>
      <PersonForm handleSubmit={addNew} nameValue={newName} phoneValue={newPhone} handleNewName={handleNewName} handleNewPhone={handleNewPhone} />
      <h2>Numbers</h2>
      <PersonList persons={filteredPersons} handleDelete={handleDelete} />
    </div>
  )
}

export default App