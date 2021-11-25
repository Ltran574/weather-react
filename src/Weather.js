import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Search() {
  const [city, setCity] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=a867e25f2d83db579421a57fd8e937ec`;
    axios.get(apiUrl).then(getWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  function getWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }
  let form = (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search for a city"
          onChange={updateCity}
        />
        <input type="submit" value="search" />
      </form>
      <small>
        <a href="https://github.com/Ltran574/weather-app">Open source code</a>
        by Laura Tran
      </small>
    </div>
  );

  if (loaded) {
    return (
      <div>
        {" "}
        {form}
        <ul>
          <li> Temperature: {Math.round(weather.temperature)}°C </li>
          <li> Wind: {weather.wind} km/h </li>
          <li> Humidity: {weather.humidity}% </li>
          <li>
            {" "}
            <img src={weather.icon} alt={weather.description} />{" "}
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
