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
        <Link to="/game" onClick={()=>this.playHandler()}><button>PLAY</button></Link>
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
