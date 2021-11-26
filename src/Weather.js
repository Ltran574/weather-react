import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      description: response.data.weather[0].description,
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div className="weather-app">
        <div className="weather-app-wrapper">
          <form>
            {" "}
            <div className="row">
              <div className="col-9">
                <input
                  type="text"
                  id="city-input"
                  placeholder="Type a city... "
                  className="form-control me-3"
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
          <br />
          <h1 className="city">{weatherData.city}</h1>
          <h2>
            {" "}
            <div className="current-date">
              {" "}
              Last Updated:Thursday 3:35pm
              <br />
              25 November
            </div>
            <div className="text-capitalize"> {weatherData.description}</div>
          </h2>
          <div className="row">
            <div className="col-8">
              <span className="temperature">
                <img
                  src={weatherData.iconURL}
                  alt={weatherData.description}
                  className="float-left"
                />
                {Math.round(weatherData.temperature)}
              </span>{" "}
              <span className="unit">°C</span>
            </div>
            <div className="col-4">
              <ul>
                <li> Wind: {weatherData.wind}km/h </li>
                <li> Humidity: {weatherData.humidity}% </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let city = "Sydney";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=a867e25f2d83db579421a57fd8e937ec&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return "loading";
  }
}
