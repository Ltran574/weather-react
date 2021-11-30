import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=a867e25f2d83db579421a57fd8e937ec&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day"> Thu</div>{" "}
          <WeatherIcon code="01d" size={32} />{" "}
          <div className="WeatherForecast-Temperatures">
            {" "}
            <span className="WeatherForecast-Temperature-max">19</span>{" "}
            <span className="WeatherForecast-Temperature-min"> 10 </span>
          </div>
        </div>
      </div>
    </div>
  );
}
