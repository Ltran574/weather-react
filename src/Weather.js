import React from "react";
import axios from "axios";

export default function Weather() {
  function handleResponse(response) {
    alert(`The weather in New York is ${response.data.main.temp}`);
  }
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&units=metric&appid=a867e25f2d83db579421a57fd8e937ec`;
  axios.get(apiUrl).then(handleResponse);
  return <h2> Hello World </h2>;
}
