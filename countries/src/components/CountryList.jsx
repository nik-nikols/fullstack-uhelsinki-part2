import Country from './Country'

const CountryList = ({ countries }) => {
    if (countries && countries.length > 0) {
        if (countries.length > 10) {
            return (<div>Too many matches, specify another filter</div>)
        }
        else if (countries.length > 1) {
            return (
                <>
                {countries.map((country) => <div key={country.cioc}>{country.name.common}</div>)}
                </>
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