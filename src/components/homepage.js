import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import * as gameActions from '../actions/gameActions.js';
import Friendslist from './friendslist.js';
import Matches from './currentmatches.js';
import Matchmaking from './matchmaking.js'
import { connect } from 'react-redux';

class home extends Component {

  

  playHandler(){
    this.props.actions.clickPlay();
  }

  render () {
    return (
      <div>
        <header className="header">
          <h1>Connectris Alpha</h1>
        </header>
        <Link to="/game" onClick={()=>this.playHandler()}><button>PLAY LOCAL</button></Link>
        <div>
          <Switch>
            <Route path="/friends" component={Friendslist} />
            <Route path="/matches" component={Matches}/>
            <Route path="/matchmaking" component={Matchmaking} />
          </Switch>
        </div>
        <div className="homemenu">
          <Link to="/matches"><button className="homebutton">Games</button></Link>
          <Link to="/matchmaking"><button className="homebutton">Find match</button></Link>
          <Link to="/friends"><button className="homebutton">Friends</button></Link>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: {
      clickPlay : function() {
        dispatch(gameActions.gameSetUp())
      }
    }
  }
}

const Home = connect(null,mapDispatchToProps)(home)

export default Home;
