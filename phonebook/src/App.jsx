import { useState, useEffect } from 'react'
import PersonList from './components/PersonList'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Notification from './components/Notification'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(allPersons => {
          setPersons(allPersons)
          setNewName('')
          setNewPhone('')
      })
    }
    , []
  )

  const addNew = (event) => {
    event.preventDefault()

    const foundPerson = persons.find((element) => element.name.toLowerCase() === newName.toLowerCase())
    if (foundPerson){
      if (confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`)) {
        const changedPerson = {...foundPerson, number: newPhone}
        personService
          .update(changedPerson)
          .then(updatedPerson => {
            setPersons(persons.map(person => person.id !== changedPerson.id ? person : updatedPerson))
            setNewName('')
            setNewPhone('')
            setMessage(`Updated phone number for ${updatedPerson.name}`)
            setTimeout(() => {
              setMessage(null)
            }, 3000)
        })
      }
      return;
    }
    else {
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
          setMessage(`Added ${createdPerson.name}`)
          setTimeout(() => {
            setMessage(null)
          }, 3000)
    })
    }
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
      <Notification message={message} />
      <Filter value={filter} handleFilter={handleFilter} />
      <h2>add a new</h2>
      <PersonForm handleSubmit={addNew} nameValue={newName} phoneValue={newPhone} handleNewName={handleNewName} handleNewPhone={handleNewPhone} />
      <h2>Numbers</h2>
      <PersonList persons={filteredPersons} handleDelete={handleDelete} />
    </div>
  )
}

export default App