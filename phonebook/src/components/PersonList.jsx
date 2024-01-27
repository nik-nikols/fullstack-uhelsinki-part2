import Person from './Person'

const PersonList = ({ persons }) => {
    return persons.map(person => <Person key={person.id} value={person} />)
}

export default PersonList