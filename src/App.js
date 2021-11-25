import React from "react";
import "./App.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          Weather Search
          <Weather />
        </header>
        <footer>
          <a href="https://github.com/Ltran574/weather-app">Open source code</a>
          by Laura Tran
        </footer>
      </div>
    </div>
  );
}
