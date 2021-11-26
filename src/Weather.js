import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a867e25f2d83db579421a57fd8e937ec&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="weather-app">
        <div className="weather-app-wrapper">
          <form onSubmit={handleSubmit}>
            {" "}
            <div className="row">
              <div className="col-9">
                <input
                  type="text"
                  id="city-input"
                  placeholder="Type a city... "
                  className="form-control me-3"
                  autoFocus="on"
                  onChange={handleCityChange}
                />
              </div>
              <div class="col-3">
                <input
                  type="submit"
                  value="Search"
                  button
                  type="button"
                  className="btn btn-success"
                />
              </div>
            </div>
          </form>
          <WeatherInfo data={weatherData} />
        </div>
      </div>
    );
  } else {
    search();
    return <div> "Loading..." </div>;
  }
}
