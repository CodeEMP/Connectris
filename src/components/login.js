import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      password: '',
      remember: false,
    }
  }

  onSubmit(event) {

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              value={this.state.user}
              onChange={(event, newValue) =>
              this.setState({user:newValue})} />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={this.state.password}
              onChange={(event, newValue) =>
              this.setState({password:newValue})} />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
 export default Login;
