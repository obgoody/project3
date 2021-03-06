import React, { Component } from 'react';
import AuthService from '../components/AuthService';
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor() {
    super();
    this.Auth = new AuthService();
  }

  // componentWillMount() {
  //   if (this.Auth.loggedIn()) {
  //     this.props.history.replace('/');
  //   }
  // }

  handleFormSubmit = event => {
    event.preventDefault();

    this.Auth.login(this.state.email, this.state.password)
      .then(res => {
        // once user is logged in
        // take them to their profile page
        this.props.history.replace(`/search`);
      })
      .catch(err => {
        alert(err.response.data.message)
      });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="page-container">
        <div className="jumbotron">
          <div className="saleCard" style={{ width: "70rem" }}>
            <form onSubmit={this.handleFormSubmit}>
              <h1 className="salehead" style={{ textAlign: "center" }}>Log In</h1>
              <p className="float-right"><Link to="/signup">Go to Sign Up</Link></p>
              <div className="form-group">
                <label htmlFor="email">Email address:</label>
                <input className="form-control"
                  placeholder="Email goes here..."
                  name="email"
                  type="email"
                  id="email"
                  style={{ width: "500px" }}
                  onChange={this.handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="pwd">Password:</label>
                <input className="form-control"
                  placeholder="Password goes here..."
                  name="password"
                  type="password"
                  id="pwd"
                  style={{ width: "500px" }}
                  onChange={this.handleChange} />
              </div>
              <button type="submit" className="btn btn-secondary">Submit</button>
            </form>
          </div>
        </div>
      </div>

    );
  }
}

export default Login;