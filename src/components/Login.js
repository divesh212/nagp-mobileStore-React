import React, { Component } from 'react';
import * as actions from '../actions/index';
import { connect } from 'react-redux';
class Login extends Component {

  state = {
    username: null,
    password: null,
    error: null,
    authenticated: false
  };

  validateUser = (username, password) => {
    if(username === "user1" && password === "pass1") {
      return true;
    } else {
      this.setState({error: "Invalid username or password."})
      return false;
    }
  }

  handleChange = (event) => {
    switch (event.target.name) {
      case "username":
        this.setState({ username: event.target.value });
        break;
      case "password":
        this.setState({ password: event.target.value });
        break;
      default:
        break;
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if(this.validateUser(this.state.username, this.state.password)) {
      console.log("valid");
      this.props.onAuth(true, this.state.username);
      this.props.history.push("/");
    } else {
      console.log("invalid");
    }
  }

  render() {

    const loginstyle = {
      width: "600px",
      marginTop: "135px",
      marginLeft: "20%"
    }
    return (
      <div className="container" >
        <div className="card login-form-card" style={loginstyle}>
          <div className="card-header">
            <h2>Sign In</h2>
          </div>
          <div class="card-body">
            <form onSubmit={this.handleSubmit}>
              <div class="form-group">
                <input type="text" name="username" placeholder="Username" className="form-control" onChange={this.handleChange} />
              </div>

              <div class="form-group">
                <input type="password" name="password" placeholder="Password" className="form-control" onChange={this.handleChange} />
              </div>
              {this.state.error!=null && 
                <span>{this.state.error}</span>
              }
              <div>
                <button class="btn btn-primary btn-dark">Login</button>
                <a class="btn btn-link text-black-50" href="#">Back</a>
              </div>
            </form >
          </div >
        </div >
      </div >
    );
  }
}

const mapDispatchToProps =  dispatch => {
  return {
    onAuth: (authenticated, username) => dispatch(actions.login(authenticated, username))
  }
}

export default connect(null,mapDispatchToProps)(Login);