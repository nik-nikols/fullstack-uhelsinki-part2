const Country = ({ country }) => {
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
        </div>

    )
}

export default Country
