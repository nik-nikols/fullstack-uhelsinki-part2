import { useState, useEffect } from 'react'
import Weather from './Weather'
import weatherService from '../services/weather'

const Country = ({ country }) => {
    const [weather, setWeather] = useState(null)

    useEffect(() => {
        console.log('Country effect ', country);
        if (country === null) {
            setWeather(null)
        }
        else {
            weatherService
            .getCurrentWeather(`${country.capitalInfo.latlng[0]},${country.capitalInfo.latlng[1]}`)
            .then(response => {setWeather(response)})
            .catch(error => setWeather(null))
        }
    }, [country])

    if (country === null) {
        return null
    }

    return (
        <div>
            <h1>{country.name.common}</h1>
            <div>capital {country.capital}</div>
            <div>area {country.area}</div>
            <h2>languages:</h2>
            <ul>
                {Object.keys(country.languages).map((key) => <li key={key}>{country.languages[key]}</li>)}
            </ul>
            <img src={country.flags.png} alt={country.flags.alt} />
            <Weather location={country.capital} weather={weather} />
        </div>

    )
}

export default Country
