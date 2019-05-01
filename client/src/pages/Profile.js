import React, { Component } from 'react';
import withAuth from '../components/withAuth';
import API from '../utils/API';
import { Link } from 'react-router-dom';

class Profile extends Component {

  state = {
    username: "",
    email: ""
  };
  componentDidMount() {
    API.getUser(this.props.user.id).then(res => {
      this.setState({
        username: res.data.username,
        email: res.data.email
      })
    });
  }
  render() {
    return (
      <div className="container Profile">
        <div className="page-container">
          <div class="jumbotron jumbotron-fluid">
            <h1 className="salehead" style={{ textAlign: "center" }}>On the profile page!</h1>
            <div className="saleCard" style={{ width: "70rem" }}>
              <ul>Username: {this.state.username}</ul>
              <ul>Email: {this.state.email}</ul>
              <ul><Link to="/">Go home</Link></ul>
            </div>
          </div>
        </div>
      </div>     
    )
  }
}
export default withAuth(Profile);