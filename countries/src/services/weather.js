import axios from 'axios'

const api_key = import.meta.env.VITE_WEATHER_API_KEY
const baseUrl = `http://api.weatherapi.com/v1/current.json?key=${api_key}&aqi=no&q=`

const getCurrentWeather = (location) => {
    return axios
        .get(`${baseUrl}${location}`)
        .then(response => {
            return {
                temperature: `${response.data.current.temp_c} Celsius`,
                wind: `${(response.data.current.wind_kph/3.6).toFixed(2)} m/s`,
                condition: { text: `${response.data.current.condition.text}`, icon: `http:${response.data.current.condition.icon}`}
            }
        })
}

export default { getCurrentWeather }