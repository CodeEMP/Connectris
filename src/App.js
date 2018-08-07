import React, { Component } from 'react';
import './App.css';
import Game from './components/game.jsx';
import Home from './components/homepage.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/game" component={Game} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
