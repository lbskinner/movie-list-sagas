import React, { Component } from "react";
import "./App.css";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import DetailsPage from "../DetailsPage/DetailsPage";

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
          <Route path="/details" component={DetailsPage} />
        </div>
      </Router>
    );
  }
}

export default App;
