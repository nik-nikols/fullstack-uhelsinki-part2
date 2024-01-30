import Country from './Country'

const CountryList = ({ countries }) => {
    if (countries && countries.length > 0) {
        if (countries.length > 10) {
            return (<div>Too many matches, specify another filter</div>)
        }
        else if (countries.length > 1) {
            return (
                <ul>
                {countries.map((country) => <li key={country.cioc}>{country.name.common}</li>)}
                </ul>
            )
        }
        else {
            return (
                <>
                    <Country country={countries[0]} />
                </>
            )
        }
    }
    else {
        return null;
    }

}

export default CountryList