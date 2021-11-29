import React from "react";
import FormattedDate from "./FormattedDate";
import "./Weather.css";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div>
      {" "}
      <h1 className="city">{props.data.city}</h1>
      <h2>
        {" "}
        <div className="current-date">
          {" "}
          <FormattedDate date={props.data.date} />
          <br />
          25 November
        </div>
        <div className="text-capitalize"> {props.data.description}</div>
      </h2>
      <div className="row">
        <div className="col-8">
          <span className="temperature">
            <img
              src={props.data.icon}
              alt={props.data.description}
              className="float-left"
            />
            <WeatherTemperature celcius={props.data.temperature} />
          </span>
        </div>
        <div className="col-4">
          <ul>
            <li> Wind: {props.data.wind}km/h </li>
            <li> Humidity: {props.data.humidity}% </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
