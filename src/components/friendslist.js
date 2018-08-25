import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Friendslist extends Component {
  render() {
    return (
      <div>
        <h1>FRIENDS LIST PH</h1>
        <Link to="/"><button>HOME</button></Link>
        <div>

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
 export default Friendslist;
