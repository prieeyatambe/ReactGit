import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTemperatureQuarter, faWind } from "@fortawesome/free-solid-svg-icons";
import '../Styles/city.css';
import { useState, useEffect } from "react";
import axios from "axios";
const CityComponent = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState('');
    const apiKey = "687f5652c22b154f43c362fdbc507178";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
    const divStyle = {
        backgroundColor: 'rgba(179, 179, 179, 0.5)', // Set the background color
        backgroundFilter: 'blur(8px)',
        marginTop: '1%',
    };
    const fetchWeatherData = async () => {
        if (!city)
            return;
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
        }
        catch (error) {
            setWeather(null);
            setError('City not found⚠️');
        }
    };
    // Use effect to trigger weather data fetch when city is updated
    useEffect(() => {
        if (city.trim() !== '') {
            fetchWeatherData();
        }
        else {
            setWeather(null); // Clear weather data if city is empty
            setError('');
        }
    }, [city]); // Re-run whenever the 'city' value changes
    return (_jsxs(_Fragment, { children: [_jsx("div", { id: "citydiv", children: _jsx("input", { type: "text", name: "cityname", id: "city", value: city, onChange: (e) => setCity(e.target.value), placeholder: "Enter city name" }) }), _jsxs("div", { id: "main", style: divStyle, children: [error && _jsx("p", { id: "error", children: error }), weather && (_jsxs("div", { id: "weatherinfo", children: [_jsx("p", { id: "datetime", children: new Date(weather.dt * 1000).toLocaleString() }), _jsx("p", { id: "cityname", children: weather.name }), _jsxs("p", { id: "temp", children: [_jsx(FontAwesomeIcon, { icon: faTemperatureQuarter }), " \u00A0", weather.main.temp, "\u00B0C \u00A0/\u00A0", Math.round((weather.main.temp * 9 / 5) + 32), "\u00B0F"] }), _jsx("p", { id: "icon", children: _jsx("img", { src: `https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`, alt: "weather icon", height: 100, width: 100 }) }), _jsx("p", { id: "condition", children: weather.weather[0].description }), _jsxs("p", { id: "humid", children: [weather.main.humidity, "%"] }), _jsxs("p", { id: "pre", children: [weather.main.pressure, " \u00A0 ", _jsx(FontAwesomeIcon, { icon: faWind })] })] }))] })] }));
};
export default CityComponent;
