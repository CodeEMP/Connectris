import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Game from './components/game.jsx';
import Home from './components/homepage.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Friendslist from './components/friendslist.js';
import Matches from './components/currentmatches.js';
import Matchmaking from './components/matchmaking.js';
import Login from './components/login.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={Home} />
              <Route path="/friends" component={Friendslist} />
              <Route path="/matches" component={Matches}/>
              <Route path="/matchmaking" component={Matchmaking} />
            <Route path="/game" component={Game} />
            <Route path="/login" component={Login} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
