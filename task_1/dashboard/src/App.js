import React from "react";
import logo from "./logo.jpg";
import "./App.css";
import utils from "./utils.js";

const year = utils.getFullYear(Date.now());
const footer = utils.getFooterCopy(false);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Logo" />
        <h1>School Dashboard</h1>
      </header>
      <hr />
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <hr />
      <div className="App-footer">
        <p>
          {year}
          {footer}
        </p>
      </div>
    </div>
  );
}

export default App;
