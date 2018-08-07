import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Matches extends Component {
  render() {
    return (
      <div>
        MATCH LIST PH
        <h1>MATCH LIST PH</h1>
        <Link to="/"><button>HOME</button></Link>
        <div className="homemenu">
          <Link to="/matches"><button className="homebutton">Games</button></Link>
          <Link to="/matchmaking"><button className="homebutton">Find match</button></Link>
          <Link to="/friends"><button className="homebutton">Friends</button></Link>
        </div>
      </div>
    )
  }
}
 export default Matches;
