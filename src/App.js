import logo from "./logo.svg";
import "./App.css";
import weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Hello from react</h1>
        <weather />
      </header>
    </div>
  );
}

export default App;
