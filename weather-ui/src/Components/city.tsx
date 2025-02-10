import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTemperatureQuarter, faWind } from "@fortawesome/free-solid-svg-icons";
import '../Styles/city.css';
import { useState, useEffect } from "react";
import axios from "axios";

const CityComponent = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState<any>(null);
    const [error, setError] = useState<string>('');

    const apiKey = "687f5652c22b154f43c362fdbc507178";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather";


    const divStyle = {
        backgroundColor: 'rgba(179, 179, 179, 0.5)',  // Set the background color
        backgroundFilter: 'blur(8px)',
        marginTop: '1%',
      };


      
    const fetchWeatherData = async () => {
        if (!city) return;

        try {
            const response = await axios.get(apiUrl, {
                params: {
                    q: city,
                    appid: apiKey,
                    units: 'metric'
                },
            });
            setWeather(response.data);
            setError('');
        } catch (error) {
            setWeather(null);
            setError('City not found⚠️');
        }
    };

    // Use effect to trigger weather data fetch when city is updated
    useEffect(() => {
        if (city.trim() !== '') {
            fetchWeatherData();
        } else {
            setWeather(null);  // Clear weather data if city is empty
            setError('');
        }
    }, [city]); // Re-run whenever the 'city' value changes

    return (
        <>
            <div id="citydiv">
                <input
                    type="text"
                    name="cityname"
                    id="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)} // Trigger fetching on input change
                    placeholder="Enter city name"
                />
            </div>

            <div id="main" style={divStyle} >
                {error && <p id="error">{error}</p>}
                {weather && (
                    <div id="weatherinfo">
                        <p id="datetime">{new Date(weather.dt * 1000).toLocaleString()}</p>
                        <p id="cityname">{weather.name}</p>
                        <p id="temp">
                            <FontAwesomeIcon icon={faTemperatureQuarter} /> &nbsp;
                            {weather.main.temp}°C &nbsp;/&nbsp;
                            {Math.round((weather.main.temp * 9 / 5) + 32)}°F
                        </p>
                        <p id="icon">
                            <img
                                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                                alt="weather icon" height={100} width={100}
                            />
                        </p>
                        <p id="condition">{weather.weather[0].description}</p>
                        <p id="humid">{weather.main.humidity}%</p>
                        <p id="pre">
                            {weather.main.pressure} &nbsp; <FontAwesomeIcon icon={faWind} />
                        </p>
                    </div>
                )}
            </div>
        </>
    );
};

export default CityComponent;
