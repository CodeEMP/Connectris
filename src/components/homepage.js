import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import * as gameActions from '../actions/gameActions.js';
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
