import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Friendslist extends Component {
  render() {
    return (
      <div>
        <h1>FRIENDS LIST PH</h1>
        <Link to="/"><button>HOME</button></Link>
      </div>
    )
  }
}
 export default Friendslist;
