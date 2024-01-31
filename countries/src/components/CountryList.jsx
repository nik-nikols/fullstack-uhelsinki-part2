import Country from './Country'

const CountryList = ({ countries, handleShow }) => {
    if (countries && countries.length > 0) {
        if (countries.length > 10) {
            return (<div>Too many matches, specify another filter</div>)
        }
        else if (countries.length > 1) {
            return (
                countries.map((country) => {
                    return (
                        <div key={country.ccn3}>
                            <span>{country.name.common}</span>
                            <button onClick={() => handleShow(country)}>show</button>
                        </div>
                        )
                })
            )
        }
        else {
            return (
                <Country country={countries[0]} />
            )
        }
    }
    else {
        return null;
    }

}

export default CountryList