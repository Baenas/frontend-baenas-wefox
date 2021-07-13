import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Main from './components/Main'
import Site from './components/Site'
import Add from './components/Add'

function App() {
  return (
    <div className="App">
      <div className="top-bar">
        <a href="/">
          <span className="top-bar-title">
            Cities arround the World
          </span>
        </a>
      </div>
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/site/:id" component={Site} />
          <Route exact path="/add" component={Add} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
