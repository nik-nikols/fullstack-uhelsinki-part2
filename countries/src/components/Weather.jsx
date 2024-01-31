const Weather = ({ location, weather }) => {
    if (weather === null) {
        return (<i>Current weather not available</i>)
    }

    return (
        <div>
            <h2>Weather in {location}</h2>
            <div>temperature {weather.temperature}</div>
            <div><img src={weather.condition.icon} alt={weather.condition.text} /></div>
            <div>wind {weather.wind}</div>
        </div>
    )
}

export default Weather