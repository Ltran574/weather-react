import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celcius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }
  if (unit === "celcius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature"> {Math.round(props.celcius)}</span>{" "}
        <span className="unit">°C</span> |{" "}
        <a href="/" onClick={showFahrenheit}>
          {" "}
          °F{" "}
        </a>
      </div>
    );
  } else {
    let fahrenheit = (props.celcius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <span className="temperature"> {Math.round(fahrenheit)}</span>{" "}
        <a href="/" onClick={showCelcius}>
          °C{" "}
        </a>{" "}
        | °F{" "}
      </div>
    );
  }
}
