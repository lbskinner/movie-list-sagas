import React, { Component } from "react";
import "./App.css";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import HomePage from "../HomePage/HomePage";

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
          </ul>
          <Route exact path="/" component={HomePage} />
        </div>
      </Router>
    );
  }
}

export default App;
